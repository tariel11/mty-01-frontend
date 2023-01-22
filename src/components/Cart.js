import React from 'react'
import { Link } from 'react-router-dom'

import s from './styles/Cart.module.scss'

const Cart = ({product, loading, error}) => { 

  return (
    <div className={s.cart}>
      <div className={s.img}>
        <img src="../img/22.png" alt="" />
      </div>
      <div className={s.info}>
        <h2 className={s.title}>
          <Link to={`/cart/`}>title</Link>
        </h2>
        <strong className={s.price}>$</strong>
        <button className={s.button}>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default Cart