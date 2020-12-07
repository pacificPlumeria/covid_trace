import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import AuthOptions from '../components/AuthOptions';


function Navbar(props) {
    //if (props.location.pathname==="/signUp" || props.location.pathname==="/" || props.location.pathname==="/signOut") {
        //return false;
    //}
    // return (
    //   <nav id="navbar">
    //     <div>
    //      <ul> 
    //       {/* <li><Link to="/login">Login</Link></li>
    //       <li><Link to="/signUp">Sign Up</Link></li> */}
    //       <li><Link to="/home">Home</Link></li>
    //       <li><Link to="/contactPage">Contacts </Link></li>
    //       <li ><Link to="/contactInfo"> Add Contacts</Link></li>
    //       <li ><Link to="/testResult"> Test Result </Link></li>
    //       <li ><Link to="/dailySx"> Daily Symptoms </Link></li>
    //       <li ><Link to="/signOut">Sign Out</Link></li>
    //       <AuthOptions />
    //      </ul>
    //     </div>
    //   </nav>
    // );
    return (
        <header id="navbar">
            <Link to="/home"><h1 className= "title">Covid-Trace</h1></Link> 
            {/* <Link to="/contactPage">Contacts </Link>
            <Link to="/contactInfo"> Add Contacts</Link>
            <Link to="/testResult"> Test Result </Link>
            <Link to="/dailySx"> Daily Symptoms </Link> */}
            {/* <Link to="/signOut">Sign Out</Link> */}
            <AuthOptions />
        </header>
      );
  
}

export default withRouter(Navbar);
//export default Navbar;