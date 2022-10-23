import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from './components/AddForm';
import Navbars from './components/Navbars';
import Try from './components/Try';
function Router() {
    return (
      <BrowserRouter>
      <Navbars/>
  <Routes>
      <Route path="/addform" element={<AddForm/>} />
      <Route path="/" element={<Try/>}/>
      
  </Routes>
  </BrowserRouter>
    )
  }
  
  export default Router;