import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/stocks">All Stocks</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>

    // SEMANTIC UI CODE (ONCE YOU HAVE THE DEPENDENCY

    //<div class="ui secondary pointing menu">
    //   <a class="item">
    //      <NavLink to="/">Home</NavLink>
    //   </a>

    //   <a class="item">
    //     <NavLink to="/profile">Profile</NavLink>
    //   </a>

    //   <a class="item active">
    //     <NavLink to="/stocks">All Stocks</NavLink>
    //   </a>
    
    //   <div class="right menu">
    //   <a class="ui item">
    //     Logout
    //   </a>
    //   </div>
    // </div>
    // <div class="ui segment">
    // <p></p>
    // </div>
  )
};

export default NavBar;