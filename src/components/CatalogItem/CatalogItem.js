import React from 'react'
import { Link } from 'react-router-dom'

import s from './CatalogItem.module.css'

const CatalogItem = ({imgUrl, title, link}) => { 
  return (
       <div className={s.item}>
          <div className={s.img}>
           <Link to={link}>
            <img src={imgUrl} alt={title} />
           </Link>
          </div>
            <h3 className={s.title}>{title}</h3>
            <Link to={link} className={s.link}>Исследовать сейчас</Link>
        </div>
  )
}

export default CatalogItem