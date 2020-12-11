/* import React, { Component} from "react";
import { Link } from 'react-router-dom'; */
import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import ErrorNotice from "./misc/ErrorNotice";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  
  const {setUserData} = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    try{
      e.preventDefault();
      const loginUser = {username, password};
      const loginRes = await axios.post("http://localhost:5000/users/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
  } catch(err){
    err.response.data.msg && setError(err.response.data.msg);
  }
  };
//}

  // export default class LoginForm extends Component{
  //   constructor(props) {
  //     super(props);


  //     this.onChangeUsername = this.onChangeUsername.bind(this);
  //     this.onChanePassword = this.onChangePassword.bind(this);
  //     this.onSubmit = this.onSubmit.bind(this);

  //     this.state = {
  //     username: '',
  //     password: '',
  //     }
  //   }

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

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const user = {
  //     username: this.state.username,
  //     password: this.state.password,
  //   }

  //   console.log(user);

    // axios.get('http://localhost:5000/users')
    //   .then(res => console.log(res.data));

    // window.location = '/home';
  //}
  return(
    <section>
      <div className="container">
        <div className="user signinBx" >
          <div className="formBx">
            <form onSubmit={submit} >
              <h2>Sign In</h2>
              {error && (
                  <ErrorNotice message={error} clearError={() => setError(undefined)} />
              )}
              <input type="text" 
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username" />

              <input type="password" 
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />

              <input type= "submit" value="Log In" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 
  //     render(){
  //       return(

  //       <section>
  //         <div className="container">
  //           <div className="user signinBx" >
  //             <div className="formBx">
  //               <form onSubmit={this.onSubmit} >
  //                 <h2>Sign In</h2>

  //                 <input type="text" 
  //                 value={this.state.duration}
  //                 onChange={this.myChangeUsername} name placeholder="Username" />

  //                 <input type="password" 
  //                 value={this.state.password}
  //                 onChange={this.myChangePassword} 
  //                 name placeholder="Password" />
  //                 <p>

  //                 < Link to={{pathname:'/home'}}><input type="submit" name defaultValue="Login"/></Link> 
  //                 </p>
  //                 <p className="signup">
  //                 Don't have an account ?
  //                   <Link to={{pathname:'/signUp'}}>Sign Up </Link>
  //                 </p>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       )
  //     } 
  // }