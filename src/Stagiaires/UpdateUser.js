import React,{useEffect, useState}from 'react';
// import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const  Styledh1 = styled.h1`
width: 800px;
  background-color: rgb(0,0,0,6);
  margin: auto;
  color: #ffffff;
  padding: 10px 0px 10px 0px;
  text-align: center;
  border-radius: 15px 0px 0px;
  margin-top:40px;
`


function UpdateUser() {
  
  


  // const location=useLocation()
  const navigate = useNavigate();
 const {id} = useParams()
 console.log(id)
const [IdElem,setIdElem]=useState(id)
  
// const New =location.state?.ElemId;
// console.log(New)


  const[User,setUser]=useState({
    Id:"",
    Nic:"",
    FirstName:"",
    MiddleName:"",
    LastName:"",
    ContactNo:"",
    Address:"",
    UserType:"",
    BorrowedBooks:"",
    Date:'',
   



 });


const {Id,Nic,FirstName,MiddleName,LastName,ContactNo,Address,UserType,BorrowedBooks,Date}=User;
const HandleSubmit=(e)=>{
  e.preventDefault()

 axios.patch(`http://localhost:3000/api/users/${IdElem}`,{
  // http://localhost:3000/api/users/:id
      Id,Nic,FirstName,MiddleName,LastName,ContactNo,Address,UserType,BorrowedBooks,Date
    }).then(res=>{
      console.log(res.config.data)
      alert('User Updated successfully!!')
      navigate("/Users");
    }
      ).catch((err=>{
        console.error(err)
        alert('bad request')
      }
        
      ))
 

}
useEffect(()=>{
  const getData=async()=>{
      const users=await axios.get(
        `http://localhost:3000/api/users/${IdElem}`
      ).then((res)=>{
        const data=res.data;
        console.log(data)
        console.log(data[0].FirstName)
        setUser({ 
          Id:data[0].id,
          Nic:data[0].Nic,
          FirstName:data[0].FirstName,
          MiddleName:data[0].MiddleName,
          LastName:data[0].LastName,
          ContactNo:data[0].ContactNo,
          Address:data[0].Address,
          UserType:data[0].UserType,
          BorrowedBooks:data[0].BorrowedBooks,
          Date:data[0].Date,
          })
      // console.log(res)
      }
      )   
      // console.log(users)
      
    //  

      
  } 
  getData();
},[]);

  return (
   <div style={{backgrounColor:'beige'}}>
   
  <Header/>
 <Navbar/>
<br></br>
<Styledh1>
 <h1 >Update User</h1> 
</Styledh1>


       
    

       <form className='Form' onSubmit={HandleSubmit}> 
      
        
        
          
          <label>Id : </label>
          <input type='test' className='inpt' value={User.Id} 
           onChange={(event) => setUser({...User,Id: event.target.value })}/><br></br>
          <label>Nic:</label>
          <input type='test' className='inpt' value={User.Nic}
           onChange={(event) => setUser({...User,Nic: event.target.value })}/><br></br>
          <label>FirstName :</label>
          <input type='test' className='inpt' value={User.FirstName}
           onChange={(event) =>setUser({...User,FirstName: event.target.value })}/><br></br>
          <label>MiddleName :</label>
          <input type='text' className='inpt' value={User.MiddleName}
          onChange={(event) =>setUser({...User,MiddleName: event.target.value })}/><br></br>
          <label>LastName :</label>
          <input type='test' className='inpt' value={User.LastName}
          onChange={(event) =>setUser({...User,LastName: event.target.value })}/><br></br>
          <label>ContactNo :</label>
          <input type='test' className='inpt' value={User.ContactNo}
          onChange={(event) =>setUser({...User,ContactNo: event.target.value })}/><br></br>
          <label>Address :</label>
          <input type='test' className='inpt' value={User.Address}
          onChange={(event) =>setUser({...User,Address: event.target.value })}/><br></br>
          <label>UserType :</label>
          <input type='test' className='inpt' value={User.UserType}
          onChange={(event) =>setUser({...User,UserType: event.target.value })}/><br></br>
           <label>BorrowedBooks</label>
           <input type='test' className='inpt' value={User.BorrowedBooks}
          onChange={(event) =>setUser({...User,BorrowedBooks: event.target.value })}/><br></br>
          <label>BorrowedBooks</label>
           <input type='date' className='inpt' value={User.Date}
          onChange={(event) =>setUser({...User,Date: event.target.value })}/><br></br><br></br>
          <button type='submit' className='add' style={{fontSize:'17px'}}>Update The User</button><br></br><br/>

     
   
      </form>
      
      <br></br>
      <div> <a href="javascript:history.back()" id="getback">Get Back to Previous Page</a></div>
     <br></br><br></br>
   
    
   </div> 



  )
}

export default UpdateUser