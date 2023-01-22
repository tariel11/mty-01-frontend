import React from 'react'
import { Link } from 'react-router-dom'

import s from './styles/CatalogItem.module.scss'

const CatalogItem = ({imgUrl, title, link}) => {
  return (
       <div className={s.item}>
          <div className={s.img}>
            <img src={imgUrl} alt={title} />
          </div>
            <h3 className={s.title}>{title}</h3>
            <Link to={link} className={s.link}>Исследовать сейчас</Link>
        </div>
  )
}

export default CatalogItem