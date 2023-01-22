import React from 'react'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from "./components/AppRotes";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
