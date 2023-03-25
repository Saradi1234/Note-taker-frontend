import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { deleteAll } from '../api/api'
const Navbar = (props) => {
  const navigate = useNavigate()
  return (
    <div classNameName='nav'>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'><i className="fa-solid fa-house"></i> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/AddNote'><i className="fa-solid fa-plus"></i> AddNote</Link>
              </li>
              <li onClick={()=>{
                props.deleteAll()
                deleteAll().then(()=>{navigate('/home')}).catch(()=>{});
              }} className="nav-item">
                <Link className="nav-link" to='/DeleteAll'><i className="fa-solid fa-xmark"></i> DeleteAll</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/home'><i className="fa-solid fa-file-export"></i> Export</Link>
              </li>
              <li onClick={() => {
                  localStorage.clear()
                  navigate('/')
                }} className="nav-item">
                <Link className="nav-link" to='/home'><i class="fa-solid fa-right-from-bracket"></i> LOGOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar