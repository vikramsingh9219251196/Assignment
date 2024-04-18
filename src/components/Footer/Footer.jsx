import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title1" >Dribbble</h3>
          <p className='para'>Dribble is the world's leading community for creatives to share, grow, and get hired.</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaDribbble /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaPinterest /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">For designers</h3>
          <ul className="footer-list">
            <li><a href="#">Go Pro!</a></li>
            <li><a href="#">Explore design work</a></li>
            <li><a href="#">Design blog</a></li>
            <li><a href="#">Overtime podcast</a></li>
            <li><a href="#">Playoffs</a></li>
            <li><a href="#">Weekly Warm-Up</a></li>
            <li><a href="#">Refer a Friend</a></li>
            <li><a href="#">Code of conduct</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Hire designers</h3>
          <ul className="footer-list">
            <li><a href="#">Post a job opening</a></li>
            <li><a href="#">Post a freelance project</a></li>
            <li><a href="#">Search for designers</a></li>
          </ul>
          <h3 className="footer-title">Brands</h3>
          <ul className="footer-list">
            <li><a href="#">Advertise with us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Media Kit</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Directories</h3>
          <ul className="footer-list">
            <li><a href="#">Design jobs</a></li>
            <li><a href="#">Designers for hire</a></li>
            <li><a href="#">Freelance designer for hire</a></li>
            <li><a href="#">Tags</a></li>
            <li><a href="#">Places</a></li>
          </ul>
          <h3 className="footer-title">Design Assets</h3>
          <ul className="footer-list">
            <li><a href="#">Dribble Marketplace</a></li>
            <li><a href="#">Creative Market</a></li>
            <li><a href="#">Fontspring</a></li>
            <li><a href="#">Font Squirrel</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Design Resources</h3>
          <ul className="footer-list">
            <li><a href="#">Freelancing</a></li>
            <li><a href="#">Design Hiring</a></li>
            <li><a href="#">Design Portfolio</a></li>
            <li><a href="#">Design Education</a></li>
            <li><a href="#">Creative Process</a></li>
            <li><a href="#">Design Industry Trends</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <span>© 2023 Dribbble. All rights reserved</span>
        </div>
        <div className="dribble-icon">
        <span className='span-dribble'><strong>20,501,853</strong> shots dribbled</span>
          <FaDribbble className='dribble-footer-icon'  />
        </div>
      </div>
    </footer>
  );
};

export default Footer;