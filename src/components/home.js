// import React, { Component} from "react";
// import { Link } from 'react-router-dom';
import React, {useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom";

/* export default class HomePage extends Component{
    constructor(props) {
        super(props);
      }

    render(){
      return(
        
        <div>
          <h1>Covid-Trace</h1>
          <Link to={{pathname:'/testResult'}}><input type="button" name defaultValue="Test Results"/></Link> 
          
        <br></br><br></br>
          
          <Link to={{pathname:'/contactInfo'}}><input type="button" name defaultValue="add contacts"/></Link> 
          
          <br></br><br></br>

    
          <Link to={{pathname:'/contactPage'}}><input type="button" name defaultValue="view contacts"/></Link> 
      
          <br></br><br></br>

          <Link to={{pathname:'/dailySx'}}><input type="button" name defaultValue="Daily Symptom checker"/></Link> 
      
          <br></br><br></br>

        <input type="text" placeholder="hello :)"/>  
        </div>
      )
    }
} */

export default function HomePage() {
  const {userData} = useContext(UserContext); 
  const history = useHistory();

  useEffect(() => {
    if(!userData.user) history.push("/");
  });

  return ( 
    <div className="page">Home</div>



  )
}
