import React from 'react';
import Sus from '../Sus';
import Header from './Header';
import Navbar from './Navbar';
import { Footer } from './Footer';

function DashBoard() {
  return (
    <>
<Header/>
<Navbar/>
<Sus/>
<Footer> Copyright {new Date().getFullYear()}© NADIA OUTIZI </Footer>
    </>
  )
}

export default DashBoard