import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <span class="nav-link active" aria-current="page">Home</span>
        </li>
        <li class="nav-item">
          <span class="nav-link">Features</span>
        </li>
        <li class="nav-item">
          <span class="nav-link">Pricing</span>
        </li>
        <li class="nav-item">
          <span class="nav-link disabled" aria-disabled="true">Disabled</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
