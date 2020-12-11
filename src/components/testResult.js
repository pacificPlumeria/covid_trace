// import React, {useState, useContext} from "react";
// import UserContext from "../context/UserContext";
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import {useHistory} from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css";
// import ErrorNotice from "./misc/ErrorNotice";
// import FileUpload from "./utils/FileUpload";

// function TestResult(props) {

//     const [Images, setImages] = useState([])

//     const updateImages = (newImages) => {
//       setImages(newImages)
//     }

//     const onSubmit = async (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div>
//             <h1>Test Result</h1>
//             <form onSubmit >
//             <label>Please Upload Your Test Results: </label>
//             <br />
//             <br />
//             <FileUpload refreshFunction={updateImages}/>
//         <br />
//         <br />
//         <button
//           onClick={onSubmit}
//           >
//           Submit
//         </button>

//         </form>
//         </div>
//     )
// }

// export default TestResult

import React, {useState, useContext, useEffect} from "react";
import UserContext from "../context/UserContext";
import axios from 'axios';
const url = 'https://api.cloudinary.com/v1_1/drqctijmr/image/upload';
const preset = 'rtgyg1zd';

export default function TestResults() {

    const [image, setImage] = useState('');
    const {userData} = useContext(UserContext);

    // const submit = async (e) => {
    //     e.preventDefault();
    
    //     try{
    //       //const newImage = {image};
    //       await axios.post(
    //         "http://localhost:5000/images/add", 
    //         //newImage,
    //         {headers: {"x-auth-token": userData.token}},
    //       );
    //       history.push("/home");
    //   } catch(err){
    //       console.log("no");
    //     }
    // };


    const onChange = e => {
      setImage(e.target.files[0]);
    };

    const fetchImage = async () => {
      const image = await axios.get(
        "http://localhost:5000/images/getLatest", 
        {headers: {"x-auth-token": userData.token}},
        );
        setImage(image.data);
    }

    useEffect(() => {
      const fetchImage = async () => {
        const image = await axios.get(
          "http://localhost:5000/images/getLatest", 
          {headers: {"x-auth-token": userData.token}},
          );
          setImage(image.data);
        }
        fetchImage();  
    }, [userData.token])

    const submit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', preset);
      try {
        const res = await axios.post(url, formData);
        const imageUrl = res.data.secure_url;
        const image = await axios.post("http://localhost:5000/images/upload",
          {imageUrl},
          {headers: {"x-auth-token": userData.token}},
        );
        setImage(image.data);
        //history.push("/home");
        fetchImage();
        console.log(image.data);
      } catch (err) {
        console.error(err);
      }
    };

    // useEffect(() => {
    //   const fetchImage = async () => {
    //     const image = await axios.get(
    //       "http://localhost:5000/images/getLatest", 
    //       {headers: {"x-auth-token": userData.token}},
    //       );
    //       setImage(image.data);
    //     }
    //     fetchImage();  
    // }, [userData.token])

    return (
    //     <div >
    //         <h1>Upload Your Test Result</h1>
    //         <form enctype="multipart/form-data">
    //         <div className="form-group"> 
    //         <input type="file" name="image" onChange={onChange}>
    //         </input>
    //         </div>

    //     <div className="form-group">
    //       {/* <input type="submit" value="Submit Contact" className="btn btn-primary" /> */}
    //       <button onClick={onSubmit} className='btn center'>
    //       upload
    //     </button>
    //     </div>
    //     </form>
    // </div>
    <div className='container'>
      <h1 className='center red-text'>Test Result Image Upload</h1>
      {/* <div className='file-field input-field'> */}
        {/* <div className='btn'> */}
        <form onSubmit={submit} >
          <input type='file' name='image' onChange={onChange} />
      <div className="form-group">
          {/* <input type="submit" value="Submit Contact" className="btn btn-primary" /> */}
          <input type="submit" value="Submit Test Image"/>
        </div>
      </form>
      {/* </div> */}
      <img src={image} alt="Test Result"/>
      {/* </div> */}
      </div>
    )
}
