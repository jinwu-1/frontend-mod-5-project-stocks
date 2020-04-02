import React from 'react';
import {NavLink} from 'react-router-dom'

const Home = () => (
  <div className="homepage">
    <div>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div>
      <NavLink to="/register">Register</NavLink> 
    </div>
  </div>
);

export default Home;