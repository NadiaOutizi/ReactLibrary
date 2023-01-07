import React from 'react'
import { Link } from 'react-router-dom';


function FirstTest() {

  return (
    <div style={{ position:'relative',top:'300px'}} >
<button  type="button" className="btn btn-primary btn-lg " style={{padding:'10px 50px'}} 
><Link to='/LoginTest' style={{color:'#fff'}}>Admins</Link></button>
<button type="button" className="btn btn-outline-primary btn-lg" style={{paddingRight:'40px',marginLeft:'40px',border:'1px solid blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to='/LoginUserTest' style={{color:'blue'}}>Costumers</Link></button>
    </div>
  )
}

export default FirstTest