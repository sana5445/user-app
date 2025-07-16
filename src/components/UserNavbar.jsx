import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f28b82' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">User App</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Add User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/search">Search User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/delete">Delete User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/view">ViewALL Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
