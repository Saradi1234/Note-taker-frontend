import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { getNotes } from '../api/api'

const Home = ({ notesList, setNoteToExpand, setNotesList, deleteAll }) => {
  const [filterText, setFilterText] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("AUTH_TOKEN")
    if(!token) navigate('/')
    getNotes()
      .then(res => {
        setNotesList(res.data.notes)
        console.log('notesList :: ', res.data.notes)
      }).catch(err => { console.log('error :: ', err) })
  }, [])
  return (
    <div>
      <Navbar deleteAll={deleteAll} />
      <input onChange={e => setFilterText(e.target.value)} className="form-control mt-4" type="search" placeholder="Search by title" aria-label="Search" />
      {notesList &&
        notesList.map(note => {
          if (note.title.includes(filterText)) {
            return (
              <div key={note._id} className="card m-4" onClick={() => { 
                setNoteToExpand(note) 
                navigate('/ExpandNote')
                }}>
                <h6 className="card-header">{note.time ?? Date()}</h6>
                <div className="card-body">
                  <h4 className="card-title">{note.title}</h4>
                  <p className="card-text">{note.description}</p>
                </div>
              </div>
            )
          } else return null
        })}
    </div>
  )
}

export default Home