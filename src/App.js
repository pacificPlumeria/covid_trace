
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Navbar  from "./components/navbar.component";
import Login from "./components/login";
import ContactInfo from "./components/contactInfo.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignUp from './components/signUp';
import HomePage from './components/home.js'






 function App() {
  return(
    <Router>
     <div className="container">

      <Navbar />
      <Switch>
      <Route path="/sign*"  component={SignUp} /> 
     <Route path="/log*"  component={Login} /> 
      <Route path="/home" component={HomePage} /> 
        <Route path="/cont*" component={ContactInfo} /> 
      </Switch>
      </div>
    </Router>
  );
}

export default App;
