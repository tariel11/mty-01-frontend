import React from 'react'
import { Link } from 'react-router-dom'

import sale1 from '../../img/sales/sale1.png'
import sale2 from '../../img/sales/sale2.png'
import s from './Sales.module.scss'

const Sales = () => {
  return (
    <div className={s.sales}>
      <Link>
        <img src={sale1} alt="sale-1" />
      </Link>
      <div className={s.sale}>
        <img src={sale2} alt="sale-1" />
        <div className={s.box}>
          <h2 className={s.title}>Best men’s <br /> clothes</h2>
          <p className={s.text}>Приобретай вместе с друзьми</p>
          <Link className={s.link}>Исследовать</Link>
        </div>
      </div>
    </div>
  )
}

export default Sales