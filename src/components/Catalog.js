import React from 'react'

import catalog01 from './../img/catalog/01.jpg'
import catalog02 from './../img/catalog/02.jpg'
import catalog03 from './../img/catalog/03.jpg'
import catalog04 from './../img/catalog/04.jpg'
import catalog05 from './../img/catalog/05.jpg'

import CatalogItem from './CatalogItem'
import s from './styles/Catalog.module.scss'

const Catalog = () => {
  return (
    <div className={s.catalog}>
      <h2>КАТАЛОГ</h2>
      <div className={s.box}>
       <CatalogItem imgUrl={catalog01} title='Мужская одежда' link={'/chapter/man'} />
       <CatalogItem imgUrl={catalog02} title='женская одежда'link={'/chapter/woman'}  />
       <CatalogItem imgUrl={catalog03} title='аксессуары' link={'/chapter/accessories'} />
       <CatalogItem imgUrl={catalog04} title='обувь' link={'/chapter/shoes'} />
       <CatalogItem imgUrl={catalog05} title='унисекс' link={'/chapter/unisex'} />
      </div>
    </div>
  )
}

export default Catalog