import React, { Component } from 'react';






export default class ContactInfo extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
        // <form onSumbit={this.onSumbit}>
        // <div className="contactInfo">
        //     <h1>Register</h1>
        //     <p>Please fill in contacts that you come into coneact with</p>
        //     <hr />
        //     <label htmlFor="email"><b>Persons name</b></label>
        //     <input type="text" placeholder="persons name" name="email" id="email" required />

        //     <label htmlFor="email"><b>Email</b></label>
        //     <input type="text" placeholder="Enter Email" name="email" id="email" required />

        //     <label htmlFor="psw"><b>phone number</b></label>
        //     <input type="password" placeholder="Enter phone number" name="psw" id="psw" required />

        //     <label htmlFor="psw-repeat"><b>day</b></label>
        //     <input type="password" placeholder="day of contact" name="psw-repeat" id="psw-repeat" required />
        //     <hr />
            
        //     <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
        //     <button type="submit" className="registerbtn">Register</button>
        // </div>
        // <div className="container signin">
        //     <p>Already have an account? <a href="#">Sign in</a>.</p>
        // </div>
        // </form>
        <form id="contact" onSumbit={this.onSumbit}>
        <div >
            <h1>Register</h1>
            <p>Please fill in contacts that you come into coneact with</p>
            <hr />
            <label ><b>Persons name</b></label>
            <input type="text" placeholder="persons name" name="email" required />

            <label ><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email"  required />

            <label ><b>phone number</b></label>
            <input type="phoneNumber" placeholder="Enter phone number"  required />

            <label ><b>day</b></label>
            <input type="day" placeholder="day of contact"  required />
            <hr />
            
            <p>By creating a contact you agree that info is true, an alert will be sent</p>
            <button type="submit" >Sumbit Contact</button>
        </div>
  
        </form>
        )
    }
}
