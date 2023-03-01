import React from 'react'
import { useParams } from 'react-router-dom'

import palto from './../../img/chapter/men/palto.jpeg'
import watch from './../../img/chapter/men/watch.jpeg'
import belt from './../../img/chapter/men/belt.jpeg'
import dresses from './../../img/chapter/women/dresses.jpeg'
import jumper from './../../img/chapter/women/jumper.jpeg'
import skirt from './../../img/chapter/women/skirt.jpeg'
import bag from './../../img/chapter/accessories/bag.jpeg'
import bracelets from './../../img/chapter/accessories/bracelets.jpeg'
import glasses from './../../img/chapter/accessories/glasses.jpeg'

import MyCarousel from '../../components/MyCarousel/MyCarousel'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import s from './ChapterPage.module.css'
 
const man = [ { img: palto, title: "ДЖЕМПЕР&пальто",link: "palto" }, { img: watch, title: "ЧАСЫ",link: "watch" }, { img: belt, title: "РЕМЕНЬ", link: "belt" }, ]
const woman = [ { img: dresses, title: "платье",link: "dresses" }, { img: skirt, title: "юбка",link: "skirt" }, { img: jumper, title: "джемпер", link: "jumper" }, ]
const accessories = [ { img: bag, title: "сумка - женская",link: "bag" }, { img: glasses, title: "очки",link: "glasses" }, { img: bracelets, title: "браслет - женская", link: "bracelets" }, ]

const ChapterPage = () => {
  const {chapter} = useParams()  

  return (
    <div className='page_wrap'>
      <div className="container">

      <MyCarousel/>

      <div className={s.box}>
        {chapter === "man" && man.map(obj => 
            <CatalogItem key={obj.title} imgUrl={obj.img} title={obj.title}  link={`/catalog/${obj.link}`} /> 
          )}
        {chapter === "woman" && woman.map(obj => 
            <CatalogItem key={obj.title} imgUrl={obj.img} title={obj.title}  link={`/catalog/${obj.link}`} /> 
          )}
        {chapter === "accessories" && accessories.map(obj => 
            <CatalogItem key={obj.title} imgUrl={obj.img} title={obj.title}  link={`/catalog/${obj.link}`} /> 
          )}
      </div>

      </div>
    </div>
  )
}

export default ChapterPage