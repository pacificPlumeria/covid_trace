import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import ErrorNotice from "./misc/ErrorNotice";

export default function Register(){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const {setUserData} = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try{
      const newUser = {username, password, passwordCheck};
      await axios.post(
        "http://localhost:5000/users/add", 
        newUser
      );
      const loginRes = await axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });
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
  //   constructor(props) {
  //     super(props);


  //     this.onChangeUsername = this.onChangeUsername.bind(this);
  //     this.onChangePassword = this.onChangePassword.bind(this);
  //     this.onSubmit = this.onSubmit.bind(this);

  //     this.state = {
  //     username: '',
  //     password: ''
  //     }
  //   }

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
  //     password: this.state.password
  //   }

  //   console.log(user);

  //   axios.post('http://localhost:5000/users/add', user)
  //     .then(res => console.log(res.data));

  //   window.location = '/';
  // }

  // render() {
    return(
      <section>
        <div className="container">
          <div className="user signinBx" >
            <div className="formBx">
              <form onSubmit={submit} >
                <h2>Register</h2>
                {error && (
                  <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <label>Username</label>
                <input 
                type = "text" 
                required 
                onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>   
                <input 
                id="register-password" 
                type = "password" 
                required
                onChange={(e) => setPassword(e.target.value)}
                />

                <input type = "password" 
                placeholder="Verify password" 
                required
                onChange={(e) => setPasswordCheck(e.target.value)}
                />
  
                <input type= "submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  } 

//   return (
//       <div className="page">
//         <h2>Register</h2>
//         <form onSubmit={submit}>
//             <label htmlFor="register-username">Username</label>
//             <input 
//               id="register-username" 
//               type = "text" 
//               required 
//               onChange={(e) => setUsername(e.target.value)}
//             />

//             <label htmlFor="register-password">Password</label>
//             <input 
//               id="register-password" 
//               type = "password" 
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <input type = "password" 
//               placeholder="Verify password" 
//               required
//               onChange={(e) => setPasswordCheck(e.target.value)}
//             />

//             <input type= "submit" value="Register" />
//         </form>
//       </div>
//   );
// }