import React, { useEffect ,useState} from 'react';
import Side from './Side';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Books() {
  const [Books,setBooks]= useState([]);
  const[value,setvalue]=useState('');
  useEffect(()=>{
    const getData=async()=>{
      const books=await axios.get(
          `http://localhost:3000/api/books`
      );
      setBooks(books.data)
     
  } 
  getData();
  },[])
const HandleChange=(e)=>{
setvalue(e.target.value)

    

}

  return (
    <>
    <Side/>
    <aside>
  <input type='text' placeholder='search Book Title ...' style={{textTransform: 'lowercase'}}
    className='search' onChange={HandleChange}/> 
    </aside>
    {
        Books.filter(book=>book.Title.toLowerCase().includes(value)).map((book,index)=>{
         return(
<div key={index} style={{ display:'inline-flex',flexDirection:'column',marginLeft: '20%'}}>
         <img src={book.Image} alt='book image'  style={{ width:'200px', height:'250px'}}/><br/>
         <button style={{padding:'4px',border:'none',background:'#ccc'}}>
            <Link to={`/BookInfo/${book.id}`} style={{color:'black',textDecoration:'none'}}>View</Link>
            </button><br/><br/>
  </div>

         )
        })}
   
        
            
       
      
 
   

    </>
    
    

  )
}

export default Books