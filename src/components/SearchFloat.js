import React from 'react'
import { Link } from 'react-router-dom'
import s from './styles/SearchFloat.module.scss'

const SearchFloat = ({setSearch}) => {
  return (
    <div className={s.wrap} onMouseLeave={()=>setSearch(false)}>
      <form >
        
        <input type="search" placeholder='Поиск'/>
        <button>search</button>
      </form>
      <div className={s.popular}>
        <p>Популярные поиски:</p>
        <ul>
          <li>
            <Link>Свитер</Link>
          </li>
          <li>
            <Link>Костюм</Link>
          </li>
        </ul>
      </div>
      <div className={s.categories}>
        <h4>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h4>
        <ul>
          <li>
            <Link>
              <img src="./img/22.png" alt="" />
              <p className={s.title}>Костюм</p>
              <p className={s.category}>Мужской</p>
            </Link>
          </li>
          <li>
            <Link>
              <img src="./img/22.png" alt="" />
              <p className={s.title}>Аксессуары</p>
              <p className={s.category}></p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SearchFloat