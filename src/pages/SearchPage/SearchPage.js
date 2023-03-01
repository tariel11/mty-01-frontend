import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';

import axios from '../../utils/axios'
import Cart from '../../components/Cart/Cart'
import s from './SearchPage.module.css'

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

const SearchPage = () => {
  const {catalog} = useParams() 
  
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
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
        <div className={s.searchpage}>
          <h1>ПОИСК ПО ВАШЕМУ ЗАПРОСУ - КОСТЬЮМ</h1>
          {error 
          ? <div>ОШИБКА</div>
          : <div className={s.box}>
            {!products && <div>Не найдено</div>}
          {products.map(product => 
              <Cart
                key={product.id}
                product={product}
                loading={loading}
                error={error}
              />
            )} 
          </div>}
        </div>
      </div>

    </div>
  )
}

export default SearchPage