import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {state,Logout} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand logo"onClick={()=>{navigate('/')}}> Exploding Kitten </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        
        {state?.user ? <li onClick={Logout} className="nav-item">
          <span className="nav-link" >Logout</span>
        </li>: <li className="nav-item">
          <span className="nav-link" onClick={()=>navigate('/login')}>Login</span>
        </li>}
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
