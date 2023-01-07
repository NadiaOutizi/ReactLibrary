import React,{useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginTest() {
  const navigate=useNavigate()
  useEffect(()=>{
    let User= Cookies.get('User');    
    let Pass= Cookies.get('userPass');
    console.log(User);
    console.log(Pass)
    if(User && Pass !== null){
      navigate("/dashboard");
    }else {
      navigate('/LoginForm')
    }

  // if(window.sessionStorage.getItem('username')!=null){
  //   navigate('/HomeCostumer')
  // } 
    
  },[]);
}

export default LoginTest