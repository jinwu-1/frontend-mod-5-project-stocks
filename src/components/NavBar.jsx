import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../images/edited_investock.png'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
      </li>
      <li>
        <NavLink to="/stocks">All Stocks</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li className="logout">
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;