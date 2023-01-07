import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';




function ListUsers (){
    const [Utilisateur,setUtilisateur]=useState([]);
    const [ElemId,setElemId] = useState(0)
    
    useEffect(()=>{
        const getData=async()=>{
            const users=await axios.get(
                "http://localhost:3000/api/users"
            );
            setUtilisateur(users.data)
            // console.log(users.data)
        } 
        getData();
    },[]);

const deletedata =async (user)=>{

if(window.confirm('do you want to delete')){
    
  const ApiEndPoint= `http://localhost:3000/api/users`; 
  await axios.delete(ApiEndPoint + '/'+ user.id );

//   window.location.reload();
}

}



    return(
        <div className="Users">
         
            
        <table>
<thead>
    <tr>
        <th>Id</th>
        <th>Nic</th>
        <th>FirstName</th>
        <th>MiddleName</th>
        <th>LastName</th>
        <th>ContactNo</th>
        <th>Address</th>
        <th>UserType</th>
        <th>Borrowed Books</th>
        <th>Date</th>
        <th>Action</th>
        
    </tr>
</thead>
<tbody>
          {Utilisateur.map((user,index)=>{
           return(<tr key={index}>

               <td>{user.id}</td>
               <td>{user.Nic}</td>
               <td>{user.FirstName}</td>
               <td>{user.MiddleName}</td>
               <td>{user.LastName}</td>
               <td>{user.ContactNo}</td>
               <td>{user.Address}</td>
               <td>{user.UserType}</td>
               <td>{user.BorrowedBooks}</td>
               <td>{user.Date}</td>

               <td>
               
                <button className="Del" onClick={()=>deletedata(user)}>Delete</button> &nbsp;
                <button className="Del"  onClick={()=>setElemId(user.id)}><Link to={`/UpdateUser/${user.id}`} className='UpdateUser' state={{ElemId:ElemId}}>Update</Link></button>
                

               </td>
            </tr>) 
          })}  
          </tbody>
        </table> 
        <button className='Search' id="adduser"><Link to='/AddUsers'className='chercher'>Add Users</Link></button> 
      
        </div>
      
        
    )
}
export default ListUsers;