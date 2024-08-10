import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#manage-booking">Manage Booking</a></li>
        <li><a href="#europe">Europe and Beyond</a></li>
        <li><a href="#uae">Holidays to UAE</a></li>
        <li><a href="#retreats">Delightful Retreats</a></li>
        <li><a href="#login">Agent Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
