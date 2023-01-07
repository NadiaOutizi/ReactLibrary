import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';
import "./styleform.css"

function LoginUser() {

    const navigate = useNavigate();
    const [Data,setData]=useState([]);
    const [Values,setValues]=useState({
      UserName:'',
      Password:''
  })
   
    
    const KeepMeLogged=()=>{
      const username=window.sessionStorage.setItem('username',Values.UserName);
      const userpassword=window.sessionStorage.setItem('userpassword',Values.Password);
      
    }
   
   useEffect(()=>{
      const getData=async()=>{
          const users=await Axios.get(
              "http://localhost:3000/api/custumers"
          );
    
          setData(users.data)

      } 
      getData();
  },[]);
//   window.onload=function(){
//    if(window.sessionStorage.getItem('username')!=null && window.sessionStorage.getItem('userpassword')!=null){
//       navigate('/HomeCostumer')
//    }
//   }
    const HandleSubmit=(e)=>{
         e.preventDefault();
         const account = Data.find((user) => user.UserName === Values.UserName);
         if (account && account.Password === Values.Password ) {
              navigate('/HomeCostumer')
         }else{
            alert('access denied');
            setValues({UserName:'',Password:''});
            window.sessionStorage.clear()
         }
    }

   
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
                     value={Values.UserName}
                   onChange={(e)=>{setValues({...Values,UserName:e.target.value})}}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"
                     value={Values.Password}
                     onChange={(e)=>{setValues({...Values,Password:e.target.value})}}/>
                  </div>
                  <div className='keep_me' style={{display:'inline-flex'}}>
                  <h4>Keep Me Logged In</h4>&nbsp;&nbsp;
                  <input type='checkbox' onClick={KeepMeLogged}/>
                  </div><br></br>
                  <Link to={`/forgotPassword/${Values.UserName}`} style={{color:'blue'}}>forgot Your Password?</Link><br/><br></br>
                  <button type="submit" className="btn btn-black">Login</button>
                  <button type="submit" className="btn btn-secondary">
                  <Link to="/RegisterUser" style={{color:'#fff',textDecoration:'none'}}>Register</Link></button>

               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default LoginUser