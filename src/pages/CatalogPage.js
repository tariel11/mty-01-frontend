import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'

import axios from '../axios'
import Cart from '../components/Cart'
import s from './styles/Chapter.module.css'

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
  const {title} = useParams() 
  
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/product", {params: {title}});
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [title]);


  return (
    <div>
      <div className="container">
        <div className={s.chapter}>
          <h1 className={s.h1}>{title}</h1>
          <div className={s.box}>
            { products.map(product => 
                <Cart
                  key={product.id}
                  product={product}
                  loading={loading}
                  error={error}
                />
              )}
            <Cart/>
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage