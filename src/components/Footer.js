import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About TCS</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Newsroom</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Consulting</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Digital Transformation</a></li>
            <li><a href="#">Cloud Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Careers</h4>
          <ul>
            <li><a href="#">Job Opportunities</a></li>
            <li><a href="#">Life at TCS</a></li>
            <li><a href="#">Diversity and Inclusion</a></li>
            <li><a href="#">Campus Connect</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Media</a></li>
          </ul>
        </div>
      </div>
      <p>© 2024 Tata Consultancy Services. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
