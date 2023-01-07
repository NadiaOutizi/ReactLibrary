import React,{useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./styleform.css"

function  RegisterUser() {
    const navigate = useNavigate();
    const [UserName,setUserName]=useState('')
    const [Password,setPassword]=useState('')
    const HandleSubmit=(e)=>{
         e.preventDefault();
         Axios.post("http://localhost:3000/api/custumers",{
            UserName,
            Password
            }).then(res=>{
              console.log(res.config.data)
              alert('added successfully!!')
              navigate("/HomeCostumer");
        
            }).catch(err=>console.error(err))
          setUserName('');
          setPassword('');
          
       
    }

    const [Values,setValues]=useState({
        UserName:'',
        Password:''
    })
  return (
    <div>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br/> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={HandleSubmit}>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"
                   onChange={(e)=>{setUserName(e.target.value)}}
                   value={UserName}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"
                     onChange={(e)=>{setPassword(e.target.value)}}
                     value={Password}/>
                  </div>
                  
                  <button type="submit" className="btn" id='registerbtn'
                  style={{border:'1px solid black'}}>Register</button>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}
export default RegisterUser;