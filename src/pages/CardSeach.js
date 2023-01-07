import React,{useState} from 'react';
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import {Link} from 'react-router-dom';

import * as TiIcons from 'react-icons/ti';
import * as MdIcons from 'react-icons/md';

function CardSeach({book,key}) {
    const [flip, setFlip] = useState(false);
    
   
const deletedata =async (book)=>{

if(window.confirm('do you want to delete the book')){
    
  const ApiEndPoint= `http://localhost:3000/api/books`; 
  await axios.delete(ApiEndPoint + '/'+ book.id );
  window.location.reload();
 
}

}



  return (
    <div>
        <ReactCardFlip isFlipped={flip}  
               flipDirection="vertical" key={key} >
               {/*  */}
               <div  
               
                style={{
                   width: '300px',
                   height: 'max-content',
                   background: '#000',
                   fontSize: '40px',
                   color: 'black',
                   margin: '20px',
                   borderRadius: '4px',
                   textAlign: 'center',
                   padding: '20px',
                
                  
                 
                  
                  
               }}>
                
                        <TiIcons.TiDeleteOutline style={{color:'#fff',position:'relative',bottom:'80px'}}
                        onClick={()=>{deletedata(book)}}></TiIcons.TiDeleteOutline>
                 
                
                
                   <img src={book.Image} width='220px' height='200px'></img>
                   <br />
                   <br />
                   <button  style={{
                       width: '150px',
                       padding: '10px',
                       fontSize: '20px',
                       background: '#fff',
                       fontWeight: 'bold',
                       borderRadius: '5px',
                      
                      
                   }} onClick={() => setFlip(!flip)}>
                       Flip</button>
               </div>
               <div  style={{
                   width: '300px',
                   height: 'max-content',
                   background: '#F8F8FF',
                   color: 'black',
                   margin: '20px',
                   borderRadius: '4px',
                   textAlign: 'center',
                   padding: '20px',
               
                  
                   
               }} >
                <Link to={`/ModifyBook/${book.id}`}><MdIcons.MdPublishedWithChanges style={{fontSize:'30px'}}></MdIcons.MdPublishedWithChanges></Link>
                  <h3>{book.Title}</h3> 
                  <p>
                   Author :{book.Author}<br></br>
                   ISBN :{book.ISBN}<br/>
                   Category :{book.Category}<br/>
                   Availble :{book.Available}<br/>
                   Price :{book.Price}<br/>
                   
                  </p>
                  
                   <br />
                   <button  style={{
                       width: '150px',
                       padding: '10px',
                       fontSize: '20px',
                       background: '#000',
                       color:'#fff',
                       fontWeight: 'bold',
                       borderRadius: '5px',
                   }} onClick={() => setFlip(!flip)}>
                       Flip</button>
               </div>
           </ReactCardFlip> 
    </div>
  )
}

export default CardSeach