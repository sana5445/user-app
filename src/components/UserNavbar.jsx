import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">USER-APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search User</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">View All Users</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default UserNavbar