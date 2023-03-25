import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { createNote } from '../api/api'

const AddNote = ({ addNoteHandler }) => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <form onSubmit={async (e) => {
                e.preventDefault()
                const note = {
                    title: e.target.title.value,
                    description: e.target.description.value
                }
                addNoteHandler(note)
                createNote(note)
                    .then(() => {
                        navigate('/home')
                    })
                    .catch(err => { console.log(err) })
            }}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input name='title' type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea name='description' className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Whats on your mind ?'></textarea>
                    <button type="submit" className="btn btn-primary">Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote