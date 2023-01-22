import React from 'react'
import MyCarousel from '../components/MyCarousel'
import Catalog from '../components/Catalog'
import Sales from '../components/Sales'

import slide01 from './../img/slides/01.jpg'
import slide02 from './../img/slides/02.jpg'
import slide03 from './../img/slides/03.jpg'

import s from './styles/Home.module.scss'

const slides = [
  {
    slide: slide01, 
    title: 'This is YKL', 
    strong: 'This is a work of art', 
    text: 'Около 1000+ одежд'
  },
  {slide: slide02, title: 'Best of YKL', strong: '', text: 'Для женщин'},
  {slide: slide03, title: 'Spring sale', strong: '', text: 'Для мужчин & женщин'}
]

const Home = () => {

  return (
    <div className={s.home}>
      <div className="container">
        <MyCarousel
          slides={slides}
        />
        <Sales/>
        <Catalog/>
      </div>
    </div>
  )
}

export default Home