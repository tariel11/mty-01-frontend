import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import { Store } from "../../utils/Store";
import s from './Cart.module.css'

const Cart = ({product}) => { 
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: { cartItems }, } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1; 
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div className={s.cart}>
      <div className={s.img}>
        <Link to={`/cart/${product.id}`}><img src={product.img} alt={product.title} /></Link>
      </div>
      <div className={s.info}>
        <h2 className={s.title}>
          <Link to={`/cart/${product.id}`}>{product.title}</Link>
        </h2>
        <strong className={s.price}>{product.price}$</strong>
        <button className={s.button} onClick={() => addToCartHandler(product)}>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default Cart