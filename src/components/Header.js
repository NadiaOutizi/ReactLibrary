import React from 'react'
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useNavigate} from 'react-router-dom';





const  StyledHeader = styled.header`
// height:100px;
background-color:#000;
z-index: 3;
padding:4px ;



  
& #bar{
    float:right;
    position:relative;
    right:100px;
    top:30px;
    color:#ffff;
    

}
& #bar:active{
     color:  blueviolet;

 

}
& #fab{
    float:left;
    position:relative;
    left:50px;
    bottom:9px;
    color:blueviolet;
      
}
& #fab:hover{
    color:  #ffff;
}
& .logOutBtn{
    border:none;
    border-radius:16px;
    padding:10px;
    position: relative;
    left:39%;
    bottom:25px;
    background-color:#fff;
}
}
`;
const Styledh1 = styled.h1`
position:relative;
top:20px;
text-align:center;
font-size:25px;
color:rgba(255, 255, 255, 0.855);



`

const Header =()=>{
const navigate=useNavigate()

const HandleLogOut =()=>{
    Cookies.remove('User')
    Cookies.remove('userPass')
    alert('are you Sure u want to log out')
    navigate('/LoginForm')
}

 

    return (
    <>
 
<StyledHeader>
   
    <Styledh1>
    <i className="fab fa-typo3" id='fab'><p>DashBoard</p></i> 
    <h1>Library Management</h1>
    </Styledh1>
    
        <button className='logOutBtn' onClick={HandleLogOut}>Log Out</button>
    
   
      
</StyledHeader>


 



</>
);
}

export default Header;


    
