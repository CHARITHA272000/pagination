import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Navbar from "./components/Navbar";
import { BasicTable } from './components/BasicTable';
import {Toolbox} from './components/Toolbox'
import { PaginationTable } from './components/PaginationTable';



function App () {
   const handlePageClick = async (data) => {
    console.log(data.selected);
   }
  return (
    <>
      <Navbar  />
      <Dropdown  />
       <Toolbox/>
      
      <PaginationTable/>
    
       
    
    </>
  );
}


export default App;
