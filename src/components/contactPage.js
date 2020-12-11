import React, {useState, useContext, useEffect} from "react";
import axios from 'axios';
import UserContext from "../context/UserContext";

export default function ContactPage() {
    const {userData} = useContext(UserContext);
    const[allContacts, addContact] = useState([{}]);

    const fetchItems = async () => {
      const response = await axios.get(
        "http://localhost:5000/contacts/all", 
        {headers: {"x-auth-token": userData.token}},
        );
        addContact(response.data);
        console.log("refreshed");
      }

    const deleteContact = async (i) => {
      console.log(i);
      await axios.delete(
        "http://localhost:5000/contacts/" + i, 
        {headers: {"x-auth-token": userData.token}},
      );
      fetchItems()
    }

    useEffect(() => {
        const fetchItems = async () => {
          const response = await axios.get(
            "http://localhost:5000/contacts/all", 
            {headers: {"x-auth-token": userData.token}},
            );
            addContact(response.data);
            console.log("refreshed");
          }
        fetchItems();  
    }, [userData.token])

    // deleteContact = async() => {
    //     const fetchItems = async () => {
    //       const response = await axios.delete(
    //         "http://localhost:5000/contacts/all", 
    //         {headers: {"x-auth-token": userData.token}},
    //         );
    //         addContact(response.data);
    //         console.log("refreshed");
    //       }
    //     fetchItems();  
    // }, [userData.token])

      return (
        <div>
          <h3>Logged Contacts</h3>
          <table className="table">
            <thead className="thead-light">
            <tr>
                <th id="rowhead">Contact Name</th>
                <th id="rowhead">Contact Email</th>
                <th id="rowhead">Contact Phone Number</th>
                <th id="rowhead">Exposure Date</th>
                <th id="rowhead">Actions</th>
                <th colspan="2" id="rowhead">Message</th>
              </tr>
            </thead>
            <tbody>
                {allContacts.map((contact, i) => {
                return(
                    <tr>
                    <td id="rowhead">{contact.contactname}</td>
                    <td id="rowhead">{contact.email}</td>
                    <td id="rowhead">{contact.phonenumber}</td>
                    <td id="rowhead">{contact.date}</td>
                    <td id="contact">
                    <button onClick={() => deleteContact(contact._id)} >Delete</button>
                    </td>
                    <td id="contact">
                    <button className="button muted-button">Email</button>
                    </td>
                    <td id="contact">
                    <button className="button muted-button">Text</button>
                    </td>
                    </tr>
                )})}
            </tbody>
        </table>
        </div>
    )
}

