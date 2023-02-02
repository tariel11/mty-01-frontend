import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

import s from './SearchFloat.module.scss'

const SearchFloat = ({search, setSearch}) => {
  const navigate = useNavigate()

  const [text, setText] = useState('')

  const handleSearch = (e) => {
    e.stopPropagation()
    navigate(`/search/${text}`)
  }

  return (
    <div className={s.wrap} onClick={()=>setSearch(!search)}>
      <form onSubmit={handleSearch} onClick={e => e.stopPropagation()}>
        <input type="search" placeholder='Поиск' value={text} onChange={e => setText(e.target.value)} />
        <button type='submit' className={s.btn}>Найти</button>
      </form>  
    </div>
  )
}

export default SearchFloat