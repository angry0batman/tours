import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Currency</h3>
        <p>US Dollar</p>
      </div>
      <div className="footer-section">
        <h3>Language</h3>
        <select>
          <option>-- Select --</option>
          <optgroup label="Africa">
            <option>Egypt</option>
            <option>Kenya</option>
            <option>Morocco</option>
            <option>Uganda</option>
          </optgroup>
          <optgroup label="Asia">
            <option>Sri Lanka</option>
            <option>Türkiye</option>
            <option>Oman</option>
            <option>Kazakhstan</option>
            <option>Armenia</option>
            <option>Uzbekistan</option>
            <option>Kyrgyzstan</option>
            <option>Qatar</option>
            <option>Dubai</option>
            <option>Azerbaijan</option>
            <option>Saudi Arabia</option>
            <option>Abu Dhabi</option>
            <option>Nepal</option>
            <option>Malaysia</option>
            <option>Jordan</option>
            <option>Thailand</option>
            <option>United Arab Emirates</option>
          </optgroup>
          <optgroup label="Europe">
            <option>Georgia</option>
            <option>Italy</option>
            <option>Greece</option>
            <option>India</option>
          </optgroup>
        </select>
      </div>
      <div className="footer-section">
        <h3>Important Links</h3>
        <ul>
          <li><a href="#manage-booking">Manage Booking</a></li>
          <li><a href="#europe">Europe and Beyond</a></li>
          <li><a href="#uae">Holidays to UAE</a></li>
          <li><a href="#retreats">Delightful Retreats</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#cookie">Cookie Policy</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
