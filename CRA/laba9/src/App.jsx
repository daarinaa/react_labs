import "./App.css";
import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note";
import Filters from "./components/Filters";
import { useEffect, useState } from "react";
import { fetchNotes, createNote } from "./services/notes";

function App() {
  const [ notes, setNotes ] = useState([]);
  const [ filter, setFilter ] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes)
    };

    fetchData();
  }, [filter]);
  
  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
    console.log("Текущие заметки:", notes);
  };

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter} />
      </div>
  
      <ul className="flex flex-col gap-5 w-1/2">
        {Array.isArray(notes) && notes.map((n) => (
            <li key={n.id}>
              <Note
                title={n.title}
                description={n.description}
                createdAt={n.createdAt}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default App;