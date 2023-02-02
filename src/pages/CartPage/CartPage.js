import React, { useContext, useEffect, useReducer } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from '../../utils/axios'
import { Store } from '../../utils/Store'
import belt from '../../img/chapter/men/belt.jpeg' 
import s from './CartPage.module.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const CartPage = () => {
  const { id } = useParams() 
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
  
  const [{ product }, dispatch] = useReducer(reducer, {
    product: {id: 1,img: belt, title: 'Tommy Hilfiger - мужской', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt vel laudantium accusantium corporis illo ullam modi iure eaque praesentium ipsa culpa error nisi fuga quo, temporibus commodi dignissimos. Vel dignissimos quo eos molestias quibusdam repellat assumenda quidem quas minus?', price: 130, cloth: 'cloth', structure: 'structure', care: 'care', production: 'production',  },
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/product/${id}`,);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [ id ]);

  const [desk, setDesk] = useState(false) 
  const [size, setSize] = useState(false) 

  return (
    <div className='page_wrap'>
      <div className="container"> 
        <div className={s.fullcart}>

          <div className={s.img}>  
            <img src={product.img} alt={product.title} />
            <h2 className={s.title}>{product.title}</h2> 
          </div>

          <div className={s.desc}>
            <p className={s.text}>{product.description}</p> 
            <div className={s.characteristics} >
              <h3 className={s.h3} onClick={()=>setDesk(!desk)}>Характеристики <span >{desk ? '-' : '+'}</span></h3>

              {desk && <ul>
                  <li><b>Ткань:</b><p>{product.cloth}</p></li>
                  <li><b>Состав:</b><p>{product.structure}</p></li>
                  <li><b>Уход:</b><p>{product.care}</p></li>
                  <li><b>Производство:</b><p>{product.production}</p></li>
                </ul>} 

            </div>
            <strong className={s.price}>{product.price} $</strong>
          </div>

          <div className={s.btns} >
            <div className={s.size} name="selectedFruit">
              <h3 onClick={()=>setSize(!size)}>Выбрать Размер</h3>
              {size && <ul>
                <li>S (37-38)</li>
                <li>M (39-40)</li>
                <li>L (41-42)</li>   
                <li>XL (43-44)</li>
                <li>XXL (45-46)</li>
                <li>XXXL (47-48)</li>
              </ul>}
            </div>
            <button className={s.btn} onClick={()=>addToCartHandler(product)}>Добавить в корзину</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartPage