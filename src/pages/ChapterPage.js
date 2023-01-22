import React from 'react'

import palto from './../img/men/palto.jpeg'
import watch from './../img/men/watch.jpeg'
import belt from './../img/men/belt.jpeg'

import MyCarousel from '../components/MyCarousel'
import CatalogItem from '../components/CatalogItem'
import s from './styles/Mens.module.scss'

const ChapterPage = () => {
  return (
    <div className='s.mans'>
      <div className="container">

      <MyCarousel/>

      <div className={s.box}>
        <CatalogItem imgUrl={palto} title="ДЖЕМПЕР&пальто"  link={'/catalog/palto'} />
        <CatalogItem imgUrl={watch} title="ЧАСЫ"  link={'/catalog/clock'} />
        <CatalogItem imgUrl={belt} title="РЕМЕНЬ" link={'/catalog/remen'} />
      </div>

      </div>
    </div>
  )
}

export default ChapterPage