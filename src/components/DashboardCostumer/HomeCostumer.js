import React,{useState,useEffect} from 'react';
import axios from "axios";
import './Home.css';
import { Link,useNavigate} from 'react-router-dom';
import Side from './Side';



function HomeCostumer() {
   const navigate = useNavigate();
   const [Books,setBooks]= useState([]);

   useEffect(()=>{
      const getData=async()=>{
         const books=await axios.get(
             "http://localhost:3000/api/books"
         );
         setBooks(books.data)
        
     } 
     getData();
   },[]);
   const HandleLogOut=()=>{
      window.sessionStorage.clear();
      navigate('/LoginUser')
   }
  return (
   <>
   <Side/>
   <button style={{
position:'relative',top:'20px',left:'600px',border:'none',borderRadius:'16px',padding:'4px',
fontFamily:'cursive,italic'
}}
   onClick={HandleLogOut}><i>Log Out</i></button>
   <aside className='books'>
      
{Books.map((book,index)=>{
   return(
      <div key={index}>
          <img src={book.Image} alt='book image' /><br/><br/>
          <button>
            <Link to={`/BookInfo/${book.id}`} style={{color:'#f2f2fc',textDecoration:'none'}}>View</Link>
            </button>
      </div>
       
   )
})}
 
</aside> 


   </>
    

  )
}

export default HomeCostumer