import React from 'react'
import { Link } from 'react-router-dom'

import s from './styles/Cart.module.scss'

const Cart = ({product, loading, error}) => { 

  return (
    <div className={s.cart}>
      <div className={s.img}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={s.info}>
        <h2 className={s.title}>
          <Link to={`/cart/${product.id}`}>{product.title}</Link>
        </h2>
        <strong className={s.price}>{product.price}$</strong>
        <button className={s.button}>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default Cart