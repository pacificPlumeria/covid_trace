import React, { Component } from "react";
import { Link } from 'react-router-dom';




export default class SignUp extends Component{
    constructor(props) {
        super(props);
      }
    render(){
      return(
       
          
          <section>
        
          <div className="container">
        
        <div className="user signinBx">
        <div className="formBx">
          <form >
            <h2>Create an account</h2>
            <input type="text" name placeholder="Username" />
            <input type="email" name placeholder="Email Address" />
            <input type="password" name placeholder="Create Password" />
            <input type="password" name placeholder="Confirm Password" />
            <p>
         < Link to={{pathname:'/home'}}><input type="submit" name defaultValue="Sign Up"/></Link> 
         </p>
            <p className="signin">
              Already have an account ?
              <Link to={{pathname:'/login'}}>Login </Link>
            </p>
          </form>
        </div>
        </div>
        </div>
        </section>
        
      )
    }
  }
