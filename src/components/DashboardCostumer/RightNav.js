import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  

  li {
    padding: 18px 10px;
  }

 
    flex-flow: column nowrap;
    background-color:#f2f2fc;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li a{
      color:#302e4d;
      padding-left:5px;
      

  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li><i className="fa fa-home"></i><a href="/HomeCostumer" className="active">Home</a></li><br/>
       <li><i className="fa fa-book"></i><a href="/Books">Books</a></li><br/>
       <li><i className="fa fa-list"></i><a href="/BorrowBook">Contact</a></li><br/>
       <li><i className="fa fa-smile"></i><a href="/FeedBack">FeedBack</a></li><br/>
       <li><i className="fa fa-comments"></i><a href="/Contact">Comment</a></li><br/>
      
      
  
    </Ul>
  )
} 

export default RightNav
