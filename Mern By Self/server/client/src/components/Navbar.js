import React from "react";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
  
      <nav className="navbar navbar-expand-lg ">
        <NavLink className="navbar-brand" to="/">
         <span className="text-danger">IITDharwad</span> <span className="text-success"><strong>Students</strong></span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                <strong>Home</strong> <span className="sr-only">(current)</span>
              </NavLink>

            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/detail">
                <strong>Add</strong> 
              </NavLink>

            </li>
            <li>
            <NavLink className="nav-link" to="/surprize">
                <strong>Surprize</strong>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    
  );
};

export default Navbar;
