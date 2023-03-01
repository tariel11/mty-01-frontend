import React from 'react'
import { Link } from 'react-router-dom'

import s from './BasketFloat.module.css'

const Item = () => {
  return (
    <div className={s.item}>
    <img src="../img/22.png" alt="" />
    <div className={s.info}>
      <p>Костюм Черный ( Мужской )</p>
      <div className={s.amount}>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <p>110$</p>
    </div>
  </div>
  )
}

const BasketFloat = ({setBasket}) => {
  return (
    <div className={s.wrap}>
      <h2><span>ВАШ БАГАЖНИК</span><span onClick={()=>setBasket(false)}>X</span></h2>
      <div className={s.items}>
       <Item/>
       <Item/>
       <Item/>
      </div>
      <div className={s.outcome}>
        <p>Итог</p>
        <p className={s.totalsum}>110</p>
        <Link to={'/basket'}>ПОСМОТРЕТЬ</Link>
      </div>
    </div>
  )
}

export default BasketFloat