import axios from "axios";

export const fetchNotes = async () => {
    try {
        var response = await axios.get("http://localhost:5173/notes");
    } catch (e) {
        console.error(e);
        console.log(response);
    }
};