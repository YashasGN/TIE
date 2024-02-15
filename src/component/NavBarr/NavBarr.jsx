import React from 'react';
import "./NavBarr.css";
export const NavBarr = () => {
  return (
    <div>
    <nav id="navbar" class="">
    <div class="logo">
        <h4>AGRIC</h4>
        </div>
        <div class="nav-wrapper">
        
        <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#course">Course</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#shop">Shop</a></li>
      <li><a href="#contact">Contact</a></li>
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