import React, { useEffect,useState} from 'react'
import {useNavigate } from 'react-router-dom';

function LoginUserTest() {
    const navigate=useNavigate();
  useEffect(()=>{
    if(window.sessionStorage.getItem('username')!==null && window.sessionStorage.getItem('userpassword')!==null){
        navigate('/HomeCostumer')
      } else{
        navigate('/LoginUser')
      }
  })

       


}

export default LoginUserTest