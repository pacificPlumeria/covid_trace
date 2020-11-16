import React, { Component} from "react";
import { Link } from 'react-router-dom';





export default class LoginForm extends Component{
    constructor(props) {
        super(props);
      }
    // toggleForm = () => {
    //     const container = document.querySelector('.container');
    //     container.classList.toggle('active');
    //   };
 

   
    render(){
      return(
    
    <section>
  
    <div className="container">
  <div className="user signinBx">
   
    <div className="formBx">
      <form >
        <h2>Sign In</h2>
        <input type="text" name placeholder="Username" />
        <input type="password" name placeholder="Password" />
        <p>
         < Link to={{pathname:'/home'}}><input type="submit" name defaultValue="Login"/></Link> 
         </p>
        <p className="signup">
          Don't have an account ?
           <Link to={{pathname:'/signUp'}}>Sign Up </Link>
        </p>
      </form>
    </div>
  </div>
  </div>
  </section>






)
}
}
