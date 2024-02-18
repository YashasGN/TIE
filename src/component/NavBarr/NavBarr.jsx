import React from 'react';
import "./NavBarr.css";
import { NavLink } from 'react-router-dom'

export const NavBarr = () => {
  return (
    <div>
    <nav id="navbar" class="">
    <div class="logo">
        <h4>AGRIC</h4>
        </div>
        <div class="nav-wrapper">
        
        <ul id="menu">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Course'>Course</NavLink></li>
      <li><NavLink to='/Services'>Services</NavLink></li>
      <li><NavLink to='/Shop'>Shop</NavLink></li>
      <li><NavLink to='/Contact'>Contact</NavLink></li>
    </ul>
        </div>
    </nav>
    <div class="menuIcon">
    <span class="icon icon-bars"></span>
    <span class="icon icon-bars overlay"></span>
    </div>
    <div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
    </div>
     
  );
}
