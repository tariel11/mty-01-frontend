import React from 'react' 
import BasketItem from '../components/BasketItem'

import s from './styles/Basket.module.css'

const Basket = () => {
  return (
    <div className='page_wrap'>
      <div className="container">
        <div className={s.basket}>
          <div className={s.titles}>
            <h3>ВАШ БАГАЖНИК (122)</h3>
            <h3>КОЛИЧЕСТВО</h3>
            <h3>ЦЕНА</h3>
            <h3>ВСЯ СУММА</h3>
          </div>
          <div className={s.items}>
            <BasketItem/>
            
          </div>
          <div className={s.purchase}>
            <h4>Сумма за все товары - 419$</h4>
            <button>Купить</button>
            <p>ввести промокод</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket