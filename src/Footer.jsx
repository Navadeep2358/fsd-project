// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Assuming you have styles for the footer here

const Footer = () => {
  return (
    <footer>
      <span className='footer-title'>ROWDY.COM</span>
      <ul className='socials'>
        <img className="socialmediaicon" src="/facebook.png" alt="Facebook" />
        <img className="socialmediaicon" src="/twitter.png" alt="Twitter" />
        <img className="socialmediaicon" src="/linkedin.png" alt="LinkedIn" />
      </ul>
      <div className='info-footer'>
        <ul>
          <li className='footer-list_header'>Offers</li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <ul>
          <li className='footer-list_header'>Documents</li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Terms Of Service</a></li>
          <li><a href='#'>Cookies</a></li>
        </ul>
        <ul>
          <li className='footer-list_header'>For You</li>
          <li><a href='#'>Manuals</a></li>
          <li><a href='#'>Tutorials</a></li>
          <li><a href='#'>Tips & Tricks</a></li>
          <li><a href='#'>FAQ</a></li>
        </ul>
        <ul>
          <li className='footer-list_header'>Work With Us</li>
          <li><a href='#'>Affiliate</a></li>
          <li><a href='#'>Collaborations</a></li>
          <li><a href='#'>Sponsorships</a></li>
          <li><a href='#'>Partnerships</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
