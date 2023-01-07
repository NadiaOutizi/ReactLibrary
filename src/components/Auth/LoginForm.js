import Axios from 'axios';
import { gapi } from 'gapi-script';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginForm.css";
import Login from "./Logingoogle";
import Cookies from 'js-cookie';
const clientId ="181246396492-k4n6pqpta1s04usnr0pvtnqr250jdga0.apps.googleusercontent.com";
function LoginForm() {
//  google auth
// begin
useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  };
  gapi.load('client:auth2',start)
});
// end
  const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 1000)
    }
  const navigate = useNavigate();
    const [Values,setValues]=useState({
        UserName:'',
        Password:''
    })
    const [Data,setData]=useState([])
    // const [ErrMssg,setErrMssg]=useState('')
    const userRef=useRef()
    // const errRef=useRef()
    useEffect(()=>{
        userRef.current.focus()
    },[]);
    // useEffect(()=>{
    //     setErrMssg('')
    // },[Values.UserName,Values.Password])
    useEffect(()=>{
      const getData=async()=>{
          const users=await Axios.get(
              "http://localhost:3000/api/admins"
          );
    
          setData(users.data)

      } 
      getData();
  },[]);
  useEffect(()=>{
    let User= Cookies.get('User');
    let Pass= Cookies.get('userPass');
   
    // document.getElementById('inp1').value=User;
    // document.getElementById('inp2').value=Pass;
  })
  const HandleSubmit=(e)=>{
    e.preventDefault();
   
  const account = Data.find((user) => user.UserName === Values.UserName);
 
  if (account && account.Password === Values.Password ) {
    // 
   navigate("/dashboard");
    

   
  }
  else{
    
    popup()
  }
   
  }
  const RememberMe=()=>{
   
    document.cookie='User ='+Values.UserName+";path=http://localhost:3001"
    document.cookie='userPass ='+Values.Password+";path=http://localhost:3001"
    
    
  }


    window.onload=function(){
      console.log(document.cookie)
    
   
   

    }
  
  
  return (
    <div className='cover'>
        {/* <p ref={errRef} className={ErrMssg?"errMssg":"offscreen"} aria-live="assertive">{ErrMssg}</p> */}
<form onSubmit={HandleSubmit}> 
        <h1>Login</h1>
        <label htmlFor='UserName'>UserName</label>    
        <input type="text" placeholder="UserName...." value={Values.UserName}
            onChange={(e)=>{setValues({...Values,UserName:e.target.value})}} 
            className='input'
            id='inp1'
            ref={userRef}
            autoComplete="off" 
            required/>
            <label htmlFor='Password'>Password</label>  
            <input type="password" placeholder="password..." value={Values.Password}
            id='inp2'
            className='input'
            onChange={(e)=>{setValues({...Values,Password:e.target.value})}} autoComplete="off" 
            required/><br/>
             <label>Remember Me</label><input type='checkbox'name='RememberMe' id='check' onClick={RememberMe}/><br/><br/>
            <input type='submit' value='LogIn'/><br/><br/>
           
            <Login/>
            <p>
                Need an Account?<br/>
                <span>
               
               <Link to="/SignUp">Sign Up</Link>
               
                </span>
            </p>
            <div className={popupStyle} id='popup'>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
</form>
   
    </div>
  )
}


export default LoginForm;
