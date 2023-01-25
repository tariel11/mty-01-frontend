import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../utils/axios'
import s from './styles/FullCart.module.scss'
// const options = [
  //   {value: "S (37-38)",},
  //   {value: "M (39-40)",},
  //   {value: "L (41-42)	",},
  //   {value: "XL (43-44)	",},
  //   {value: "XXL (45-46)	",},
  //   {value: "XXXL (47-48)",},
  // ]
import belt from '../img/chapter/men/belt.jpeg'
import palto from '../img/chapter/men/palto.jpeg'

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

const FullCart = () => {
  const { id } = useParams() 
  
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {id: 1,img: belt, title: 'Tommy Hilfiger - мужской', price: 130, cloth: 'cloth', structure: 'structure', care: 'care', production: 'production',  },
    error: "",
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

  const [plus, setPlus] = useState(false)

  const clickCharacters = (plus) => {
    plus ? setPlus(false) : setPlus(true)
  }

  return (
    <div>
      <div className="container"> 
        <div className={s.fullcart}>

          <div className={s.img}> 
            <div className={s.colorDots}>
              <button><p></p></button>
              <button><p></p></button>
              <button><p></p></button>
              <button><p></p></button>
            </div>
            <img src={product.img} alt={product.title} />
            <h4 className={s.title}>{product.title}</h4>
            <div className={s.dots}>
              <button className={s.active}></button>
              <button></button>
              <button></button>
            </div>
          </div>

          <div className={s.desc}>
            <p className={s.text}>{product.description}</p>
            <h4 className={s.h4}>Подробнее</h4>
            <div className={s.characteristics} >
              <h3 className={s.h3} >Характеристики <span onClick={()=>clickCharacters(plus)}>{plus ? '-' : '+'}</span></h3>
              <div className={plus ? s.item_show : s.item_hide}><b>Ткань:</b><p>{product.cloth}</p></div>
              <div className={plus ? s.item_show : s.item_hide}><b>Состав:</b><p>{product.structure}</p></div>
              <div className={plus ? s.item_show : s.item_hide}><b>Уход:</b><p>{product.care}</p></div>
              <div className={plus ? s.item_show : s.item_hide}><b>Производство:</b><p>{product.production}</p></div>
            </div>
            <strong className={s.price}>{product.price} $</strong>
          </div>

          <div className={s.btns} >
            <select className={s.select} name="selectedFruit">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
            <button className={s.btn}>Добавить в корзину</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FullCart