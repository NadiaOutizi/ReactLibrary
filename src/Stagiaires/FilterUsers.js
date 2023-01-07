import axios from "axios";
import React, { useState,useEffect } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const FilterUsers=()=>{
    const [Data,setData]=useState([])
    const [Resultat,setResultat]=useState([])
    const [Books,setBooks]=useState([]);
    const [Selected,setSelected]=useState('');
    const [Elem,setElem]=useState({
    Address: "",BorrowedBooks: "",ContactNo: "",Date: null,FirstName: "",LastName: "",MiddleName: "", Nic:  "",
        UserType: ""});
    const [Flag,setFlag]=useState(false);
  
    const handleChange = (e) => {
        // console.log(e.target.value);
        setSelected(e.target.value);
        
}; 
const HandleFilter=()=>{
    setFlag(true)
    fetch(`http://localhost:3000/api/users?_where=(BorrowedBooks,eq,${Selected})`).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data[0])
        setElem({...Elem,Address:data[0].Address,BorrowedBooks: data[0].BorrowedBooks,ContactNo: data[0].ContactNo,
            Date: data[0].Date,FirstName: data[0].FirstName,LastName: data[0].LastName,MiddleName: data[0].MiddleName, Nic:data[0].Nic,UserType:data[0].UserType})
    }).catch(err=>console.error(err));
//    let x=Array.isArray(Elem)
//     console.log(x)
}
  
    useEffect(()=>{
        const getData=async()=>{
            const books=await axios.get(
                "http://localhost:3000/api/books"
            );
            setBooks(books.data)
           
        } 
        getData();
    },[]);
const filterResult= async (CatItem)=>{
        
    const users= await axios.get(`http://localhost:3000/api/users`).then((res)=>{ 
        setData(res.data)
        
        const Result=Data.filter((curData)=>{
            return curData.UserType===CatItem
  });
  setResultat(Result)
    
}).catch(err => {
    console.log(err);
  });
    
    
     
    }
    return(
        <> 
        <div >
        <Header/>
        <Navbar/>
        {/* <h1>{Selected}</h1>
        <h2>{Elem}</h2> */}
        <div className="radio" onClick={()=>{setFlag(false)}}> 
       
        <div style={{margin:'30px'}}>
        <strong>University users</strong>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <input type='radio' name='btn' className="btn"onClick={()=>filterResult('University')} style={{paddingRight:'20px'}}></input>
        </div>
        <div style={{margin:'30px'}}>
        <strong>Employed users</strong>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
        <input type='radio' className="btn" name='btn' onClick={()=>filterResult('Employed')} /> <br></br>
        </div>
        <strong>School users</strong>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='radio' name='btn' className="btn" onClick={()=>filterResult('School')}/> <br></br>
        </div>
        

        </div>
     
    <label style={{fontSize:"16px"}}>Filter users by Books</label>  &nbsp;&nbsp; 
    <select name="books" id="book-select" onChange={handleChange} 
       onClick={HandleFilter}>
    <option value="">--Please choose an option--</option>
   { Books.map((book,index)=>{
   return(

 <option key={index} value={book.Title} >{book.Title}</option>
    
   
   ) 
   })}

</select>


       <br></br><br></br><br></br>
       {Flag?
        Object.values(Elem).map((el,index)=>{
    
            return( 
               
                 <li key={index}>{el}</li>   
               
            
            )
        
            
        })
      :
   
    // 
    <table className="result">
    <thead>
    <th>Id</th>
    <th>Nic</th>
    <th>FirstName</th>
    <th>MiddleName</th>
    <th>LastName</th>
    <th>ContactNo</th>
    <th>Address</th>
    <th>UserType</th>
    
    </thead>
   
  { Resultat.map((res)=>(
    <tbody key={res.id}>
     <td>{res.id}</td>
     <td>{res.FirstName}</td>
     <td>{res.Nic}</td>
     <td>{res.MiddleName}</td>
     <td>{res.LastName}</td>
     <td>{res.ContactNo}</td>
     <td>{res.Address}</td>
     <td>{res.UserType}</td>
    </tbody>
))}

</table>
    
    }

    

       
     
       <a href="javascript:history.back()" id="getback">Get Back to Previous Page</a>
       
        </>
       
    )
        

}
export default FilterUsers;