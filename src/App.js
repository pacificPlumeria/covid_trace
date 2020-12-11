import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Navbar  from "./components/navbar.component";
import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/login.css';
import axios from 'axios';
import ContactInfo from "./components/contactInfo.component.js";
import SignUp from './components/signUp';
import HomePage from './components/home.js';
import SignOut from './components/signOut';
import ContactPage from './components/contactPage';
import TestResults from './components/testResult';
import DailySymptoms from './components/dailySx';
import EditContact from './components/editContact';
// importing user context to set state for whole app
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState({
    token: undefined, //stores token
    user: undefined,  // stores id and username for user
  });
  
  useEffect(() => {
    const checkLoggedIn = async() => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post("http://localhost:5000/users/tokenIsValid", null, {headers: {"x-auth-token": token}});
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: {"x-auth-token": token},
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return(
    <Router>
      {/* Everything inside has access to the user data.  Gives state to all of the components. */}
      <UserContext.Provider value={{userData, setUserData}}>
      <div className="container">
        <Navbar />
            <Switch>
              <Route path="/signUp" component={SignUp} /> 
              <Route path="/" exact component={Login} /> 
              <Route path="/home" component={HomePage} /> 
              <Route path="/contactPage" component={ContactPage} /> 
              <Route path="/contactInfo" component={ContactInfo} /> 
              <Route path="/editContact/:id" component={EditContact} /> 
              <Route path="/testResult" component={TestResults} /> 
              <Route path="/dailySx" component={DailySymptoms} /> 
              <Route path="/signOut" component={SignOut} /> 
          </Switch>
      </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
