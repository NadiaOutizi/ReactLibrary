import React,{useState} from 'react'
import Side from './Side';
import axios from 'axios';

function Contact() {
  const [message, setMessage] =useState('');
  const handleMessageChange = event => {
      setMessage(event.target.value);
    
  };
  const HandleComments=()=>{
    axios.post("http://localhost:3000/api/comments",{
      UserName:window.sessionStorage.getItem('username'),
      Password:window.sessionStorage.getItem('userpassword'),
      Comment:message
    }
   
    ).catch((err)=>alert(err));
    setMessage('')
  }
    
  
  return (
    <div style={{overflowX:' hidden'}}>
      <Side/>
       <h1 style={{position:'relative',left:'70px',top:'50px',fontFamily:'cursive'}}>Please let us Know your Experience with a Comment 👀 </h1> 
<br/><br/><br/><br/><br/><br/>
       <textarea cols="40" rows="20"  style={{height: '40vh',width: '50vw'}}
       placeholder="your point of view Matters..."
       name="message"
       value={message}
       onChange={handleMessageChange}
       > </textarea><br/><br/>
            <input type="submit" value="send" onClick={HandleComments}/>
    </div>
  )
}

export default Contact