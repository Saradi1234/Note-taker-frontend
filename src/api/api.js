import axios from "axios"

// const base_URL = "http://localhost:8080"
const base_URL = "https://note-taker-backend.onrender.com"

// CREATE TODO
export const createNote = async (note) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "post",
        url: `${base_URL}/note`,
        headers: { Authorization: token },
        data: note
    })
}

// GET ALL TODOS
export const getNotes = async () => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "get",
        url: `${base_URL}/note`,
        headers: { Authorization: token }
    })
}

// UPDATE TODO
export const updateNote = async (id, note) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "put",
        url: `${base_URL}/note/${id}`,
        headers: { Authorization: token },
        data: note
    })
}

// UPDATE A TODO
export const updateTodoDeleted = async (id, isDeleted) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "put",
        url: `${base_URL}/note/${id}`,
        headers: { Authorization: token },
        data: { isDeleted }
    })
}

// DELETE A TODO
export const deleteOneNote = async (id) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    console.log(id);
    return await axios({
        method: "delete",
        url: `${base_URL}/note/${id}`,
        headers: { Authorization: token },
    })
}

// DELETE ALL
export const deleteAll = async () => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return await axios({
        method: "delete",
        url: `${base_URL}/note`,
        headers: { Authorization: token },
    })
}