import React,{useState} from 'react';
import ListStagiaire from './ListUsers';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';


 


function DispalyUsers() {
    const [Flag,setFlag]=useState(false);
    
  return (
    <div>  
      <Header/>
      <Navbar/> 
     
        <button onClick={()=>setFlag(true)} className='All'>Display Users</button>
        <button onClick={()=>setFlag(false)} id='HideAll'>Hide Users</button>
        {Flag && <ListStagiaire/>}
        {!Flag && ''}
       <button  className='Search'><Link to='/Filter'className='chercher'>Seach</Link></button>
    
    </div>

  )
}

export default DispalyUsers