import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

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

function AddUsers() {

  const navigate = useNavigate();
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
     const [Error,setError]=useState(false);
     const BorrowedBookregex=/[a-zA-Z]/
const {Id,Nic,FirstName,MiddleName,LastName,ContactNo,Address,UserType,BorrowedBooks,Date}=User
const HandleSubmit=(e)=>{
      e.preventDefault()
// if(User.Id.length==0 || User.FirstName.length==0 || User.Nic.length==0 || User.Address.length==0 
//   || User.LastName.length==0 || User.MiddleName.length==0 || User.ContactNo.length==0
//   || User.BorrowedBooks.length==0 || User.UserType.length==0 || User.Date.length==0){
//       setError(true);
//       alert('oops inputs are required')
//   }
//   else if(NaN(User.Id)){
//     setError(true);
//     alert('id should be a Number')
//   }
//   else if(User.FirstName.charAt(0)!==User.FirstName.charAt(0).toUpperCase()
//   || User.MiddleName.charAt(0)!==User.MiddleName.charAt(0).toUpperCase() || 
//   User.LastName.charAt(0)!==User.LastName.charAt(0).toUpperCase()){
//     setError(true);
//     alert('Names Should Start with a Capital')
//   }else if(BorrowedBookregex.test(User.BorrowedBooks)!==true){
//     setError(true);
//     alert('the book should be a string')
//   }
 
  // else if(!Error){
    axios.post("http://localhost:3000/api/users",{
      Id,
      Nic,
      FirstName,
      MiddleName,
      LastName,
      ContactNo,
      Address,
      UserType,
      BorrowedBooks,
      Date,
      
    }).then(res=>{
      console.log(res.config.data)
      alert('added successfully!!')
      if(Error===false){
        navigate("/Users");
      }
      
    }).catch((err=>console.error(err)))
  // }
 
  }
  return (
    <div className='AjouterStagiaire'>
<Header/>
<Navbar/>

<Styledh1>
  <h1>Add User </h1>
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
           <label>Date</label>
           <input type='date' className='inpt' value={User.Date}
          onChange={(event) =>setUser({...User,Date: event.target.value })}/><br></br><br></br>
          <button type='submit' className='add'style={{fontSize:'17px'}}>Submit</button><br></br><br/>
      
     </form>
     
     <br></br>
     <a href="javascript:history.back()" id="getback">Get Back to Previous Page</a>
     
      
      
    <br></br><br></br>
    </div>
  )
}

export default AddUsers