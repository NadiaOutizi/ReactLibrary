import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
function ModifyBook() {
    const navigate = useNavigate();
    const {id} = useParams()
    console.log(id)
   const [IdBook,setIdBook]=useState(id)
   const [Book,setBook]=useState({
    id:'',
    Title:'',
    Author:'',
    ISBN:'',
    Category:'',
    Available:'',
    Price:'',
    Image:''
   });
   useEffect(()=>{
    const getData=async()=>{
        const users=await axios.get(
          `http://localhost:3000/api/books/${IdBook}`
        ).then((res)=>{
          const data=res.data;
          console.log(data)
          setBook({ 
            id:data[0].id,
            Title:data[0].Title,
            Author:data[0].Author,
            ISBN:data[0].ISBN,
            Category:data[0].Category,
            Available:data[0].Available,
            Price:data[0].Price,
            Image:data[0].Image,
            })
        
        })} 
    getData();
  },[]); 
  const {Id,Title,Author,ISBN,Category,Available,Price,Image}=Book
  const HandleSubmit=(e)=>{
    e.preventDefault();
    axios.patch(`http://localhost:3000/api/books/${IdBook}`,{
    Id,
    Title,
    Author,
    ISBN,
    Category,
    Available,
    Price,
    Image
    }).then(res=>{
      console.log(res.config.data)
      alert('Book Updated successfully!!')
      navigate("/Book");
    }
      ).catch((err=>{
        console.error(err)
        alert('bad request')
      }
        
      ))
}
  return (
    <>
    <Header/>
    <Navbar/>
    <br></br>
    <h2>Update Book</h2>
<form onSubmit={HandleSubmit}>
{/*   */}
    <label>id</label><input type='text'
    value={Book.id} onChange={(event) => setBook({...Book,id: event.target.value })}></input><br></br><br></br>
    <label>Title</label><input type='text'
    value={Book.Title} onChange={(event) => setBook({...Book,Title: event.target.value })}></input><br></br><br></br>
    <label>Author</label><input type='text'
    value={Book.Author} onChange={(event) => setBook({...Book,Author: event.target.value })}></input><br></br><br></br>
    <label>ISBN</label><input type='text'
    value={Book.ISBN} onChange={(event) => setBook({...Book,ISBN: event.target.value })}></input><br></br><br></br>
    <label>Category</label><input type='text'
    value={Book.Category} onChange={(event) => setBook({...Book,Category: event.target.value })}></input><br></br><br></br>
    <label>Available</label><input type='text'
    value={Book.Available} onChange={(event) => setBook({...Book,Available: event.target.value })}></input><br></br><br></br>
    <label>Price</label><input type='text'
    value={Book.Price} onChange={(event) => setBook({...Book,Price: event.target.value })}></input><br></br><br></br>
    <label>Image Url</label><input type='text'
    value={Book.Image} onChange={(event) => setBook({...Book,Image: event.target.value })}></input><br></br><br></br><br></br><br/>
<button type='submit' className='add' style={{fontSize:'17px'}}>Update The Book</button><br></br><br/>
</form>
<br></br>
      <div> <a href="javascript:history.back()" id="getback">Get Back to Previous Page</a></div>
     <br></br><br></br>
    </>
  )
}

export default ModifyBook