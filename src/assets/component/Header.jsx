// import React from 'react';

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // <div>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/login">Login</NavLink>
    //     <NavLink to="/register">Register</NavLink>
    // </div>

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <NavLink className="me-2" to="/">
            Home
          </NavLink>
          <NavLink className="me-2" to="/login">
            Login
          </NavLink>
          <NavLink className="me-2" to="/register">
            Register
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
