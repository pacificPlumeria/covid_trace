import React, { Component} from "react";
import { Link } from 'react-router-dom';





  export default class LoginForm extends Component{
    constructor(props) {
      super(props);


      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChanePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
      username: '',
      password: '',
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

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(user);

    // axios.post('http://localhost:5000/exercises/add', exercise)
    //   .then(res => console.log(res.data));

    // window.location = '/';
  }

      render(){
        return(

        <section>
          <div className="container">
            <div className="user signinBx" >
              <div className="formBx">
                <form onSubmit={this.onSubmit} >
                  <h2>Sign In</h2>

                  <input type="text" 
                  value={this.state.duration}
                  onChange={this.myChangeUsername} name placeholder="Username" />

                  <input type="password" 
                  value={this.state.password}
                  onChange={this.myChangePassword} 
                  name placeholder="Password" />
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
