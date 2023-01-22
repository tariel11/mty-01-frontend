import React  from 'react';
import { Route, Routes} from 'react-router-dom'
import Auth from '../pages/Auth';
import Basket from '../pages/Basket';
import CatalogPage from '../pages/CatalogPage';
import FullCart from '../pages/FullCart';

import Home from '../pages/Home'
import ChapterPage from '../pages/ChapterPage';
import Personal from '../pages/Personal';

const AppRoutes = () => {

  return (
    <>
    <Routes>    
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<Auth/>} />
      <Route path="/login" element={<Auth/>} />
      <Route path="/personal" element={<Personal/>} />
      
      <Route path="/basket" element={<Basket/>} />
      <Route path="/chapter/:title" element={<ChapterPage/>} />
      <Route path="/catalog/:title" element={<CatalogPage/>} />
      <Route path="/cart/:id" element={<FullCart/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
 </>
  )
}

export default AppRoutes