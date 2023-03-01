import React from 'react'
import { Link } from 'react-router-dom'

import s from './BasketItem.module.css'

const BasketItem = ({product, removeItemHandler, updateCartHandler}) => { 
  return (
    <div className={s.item}>

      <div className={s.img}>
        <img src={product.img} alt={product.title} />
      </div>
 
      <ul className={s.info}>
        <h3>{product.title}</h3>
        <li>Размер: XL (43-44)</li>
        <li>Цвет: Белый</li>
        <li>Номер стиля: 3685017847</li>
      </ul> 

      <div className={s.amount}>
        <h3>Количество</h3> 
        <span onClick={()=> product.quantity > 1 && updateCartHandler(product, product.quantity - 1)} className={s.counter}>-</span>
        <span className={s.amount}>{product.quantity}</span>
        <span onClick={()=> updateCartHandler(product, product.quantity + 1)} className={s.counter}>+</span>
      </div>

      <div className={s.price}>
        <h3>Цена</h3>
        <strong>{product.price} $</strong> 
      </div>

      <div className={s.sum}>
        <h3>Сумма</h3>
        <strong>{product.price * product.quantity} $</strong>
        <button className={s.change}> <Link to={`/cart/${product.id}`}>ИЗМЕНИТЬ</Link> </button>
        <button onClick={()=> removeItemHandler(product)}>УДАЛИТЬ</button>
      </div>
  </div>
  )
}

export default BasketItem