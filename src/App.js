import React from 'react'
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from "./components/AppRotes";
import Footer from "./components/Footer/Footer"; 
import NavBar from './components/Navbar/NavBar';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
