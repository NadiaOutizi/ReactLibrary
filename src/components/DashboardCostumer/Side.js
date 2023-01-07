import React from 'react'
import './Home.css';

function Side() {
  return (
    <div className="main-container">    
    <div className="aside">
    <div className="logo">
       <a href="/HomeCostumer"><span>L</span>ibrary</a>
    </div>
    <div className="nav-toggler">
       <span></span>
    </div>
    <ul className="nav">
       <li><a href="/HomeCostumer" className="active"><i className="fa fa-home"></i>Home</a></li>
       <li><a href="/Books"><i className="fa fa-book"></i>Books</a></li>
       <li><a href="/BorrowBook"><i className="fa fa-list"></i>Contact</a></li>
       <li><a href="/FeedBack"><i className="fa fa-smile"></i>FeedBack</a></li>
       <li><a href="/Contact"><i className="fa fa-comments"></i>Comment</a></li>
      
    </ul>

</div>
</div>
  )
}

export default Side
