import React,{useState} from 'react';
import './forgotpass.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword(){
	const [Password,setPassword]=useState('')
	const {UserName} = useParams();
	const [Path,setPath]=useState()
	const ResetPassword=()=>{
		axios.get(`http://localhost:3000/api/custumers/${UserName}`).then((res)=>{
			// console.log(res.data[0])
			setPath(res.data[0]);
			console.log(Path)
		 })
		axios.patch(`http://localhost:3000/api/custumers/${UserName}`,{
		  UserName:Path.UserName,
          Password:Password
		}).then(res=>{
			console.log(res.config.data)
			alert('User Updated successfully!!')
		}).catch((err)=>{
			console.error(err)
			alert('bad request')
		})
			
		
			
	}
  return (
    <div>
       <div className="r">
		<h1>Forgot Password</h1>
		<h6 className="information-text">Enter your registered password to reset it.</h6>
		<div className="form-grp">
			<input type="email" name="user_email" id="user_email" 
			placeholder='Enter new password'
			onChange={(e)=>{setPassword(e.target.value)}}/>
			<p><label for="username">Password</label></p>
			<button onClick={ResetPassword}>Reset Password</button>
		</div>
		<div className="footer">
			<h5>New here? <a href="/RegisterUser">Sign Up.</a></h5>
			<h5>&hearts;Already have an account? <a href="/LoginUser">Sign In.</a></h5>
			  
		</div>
	</div>
    
  </div>
  )
}

export default ForgotPassword