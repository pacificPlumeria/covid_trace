import React, { Component } from "react";
import { Link } from 'react-router-dom';






  export default class SignOut extends Component{
    constructor(props) {
    super(props);
    }
    render(){
      return(
        <div>
        
        <h6>need to get rid of navbar...</h6>

        <p>
        Thanks for your time!
        
        <br>
        </br>

        <br>
        </br>

        <br>
        </br>

        want to log back in? <br></br>
        <Link to={{pathname:'/'}}>Login</Link>
        </p>

    </div>
      )
    }
  }