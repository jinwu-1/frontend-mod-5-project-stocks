import React from 'react';
import {NavLink} from 'react-router-dom'
import Image from '../images/homepage_image.png'

const Home = () => (
  <div className="homepage">
    <div>
      <img src={Image} alt="homepage_picture"/>
    </div>
    <div>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div>
      <NavLink to="/register">Register</NavLink> 
    </div>
  </div>
);

export default Home;