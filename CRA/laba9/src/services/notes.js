import axios from "axios";

export const fetchNotes = async (filter) => {
    try {
        var response = await axios.get("https://localhost:7246/notes", {
            params: {
                search: filter?.search || "",
                sortOrder: filter?.sortOrder,
                sortItem: filter?.sortItem,
            },
        });
        return response.data.notes ?? [];
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const createNote = async (note) => {
    try {
        var response = await axios.post("https://localhost:7246/notes", note);
        
        return response.status;
    } catch (e) {
        console.error(e);
    }
};
