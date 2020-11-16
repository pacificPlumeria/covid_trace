import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
      <nav id="navbar">
        <div>
         <ul> 
         <li><Link to="/login">Login</Link></li>
         <li><Link to="/signUp">Sign Up</Link></li>
         <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Contact Info</Link></li>
         </ul>
        </div>
      </nav>
    );
  
}

export default Navbar;
