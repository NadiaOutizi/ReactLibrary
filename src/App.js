import React from "react";
import { Routes, Route } from 'react-router-dom';
import AddUsers from './Stagiaires/AddUsers';
import DashBoard from "./components/DashBoard";
import FilterUsers from "./Stagiaires/FilterUsers";
import LoginForm from "./components/Auth/LoginForm";
import SignUp from './components/Auth/SignUp';
import DispalyUsers from "./Stagiaires/DispalyUsers";
import UpdateUser from "./Stagiaires/UpdateUser";
import Home from "./pages/Home";
import LoginTest from "./components/Auth/LoginTest";
import Book from "./pages/Book";
import Search from "./pages/Search";
import ModifyBook from "./pages/ModifyBook";
import NotFound from "./pages/NotFound";
import FirstTest from "./components/Auth/FirstTest";
import LoginUser from "./components/Auth/LoginUser";
import RegisterUser from "./components/Auth/RegisterUser";
import HomeCostumer from "./components/DashboardCostumer/HomeCostumer";
import ForgotPassword from "./components/Auth/ForgotPassword";
import BookInfo from "./components/DashboardCostumer/BookInfo";
import Books from "./components/DashboardCostumer/Books";
import Contact from "./components/DashboardCostumer/Contact";
import LoginUserTest from "./components/Auth/LoginUserTest";
import FeedBack from "./components/DashboardCostumer/FeedBack";
import BorrowBook from "./components/DashboardCostumer/BorrowBook";

 



function App() {
 
  

  return (
    <div className="App">  
      <>
  
  <Routes> 
      <Route index element={<FirstTest/>}/>
      <Route  path="/LoginTest" element={<LoginTest/>} />
      <Route path="/LoginUser" element={<LoginUser/>}/>
      <Route exact path="*" element={<NotFound/>}/>
      <Route  path='/pages/Home' exact element={<Home/>} />
      <Route  path='/LoginForm' element={<LoginForm/>} />
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path='/Filter' element={<FilterUsers/>} />
      <Route path='/Users' element={<DispalyUsers/>} />
      <Route path='/AddUsers' element={<AddUsers/>}/>
      <Route  path='/UpdateUser/:id' element={<UpdateUser/>} />
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/Book" element={<Book/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/ModifyBook/:id" element={<ModifyBook/>}/>
      <Route path="/HomeCostumer" element={<HomeCostumer/>}/>
      <Route path="/RegisterUser" element={<RegisterUser/>}/>
      <Route path="/forgotPassword/:UserName" element={<ForgotPassword/>}/>
      <Route path="/BookInfo/:id" element={<BookInfo/>}/>
      <Route path="/Books" element={<Books/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/LoginUserTest" element={<LoginUserTest/>}/>
      <Route path="/FeedBack" element={<FeedBack/>}/>
      <Route path="/BorrowBook" element={<BorrowBook/>}/>

</Routes> 
      
      
      </>
    
    </div>
  );
}

export default App;

