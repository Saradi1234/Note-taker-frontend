import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Home from "./Components/Home"
import AddNote from "./Components/AddNote"
import * as api from "./api/api"
import { useEffect, useState } from "react"
import ExpandNote from "./Components/ExpandNote"

function App() {
  const [notesList, setNotesList] = useState([])
  const [noteToExpand, setNoteToExpand] = useState({})
  useEffect(() => {
    api.getNotes()
      .then(res => {
        setNotesList(res.data.notes)
        console.log('notesList :: ', res.data.notes)
      }).catch(err => { console.log('error :: ', err) })
  }, [])
  // ADD NOTE HANDLER -
  const addNoteHandler = ({ title, description }) => {
    if (!title || !description) return
    setNotesList(rest => [...rest, { title, description }])
  }
  // UPDATE NOTE HANDLER -
  const updateNoteHandler = (updatedNote) => {
    if (!updatedNote.title || !updatedNote.description) return
    const updatedList = notesList.map(note => {
      if (updatedNote._id === note._id) {
        return updatedNote
      }
      return note
    })
    setNotesList([...updatedList])
  }
  // DELETE NOTE HANDLER -
  const deleteNoteHandler = (id) => {
    if (!id) return
    console.log('id to del:: ', id)
    const updatedList = notesList.filter(note => note._id !== id)
    setNotesList(updatedList)
  }
  // DELETE ALL HANDLER -
  const deleteAll = () => {
    setNotesList([])
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={
          <Home 
            notesList={notesList} 
            setNoteToExpand={setNoteToExpand}
            setNotesList={setNotesList} 
            deleteAll={deleteAll}
          />
        } />
        <Route path="/AddNote" element={
          <AddNote addNoteHandler={addNoteHandler} />
        } />
        <Route path="/ExpandNote" element={
          <ExpandNote
            noteToExpand={noteToExpand}
            updateNoteHandler={updateNoteHandler}
            deleteNoteHandler={deleteNoteHandler}
          />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
