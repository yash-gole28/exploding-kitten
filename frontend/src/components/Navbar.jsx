import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand">Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link active" aria-current="page">Home</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Features</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Pricing</span>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled" aria-disabled="true">Disabled</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
