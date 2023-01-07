import React, { useState } from 'react';
import Side from './Side';
import axios from 'axios';

function BorrowBook() {
  const[UserName,setUserName]=useState('');
  const[MiddleName,setMiddleName]=useState('');
  const[LastName,setLastName]=useState('');
  const[BookName,setBookName]=useState('');
  const [Error,setError]=useState(false);
  const NomBook=/[a-zA-Z]/;
const HandleSent=(e)=>{
        e.preventDefault();
    if(NomBook.test(BookName)!==true){
      setError(false)
      
  
    }else{
      setError(true)
    }
       
      
    
    
     if(Error===true){
      axios.post("http://localhost:3000/api/borrowedbook",{
        UserName,
        MiddleName,
        LastName,
        BookName

      });
   window.location.reload();

    }
  }
  return (
    
    <div>
        <Side/>
       
        <form style={{position:'relative',top:'60px'}}>
          
          <label>Your Name : </label>
            <input type='text'   placeholder='Enter your first name..'
            onChange={(e)=>{setUserName(e.target.value)}}/><br/><br/><br/>
          <label>Middle Name : </label>
            <input type='text' placeholder='Enter your Middle name..'
             onChange={(e)=>{setMiddleName(e.target.value)}}/><br/><br/><br/>
          <label>Last Name : </label>
            <input type='text'placeholder='Enter your Last name..'
             onChange={(e)=>{setLastName(e.target.value)}}/><br/><br/><br/>
          <label>Book Name : </label>
            <input type='text'placeholder='Enter Book name..'
            onChange={(e)=>{setBookName(e.target.value)}}/><br/><br/><br/><br/>
            <input type="submit" value="send" onClick={HandleSent}
            style={{borderRadius:'20px'}}/>
          
       
        </form>
        
        </div>
  )
}

export default BorrowBook