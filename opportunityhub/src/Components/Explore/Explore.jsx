import React, { useState } from 'react';
import './Explore.css';
import  banimg from '../../assets/Screenshot 2024-11-03 223515.png';
import  banimg1 from '../../assets/Screenshot (779).png';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">OpportunityHub</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#cultural">Cultural</a>
        <a href="#hackathons">Hackathons</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
     <div className="explore-container">
     {/* Left Banner Section */}
     <div className="banner">
       <img src={banimg}></img>
     </div>

     {/* Right Sidebar Section */}
     <div className="sidebar">
       <h2 className="sidebar-title">Base Around The World</h2>
       <p>Build a better world on-chain, starting with your local community.</p>
       <div className="region-list">
         <button className="region-button">India</button>
         <button className="region-button">Southeast Asia</button>
         <button className="region-button">Latin America</button>
         <button className="region-button">Africa</button>
       </div>
     </div>
   </div>
   <div className="explore-container">
     {/* Left Banner Section */}
     <div className="banner1">
       <img src={banimg1}></img>
     </div>

     {/* Right Sidebar Section */}
     <div className="sidebar">
       <h2 className="title1">HOTTEST EVENTS </h2>
       
       <div className="events">
        <div className="leftimg">
            

        </div>
       
       </div>
     </div>
     
   </div>
   </>
  );
}

export default Navbar;
