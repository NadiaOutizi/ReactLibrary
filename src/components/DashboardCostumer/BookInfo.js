import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import RightNav from './RightNav';
import './BookInfo.css'
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';

const StyledBurger = styled.div`
  width: 5rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 25px;
  z-index: 20;
  display: none;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  


  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
     
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const HandleBorrow=()=>{
    axios.patch( `http://localhost:3000/api/books/${id}`,{
		  id:id,
      Available:Available-1
      
		}).then(()=>{
      window.location.reload()
    })
  }
  const [open, setOpen] = useState(false);
  const [Image,setImage]= useState();
  const [Title,setTitle]=useState();
  const [Author,setAuthor]=useState();
  const [Description,setDescription]=useState();
  const [ISBN,setISBN]=useState();
  const [Price,setPrice]=useState();
  const [Available,setAvailable]=useState();
  const {id} = useParams();   
  useEffect(()=>{
      const getData=async()=>{
         const books=await axios.get(
             `http://localhost:3000/api/books/${id}`
         ).then((res)=>{

             setImage(res.data[0].Image);
             setTitle(res.data[0].Title);
             setAuthor(res.data[0].Author);
             setDescription(res.data[0].description);
             setISBN(res.data[0].ISBN);
             setPrice(res.data[0].Price);
             setAvailable(res.data[0].Available);

            
  });
        
     } 
     getData();
   },[])
  return (
    < div style={{overflowX:' hidden'}}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
      <h1 className='t'>{Title}</h1>
      <h3 className='tt'>{Author}</h3>
      <img src={Image} width='300px' className='booka'></img>
      <button className='borrow' onClick={HandleBorrow}>Borrow Book</button>
      <div className='rating'>
      <i className='fa fa-star active'></i>
     <i className='fa fa-star active'></i>
     <i className='fa fa-star active'></i>
     <i className='fa fa-star active'></i>
    
      </div>
      <div className='price'><p>{Price}</p></div>
      <div className='description'>
        {Description}
      </div>
      <span class="isbn">
     <ImIcons.ImBarcode style={{fontSize:'40px',color:'black'}}></ImIcons.ImBarcode>
      <p>{ISBN}</p>
      </span>
    <span className='availble'>
    <RiIcons.RiBook2Line style={{fontSize:'40px',color:'black'}}></RiIcons.RiBook2Line>
    <p>Available:{Available}</p>
    </span>
    <span className='langue'>
    <IoIcons.IoEarthOutline style={{fontSize:'40px',color:'black'}}></IoIcons.IoEarthOutline>
    <p><strong>Language</strong>:<i>English</i></p>
    </span>
    </div>
  )
}

export default Burger
