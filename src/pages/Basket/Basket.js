import React, { useContext } from 'react' 
import { Link } from 'react-router-dom';

import BasketItem from '../../components/BasketItem/BasketItem'
import { Store } from '../../utils/Store';
import s from './Basket.module.scss'

const Basket = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: {cartItems}} = state; 

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const updateCartHandler = async (item, quantity) => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div className='page_wrap'>
      <div className="container">
       {cartItems.length < 1 

       ? <div className={s.empty}>
          <h1>Корзина пусто</h1> 
          <Link to={'/'} className={s.link}>Перейти к покупкам</Link>
        </div>
        
       : <div className={s.basket}> 
          <h3 className={s.h3}>ВАШ БАГАЖНИК</h3> 

          <div className={s.items}>
            {cartItems.map(item =>  
              <BasketItem 
                key={item.title}
                product={item}
                removeItemHandler={removeItemHandler}
                updateCartHandler={updateCartHandler}
              />
              )}            
          </div>

          <div className={s.purchase}>
            <h4>Сумма за все товары -  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} $</h4>
            <button>Купить</button>
            <p>ввести промокод</p>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Basket