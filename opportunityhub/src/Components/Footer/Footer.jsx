import React from 'react';
import './Footer.css'; // Create this file for the CSS styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>
          We love <span className="highlight-blue">software</span> and the <span className="highlight-orange">people</span> who build it.
        </h2>
        <div className="social-icons">
          {/* Replace # with actual links */}
          <a href="#" aria-label="Telegram"><i className="icon-telegram"></i></a>
          <a href="#" aria-label="Discord"><i className="icon-discord"></i></a>
          <a href="#" aria-label="Dribbble"><i className="icon-dribbble"></i></a>
          <a href="#" aria-label="GitHub"><i className="icon-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="icon-linkedin"></i></a>
          <a href="#" aria-label="Devfolio"><i className="icon-devfolio"></i></a>
        </div>
        <div className="footer-links">
          <div>
            <h4>Community</h4>
            <ul>
              <li><a href="#">Organize a hackathon</a></li>
              <li><a href="#">Explore hackathons</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Brand Assets</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
