import React, { useState,useEffect } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import axios from "axios";
import './flipcard.css';
import FlipCard from "./FlipCard";
import * as AiIcons from 'react-icons/ai';



function Book() {
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
    const [Data,setData]=useState({
      id:'',
      Title:'',
      Author:'',
      ISBN:'',
      Category:'',
      Available:'',
      Price:'',
      Image:''
    })
    
    // const [File,setFile]=useState()
   
    // const HandleFile =(e)=>{
// let BookImage=e.target.files[0].name
// console.log(e.target.files[0].name)
// setFile(BookImage)
// console.log(File)


    // }
const {id,Title,Author,ISBN,Category,Available,Price,Image}=Data;

    const HandleSubmit =(e)=>{
      e.preventDefault()
      // console.log(File)
      // let formData = new FormData()
      
      // let Image = File
      // formData.append('image',Image)
      // formData.append('id',id)
      // formData.append('Title',Title)
      // formData.append('Author',Author)
      // formData.append('ISBN',ISBN)
      // formData.append('Category',Category)
      // formData.append('Availble',Availble)
      // formData.append('Price',Price)  
    //   axios.post('http://localhost:3000/api/books', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    // }).then((res)=>{
    //     console.log(res.config.data)
    //           alert('book added successfuly')  
    //   }).catch(err=>alert(err))
    axios.post("http://localhost:3000/api/books",{
      id:id,
      Title:Title,
      Author:Author,
      ISBN:ISBN,
      Category:Category,
      Available:Available,
      Price:Price,
      Image:Image
      
    }).then(res=>{
      console.log(res.config.data)
      alert('added successfully!!');
      window.location.reload();
     
    }).catch((err=>alert(err)))
  
    }
   
    
    return (
        <>
        <Header/>
<Navbar/>
<br></br>
<div class="container">

  
  <AiIcons.AiOutlinePlus style={{color:'black',fontSize:'40px',float:'right'}} data-toggle="modal" data-target="#myModal"></AiIcons.AiOutlinePlus>
  
  <div class="modal fade" id="myModal" role="dialog" >
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add a Book</h4>
        </div>
        <div class="modal-body">
        
<form class="form-group" onSubmit={HandleSubmit} encType='multipart/form-data'>
          <div class="form-group row">
    <label  class="col-md-3 col-form-label">id</label>
    <div class="col-sm-10">
      <input type='text' class="form-control" 
       onChange={(e)=>{setData({...Data,id:e.target.value})}}/>
    </div>
  </div>
  <div class="form-group row">
  <label class="col-md-3 col-form-label">Title</label>
  <div class="col-sm-10">
  <input type='text' class="form-control" 
            onChange={(e)=>{setData({...Data,Title:e.target.value})}}/>
  </div>
  </div>
  <div class="form-group row">
  <label class="col-md-3 col-form-label">Author</label>
  <div class="col-sm-10">
  <input type='text' class="form-control" 
            onChange={(e)=>{setData({...Data,Author:e.target.value})}}/>
  </div>
  </div>
  <div class="form-group row">
  <label class="col-md-3 col-form-label">ISBN</label>
  <div class="col-sm-10">
  <input type='text' class="form-control" 
            onChange={(e)=>{setData({...Data,ISBN:e.target.value})}}/>
  </div>
  </div>
  <div class="form-group row">
  <label class="col-md-3 col-form-label">Category</label>
  <div class="col-sm-10">
  <input type='text' class="form-control" 
           onChange={(e)=>{setData({...Data,Category:e.target.value})}}/>
  </div>
  </div>
  <div class="form-group row">
  <label class="col-md-3 col-form-label">Availble</label>
  <div class="col-sm-10">
  <input type='text' class="form-control" 
           onChange={(e)=>{setData({...Data,Available:e.target.value})}}/>
  </div>
  </div> 
  <div class="form-group row">
  <label class="col-md-3 col-form-label">Price</label>
  <div class="col-sm-10">
  <input type='text' class="form-control" 
          onChange={(e)=>{setData({...Data,Price:e.target.value})}}/>
  </div>
  </div>       
         <label>Image</label>   
         <input type='text' onChange={(e)=>{setData({...Data,Image:e.target.value})}}/><br></br>

  <button type="submit" class="btn btn-default" >ADD BOOK</button>



        </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="wrapper"  >

{Books.map((book,index)=>(
             <FlipCard book={book} key={index} />  
        ))}
</div>
     
                    
               
        
        </>

    );
}


export default Book