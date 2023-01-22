import React from 'react'
import { Link } from 'react-router-dom'

import s from './styles/BasketItem.module.scss'

const BasketItem = () => {
  return (
    <div className={s.item}>
    <div className={s.info}>
      <img src="../img/22.png" alt="" />
      <ul>
        <li>Свитер ( Женский )</li>
        <li>Размер: XL (43-44)</li>
        <li>Цвет: Белый</li>
        <li>Номер стиля: 3685017847</li>
      </ul>
    </div>
    <div className={s.amount}>
      <p>1</p>
     
    </div>
    <div className={s.price}>
      <strong>89$</strong>
      <Link className={s.change}> ИЗМЕНИТЬ</Link>
    </div>
    <div className={s.sum}>
    <strong>89$</strong>
      <Link className={s.change}>УДАЛИТЬ ТОВАР </Link>
    </div>
  </div>
  )
}

export default BasketItem