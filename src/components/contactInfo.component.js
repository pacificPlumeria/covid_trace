import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import {useHistory} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ErrorNotice from "./misc/ErrorNotice";

export default function ContactInfo() {
    const [contactname, setContactname] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [date, setDate] = useState();

    const {userData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
    
        try{
          const newContact = {contactname, email, phonenumber, date};
          //var token = JSON.parse(localStorage.getItem("auth-token"));
          await axios.post(
            "http://localhost:5000/contacts/add", 
            newContact,
            {headers: {"x-auth-token": userData.token}},
          );
          history.push("/home");
      } catch(err){
          console.log("no");
        }
    };

    return (
        <div >
            <h1>Register a Contact</h1>
            <form onSubmit={submit}>
            <div className="form-group"> 
                <label>Contact's Name: </label>
                <input type="text"
                    required
                    className="form-control"
                    //value={this.state.contactname}
                    onChange={(e) => setContactname(e.target.value)}
              />
            </div>
            <div className="form-group">
                <label>Contact's Email: </label>
                <input 
                    type="email" 
                    className="form-control"
                    //value={this.state.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Contact's Phone Number: </label>
                <input 
                    type="tel" 
                    className="form-control"
                    //value={this.state.phonenumber}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    onChange={(e) => setPhonenumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Date of Exposure: </label>
                {/* <div> */}
                    {/* <DatePicker  */}
                    <input 
                    // type="text" 
                    type="date"
                    className="form-control"
                    //selected={this.state.date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                    {/* </DatePicker> */}
            {/* </div> */}
        </div>

        <div className="form-group">
          {/* <input type="submit" value="Submit Contact" className="btn btn-primary" /> */}
          <input type="submit" value="Submit Contact"/>
        </div>
        </form>
    </div>
    )
}


// import React, { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// export default class ContactInfo extends Component {
//     constructor(props) {
//         super(props);
        
//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onChangeContactname = this.onChangeContactname.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
//         this.onChangeDate = this.onChangeDate.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);


//         this.state = {
//             username: '',
//             contactname: '',
//             email: '',
//             phonenumber: 0,
//             date: new Date(),
//             users: []
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//     }
    
//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         })
//     }

//     onChangeContactname(e) {
//         this.setState({
//             contactname: e.target.value
//         })
//     }
    
//     onChangeEmail(e) {
//         this.setState({
//           email: e.target.value
//         })
//     }
    
//     onChangePhonenumber(e) {
//         this.setState({
//           phonenumber: e.target.value
//         })
//     }

//     onChangeDate(date) {
//         this.setState({
//           date: date
//         })
//     }
    
//     onSubmit(e) {
//         e.preventDefault();

//         const contact = {
//             username: this.state.username,
//             contactname: this.state.contactname,
//             email: this.state.email,
//             phonenumber: this.state.phonenumber,
//             date: this.state.date
//         }

//         console.log(contact)

//         axios.post('http://localhost:5000/contacts/add', contact)
//             .then(res => console.log(res.data));

//         window.location = '/contactPage';
//     }

//     render() {
//         return (
//         <div >
//             <h1>Register</h1>
//             <form onSubmit={this.onSubmit}>
//             <div className="form-group"> 
//                 <label>Username: </label>
//                 <select ref="userInput"
//                     required
//                     className="form-control"
//                     value={this.state.username}
//                     onChange={this.onChangeUsername}>
//                     {
//                         this.state.users.map(function(user) {
//                             return <option 
//                                 key={user}
//                                 value={user}>{user}
//                                 </option>;
//                         })
//                     }
//                 </select>
//             </div> 
//             <div className="form-group"> 
//                 <label>Contact's Name: </label>
//                 <input type="text"
//                     required
//                     className="form-control"
//                     value={this.state.contactname}
//                     onChange={this.onChangeContactname}
//               />
//             </div>
//             <div className="form-group">
//                 <label>Contact's Email: </label>
//                 <input 
//                     type="text" 
//                     className="form-control"
//                     value={this.state.email}
//                     onChange={this.onChangeEmail}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Contact's Phone Number: </label>
//                 <input 
//                     type="text" 
//                     className="form-control"
//                     value={this.state.phonenumber}
//                     onChange={this.onChangePhonenumber}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Date: </label>
//                 <div>
//                     <DatePicker
//                     selected={this.state.date}
//                     onChange={this.onChangeDate}
//                 />
//             </div>
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Submit Contact" className="btn btn-primary" />
//         </div>
//         </form>
//     </div>
//     )
// }
// }