import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { updateNote, deleteOneNote } from '../api/api'

const ExpandNote = ({ noteToExpand, updateNoteHandler, deleteNoteHandler }) => {
    const [note, setNote] = useState(noteToExpand)
    const [isEditing, setIsEditing] = useState(false)
    const navigate = useNavigate()
    const onChangeHandler = (key, value) => {
        setNote(rest => ({ ...rest, [key]: value }))
    }
    return (
        <div>
            <Navbar />
            {!isEditing ? <>
                <div class="card">
                    <div class="card-body">
                        {note.title}
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        {note.description}
                    </div>
                </div>
                <button onClick={() => {
                    deleteNoteHandler(note._id)
                    deleteOneNote(note._id).then(() => {
                        navigate("/home")
                    }).catch(() => {})
                }} className="btn btn-primary">Delete</button>
                <button onClick={() => { setIsEditing(true) }} className="btn btn-primary">Update</button>
            </>
                :
                <form onSubmit={async (e) => {
                    e.preventDefault()
                    const updatedNote = {
                        ...note,
                        title: e.target.title.value,
                        description: e.target.description.value
                    }
                    updateNoteHandler(updatedNote)
                    console.log(updatedNote)
                    updateNote(note._id, updatedNote)
                        .then(() => {
                            navigate('/home')
                        })
                        .catch(err => { console.log(err) })
                }}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>
                        <input onChange={e => { onChangeHandler(e.target.name, e.target.value) }} value={note.title} name='title' type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea onChange={e => { onChangeHandler(e.target.name, e.target.value) }} value={note.description} name='description' className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Whats on your mind ?'></textarea>
                        <button onClick={() => {
                            deleteNoteHandler(note._id)
                            setIsEditing(false)
                            deleteOneNote(note._id).then(() => {
                                navigate("/home")
                            }).catch(() => {})
                        }} className="btn btn-primary">Delete</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>}
        </div>
    )
}

export default ExpandNote