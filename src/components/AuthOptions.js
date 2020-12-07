// in order to access user
import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Link } from 'react-router-dom';

export default function AuthOptions() {
    const {userData, setUserData} = useContext(UserContext);

    const history = useHistory();

    const register = () => history.push("/signUp");
    const login = () => history.push("/");
    //added
    //const contactPage = () => history.push("/contactPage");
    //const contactInfo = () => history.push("/contactInfo");

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
        history.push("/");
    };

    return (
        <nav className="auth-options">
        {userData.user ? (
            <>
            <Link to="/contactPage">Contacts </Link>
            <Link to="/contactInfo"> Add Contacts</Link>
            <Link to="/testResult"> Test Result </Link>
            <Link to="/dailySx"> Daily Symptoms </Link>
            <button onClick={logout}>Log Out</button>
            {/* <button onClick={contactPage}>Contacts </button>
            <button onClick={contactInfo}> Add Contacts</button>
            <button onClick={logout}> Test Result </button>
            <button onClick={logout}> Daily Symptoms </button> */}
            </>
        ) : (
            <>
            <button onClick={register}>Sign Up</button>
            <button onClick={login}>Sign In</button>
            </>
        )}
        </nav>
    )
}
