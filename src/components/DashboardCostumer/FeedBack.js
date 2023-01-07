import React,{useState} from 'react'
import Side from './Side';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

function FeedBack() {
    const[Smile,setSmile]=useState('');
    const[Sad,setSad]=useState('');
    const HandleReactionone=()=>{
          setSmile('Good Experience');
          axios.post("http://localhost:3000/api/feedback",{
            UserName:window.sessionStorage.getItem('username'),
            Password:window.sessionStorage.getItem('userpassword'),
            Reaction:Smile
          }).catch((err)=>alert(err))
    }
    const HandleReactionTwo=()=>{
          setSad('Bad Experience');
          axios.post("http://localhost:3000/api/feedback",{
            UserName:window.sessionStorage.getItem('username'),
            Password:window.sessionStorage.getItem('userpassword'),
            Reaction:Sad
          }).catch((err)=>alert(err))
    }
  return (
    
    <div style={{overflowX:' hidden'}}>
        <Side/>
       <h3 style={{position:'relative',left:'70px',top:'50px',color:'#555'}}>Please Tell us Home was your Experience Here with a reaction....</h3><br/><br/><br/><br/><br/><br/><br/><br/>
       <span style={{fontSize:'100px',cursor:'pointer'}} onClick={HandleReactionone}>&#128516;</span>Good                                                                                                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
       <span style={{fontSize:'100px',cursor:'pointer'}} onClick={HandleReactionTwo}>&#128577;</span>Bad<br/><br/><br/><br/><br/>
       <button className='comment' style={{border:'none',borderRadius:'4px'}}><Link to='/Contact' style={{textDecoration:'none',color:'black'}}>Tell Us More</Link></button>
      
    </div>
  )
}

export default FeedBack