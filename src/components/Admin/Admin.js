import React, { useState } from 'react'

import axios from '../../utils/axios'
import s from './Admin.module.css'

const Admin = () => {
  const [title, setTitle] = useState('')
  const [chapter, setChapter] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState('')
  const [cloth, setCloth] = useState('')
  const [composition, setComposition] = useState('')
  const [care, setCare] = useState('')
  const [production, setProduction] = useState('') 

  const selectFile = e => {
    setFile(e.target.files[0])
  } 

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
       
      await axios.post('/api/addcart',
              {
                title,
                chapter,
                category,
                price,
                file,
                description,
                cloth,
                composition,
                care,
                production
              }, 
            );
    } catch (err) { 
      console.log(err)
    }
  };

  return (
    <div className="page_wrap">
      <div className="container">
        <div className={s.admin}>
        <h1>Добавить товар</h1> 

        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Название товара' required  value={title} onChange={e => setTitle(e.target.value)} />
          <input type="text" placeholder='Раздел' required  value={chapter} onChange={e => setChapter(e.target.value)} />
          <input type="text" placeholder='Категория' required  value={category} onChange={e => setCategory(e.target.value)} />
          <input type="number" placeholder='Цена' required  value={price} onChange={e => setPrice(e.target.value)} />
          <input type="text" placeholder='Описание' required  value={description} onChange={e => setDescription(e.target.value)} />
          <label htmlFor="img">Выберите картинку </label>
          <input id='img' className={s.img} type="file" required onChange={selectFile} />
          <input type="text" placeholder='Ткань' required  value={cloth} onChange={e => setCloth(e.target.value)} />
          <input type="text" placeholder='Состав' required  value={composition} onChange={e => setComposition(e.target.value)} />
          <input type="text" placeholder='Уход' required  value={care} onChange={e => setCare(e.target.value)} />
          <input type="text" placeholder='Производство' required value={production} onChange={e => setProduction(e.target.value)} /> 

          <button type={'s'} >Добавить</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Admin