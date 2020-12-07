import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditContact extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeContactname = this.onChangeContactname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            contactname: '',
            email: '',
            phonenumber: 0,
            date: new Date(),
            users: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/contacts/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              username: response.data.username,
              contactname: response.data.contactname,
              email: response.data.email,
              phonenumber: response.data.phonenumber,
              date: new Date(response.data.date)
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    
        axios.get('http://localhost:5000/users/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
    }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeContactname(e) {
        this.setState({
            contactname: e.target.value
        })
    }
    
    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
    }
    
    onChangePhonenumber(e) {
        this.setState({
          phonenumber: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
          date: date
        })
    }
    
    onSubmit(e) {
        e.preventDefault();

        const contact = {
            username: this.state.username,
            contactname: this.state.contactname,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            date: this.state.date
        }

        console.log(contact)

        axios.post('http://localhost:5000/contacts/update/'+this.props.match.params.id, contact)
            .then(res => console.log(res.data));

        window.location = '/contactPage';
    }

    render() {
        return (
        <div >
            <h1>Edit Contact Info</h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                        })
                    }
                </select>
            </div> 
            <div className="form-group"> 
                <label>Contact's Name: </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.contactname}
                    onChange={this.onChangeContactname}
              />
            </div>
            <div className="form-group">
                <label>Contact's Email: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
            </div>
            <div className="form-group">
                <label>Contact's Phone Number: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.phonenumber}
                    onChange={this.onChangePhonenumber}
                />
            </div>
            <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                />
            </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Contact Log" className="btn btn-primary" />
        </div>
        </form>
    </div>
    )
}
}