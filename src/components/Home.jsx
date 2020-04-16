import React from 'react';
import {NavLink} from 'react-router-dom'
// import logo from '../images/investock.png'

const Home = () => (
  <div className="homepage">
      {/* <img src={logo}/> */}
    <div>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div>
      <NavLink to="/register">Register</NavLink> 
    </div>
  </div>
);

export default Home;