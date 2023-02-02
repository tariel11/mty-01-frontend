import React from 'react'

import MyCarousel from '../../components/MyCarousel/MyCarousel'
import Catalog from '../../components/Catalog/Catalog'
import Sales from '../../components/Sales/Sales' 

const Home = () => {

  return (
    <div className='page_wrap'>
      <div className="container">
        <MyCarousel/>
        <Sales/>
        <Catalog/>
      </div>
    </div>
  )
}

export default Home