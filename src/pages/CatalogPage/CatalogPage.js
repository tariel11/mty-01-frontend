import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'

import Cart from '../../components/Cart/Cart'
import axios from '../../utils/axios'
import belt from './../../img/chapter/men/belt.jpeg' 
import s from './CatalogPage.module.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const CatalogPage = () => {
  const {catalog} = useParams() 
  
  const [{ loading, error, products }, dispatch] = useReducer(reducer, { 
    products: [{id: 1, title: 'title', img: belt, price: 20}],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/catgory/product/${catalog}`,);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [catalog]);

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className={s.catalog}>
          <h1 className={s.h1}>{catalog}</h1>
          <div className={s.box}>
            {products.map(product => 
                <Cart
                  key={product.id}
                  product={product}
                  loading={loading}
                  error={error}
                />
              )} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage