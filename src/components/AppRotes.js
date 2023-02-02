import React  from 'react';
import { Route, Routes} from 'react-router-dom'

import Auth from '../pages/Auth/Auth';
import Basket from '../pages/Basket/Basket';
import CatalogPage from '../pages/CatalogPage/CatalogPage'; 
import Home from '../pages/Home/Home'
import ChapterPage from '../pages/ChapterPage/ChapterPage';
import Personal from '../pages/Personal/Personal';
import CartPage from '../pages/CartPage/CartPage';
import SearchPage from '../pages/SearchPage/SearchPage';

const AppRoutes = () => {
  return (
    <>
    <Routes>    
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<Auth/>} />
      <Route path="/login" element={<Auth/>} />
      <Route path="/personal" element={<Personal/>} />
      <Route path="/search/:text" element={<SearchPage/>} />
      
      <Route path="/basket" element={<Basket/>} />
      <Route path="/chapter/:chapter" element={<ChapterPage/>} />
      <Route path="/catalog/:catalog" element={<CatalogPage/>} />
      <Route path="/cart/:id" element={<CartPage/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
 </>
  )
}

export default AppRoutes