import React from 'react'
import { Link } from 'react-router-dom'

import s from './styles/Sales.module.scss'

const Sales = () => {
  return (
    <div className={s.sales}>
      <Link>
        <img src="img/sales/sale-1.png" alt="sale-1" />
      </Link>
      <div className={s.sale}>
        <img src="img/sales/sale-2.png" alt="sale-1" />
        <div className={s.box}>
          <h2 className={s.title}>Best men’s clothes</h2>
          <p className={s.text}>Приобретай вместе с друзьми</p>
          <Link className={s.link}>Исследовать сейчас</Link>
        </div>
      </div>
    </div>
  )
}

export default Sales