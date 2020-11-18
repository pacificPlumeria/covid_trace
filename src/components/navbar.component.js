import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
      <nav id="navbar">
        <div>
         <ul> 
          {/* <li><Link to="/login">Login</Link></li>
          <li><Link to="/signUp">Sign Up</Link></li> */}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contactPage">Contacts </Link></li>
          <li ><Link to="/contactInfo"> Add Contacts</Link></li>
          <li ><Link to="/testResult"> Test Result </Link></li>
          <li ><Link to="/dailySx"> Daily Symptoms </Link></li>
          <li ><Link to="/signOut">Sign Out</Link></li>
         </ul>
        </div>
      </nav>
    );
  
}

export default Navbar;
