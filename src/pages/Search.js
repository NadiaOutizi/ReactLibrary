import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import axios from 'axios';
import CardSeach from './CardSeach';
import './flipcard.css';




function Search() {
    const [Books,setBooks]= useState([]);
    const [value,setValue]=useState('');
    useEffect(()=>{
        const getData=async()=>{
            const books=await axios.get(
                "http://localhost:3000/api/books"
            );
            setBooks(books.data)
           
        } 
        getData();
    },[]);
  

  return (
    <>
    <Header/>
    <Navbar/>
    <input type='text' placeholder='search Category...' style={{textTransform: 'lowercase'}}
    className='search' onChange={e=>setValue(e.target.value)}/> 
    
    <div className="wrapper" >
        {
        Books.filter(book=>book.Category.toLowerCase().includes(value)).map((book,index)=>{
        
        return(
           
             <CardSeach book={book} key={index}/>   
            
            
        )
            })}
        

       </div>
    </>
  )
}

export default Search