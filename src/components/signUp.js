import React, { Component } from "react";
import { Link } from 'react-router-dom';




  export default class SignUp extends Component{
    constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    username: '',
    password: '',
    email:'',
    dob: '',
    address:'',
    phone:'',
    gender:'',
    }
  }

//   // coming from mongodb
// componentDidMount() {
//   axios.get('http://localhost:5000/users/')
//     .then(response => {
//       if (response.data.length > 0) {
//         this.setState({
//           users: response.data.map(user => user.username),
//           username: response.data[0].username
//         })
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     })

// }

onChangeUsername(e) {
  this.setState({
    username: e.target.value
  })
}

onChangePassword(e) {
  this.setState({
    password: e.target.value
  })
}

onChangeEmail(e) {
  this.setState({
    email: e.target.value
  })
}

onChangeDOB(e) {
  this.setState({
    dob: e.target.value
  })
}

onChangeAddress(e) {
  this.setState({
    address: e.target.value
  })
}

onChangePhone(e) {
  this.setState({
    phone: e.target.value
  })
}

onChangeGender(e) {
  this.setState({
    gender: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();

  const newUser = {
    username: this.state.username,
    password: this.state.password,
    email: this.state.email,
    dob:this.state.dob,
    address:this.state.address,
    phone:this.state.phone,
    gender:this.state.gender,
  }

  console.log(newUser);

  // axios.post('http://localhost:5000/exercises/add', exercise)
  //   .then(res => console.log(res.data));

  // window.location = '/';
}
    

    render(){
      return(


        <section>
          <div className="container" >
            <div className="user signinBx" >
              <div className="formBx" >
                <form >
                  <h2>Create an account</h2>
                  <input type="text" 
                  value={this.state.username}
                  onChange={this.myChangeUserName}
                  name placeholder="Username" />

                  <input type="email" 
                  value={this.state.email} 
                  onChange={this.myChangeEmail}
                  name placeholder="Email Address" />

                  <input type="password" 
                  value={this.state.password}
                  onChange={this.myChangePassword} 
                  name placeholder="Create Password" />

                  <input type="password" name placeholder="Confirm Password" />

                  <input type="gender"
                  value={this.state.gender}
                  onChange={this.myChangeGender}  
                  name placeholder="drop down gender" />

                  <input type="dob"
                  value={this.state.dob}
                  onChange={this.myChangeDOB}  
                  name placeholder="dob" />

                  <input type="address" 
                  value={this.state.address}
                  onChange={this.myChangeAddress}  
                  name placeholder="Address" />

                  <input type="phone" 
                  value={this.state.phone}
                  onChange={this.myChangePhone}  name placeholder="Phone number" />
                  
                  <p>
                  < Link to={{pathname:'/home'}}><input type="button" name defaultValue="Sign Up"/></Link> 
                  </p>

                  <p className="signin">
                  Already have an account ?
                  <Link to={{pathname:'/'}}>Login </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

      )
    }
  }
