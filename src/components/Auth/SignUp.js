import React,{useState,useEffect,useRef} from 'react';
import Axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
const navigate = useNavigate();
const [UserName,setUserName]=useState('')
const [Password,setPassword]=useState('')
const userRef=useRef()
useEffect(()=>{
  userRef.current.focus()
},[]);
  const HandleSubmit=(e)=>{
      e.preventDefault()
  
    Axios.post("http://localhost:3000/api/admins",{
    UserName,
    Password
    }).then(res=>{
      console.log(res.config.data)
      alert('added successfully!!')
      navigate("/dashboard");

    }).catch(err=>console.error(err))
  setUserName('');
  setPassword('');
  
    
 

       
}


 

  return (
    <div className='cover'>
      <form onSubmit={HandleSubmit}>
        <h1>SignUp</h1>
        <label htmlFor='UserName'>UserName</label><input type='test' className='input' 
        value={UserName}
        autoComplete="off" 
        required
       ref={userRef} 
       placeholder="Enter UserName...." 
       onChange={(e)=>{setUserName(e.target.value)}}/>
        <label htmlFor='Password'>Password</label><input type='password' className='input'
        value={Password}
        autoComplete="off" 
        required
        placeholder="Enter password..." 
        onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <input type='submit' value='SignUp' className='Ajouter' />
      </form>
      
      
    </div>
  )
}

export default SignUp