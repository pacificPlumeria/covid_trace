
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Navbar  from "./components/navbar.component";
import Login from "./components/login";
import ContactInfo from "./components/contactInfo.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignUp from './components/signUp';
import HomePage from './components/home.js'
import SignOut from './components/signOut';
import contactPage from './components/contactPage';
import TestResults from './components/testResult';
import DailySymptoms from './components/dailySx';






 function App() {
  return(
    <Router>
      <div className="container">
        <Route path="/signUp"  component={SignUp} /> 
        <Route path="/"  exact component={Login} /> 
        <Navbar />
          <Switch>

            <Route path="/home" component={HomePage} /> 
            <Route path="/contactPage" component={contactPage} /> 
            <Route path="/contactInfo" component={ContactInfo} /> 
            <Route path="/testResult" component={TestResults} /> 
            <Route path="/dailySx" component={DailySymptoms} /> 
            <Route path="/signOut"  component={SignOut} /> 
         </Switch>
      </div>
    </Router>
  );
}

export default App;
