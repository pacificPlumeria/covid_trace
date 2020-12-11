import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import {useHistory} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ErrorNotice from "./misc/ErrorNotice";

export default function DailySymptoms() {
    const [symptoms, setSymptoms] = useState([]);
    const [fever, setFever] = useState();
    const [date, setDate] = useState();

    const {userData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
    
        try{
          const newRecord = {symptoms, fever, date};
          await axios.post(
            "http://localhost:5000/symptoms/add", 
            newRecord,
            {headers: {"x-auth-token": userData.token}},
          );
          history.push("/home");
      } catch(err){
          console.log("no");
        }
    };

    return (
        <div >
            <h1>Daily Symptom Checker</h1>
            <form onSubmit={submit}>
            <div className="form-group"> 
            <select class="mdb-select md-form" onChange={(e) => setSymptoms(state => [...state, e.target.value])} multiple>
            <option value="" disabled selected> Please Select Any of the Following CDC Defined Symptoms of COVID-19 That You Have Experienced in the Last 24 Hours </option>
            <option value="coughing">Coughing</option>
            <option value="nausea">Nausea</option>
            <option value="dizziness">Dizziness</option>
            <option value="sorethroat">Sore Throat</option>
            </select>
            </div>
            <div className="form-group"> 
            <select class="browser-default custom-select" onChange={(e) => setFever(e.target.value)}>
            <option disabled selected>Have you had a temperature of 100.4 or higher in the past 24h?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
            </div>
            <div className="form-group">
                <label>Date: </label>
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
          <input type="submit" value="Submit Symptoms"/>
        </div>
        </form>
    </div>
    )
}

