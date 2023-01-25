import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import BasketFloat from './BasketFloat'
import SearchFloat from './SearchFloat'
import s from './styles/NavBar.module.scss'

import logoIcon from './../img/icons/logo.svg'
import searchIcon from './../img/icons/search.svg'
import userIcon from './../img/icons/user.svg'
import basketIcon from './../img/icons/basket.svg'

const NavBar = () => {
  const [basket, setBasket] = useState(false)
  const [search, setSearch] = useState(false)
  
  const handleMouseEnterBasket = (e) => {
    setBasket(true)
   }
  const handleMouseEnterSearch = (e) => {
    setSearch(true)
  } 

  return (
    <div className={s.nav_wrap}>
      <div className="container">
        <div className={s.navbar}>
          <div className={s.d_none}></div>
          <div className={s.burger} >
            <span></span> 
          </div>
          <div className={s.logo}>
            <Link to={'/'}>
              <img src={logoIcon} alt="" />
            </Link>
          </div>
          <nav>
            <ul className={s.navul}>
              <li className={s.navli}>
                <Link to={'/chapter/man'}>Мужская</Link>
              </li>
              <li>
                <Link to={'/chapter/woman'}>Женская</Link>
              </li>
              <li>
                <Link to={'/personal'}>Унисекс</Link>
              </li>
              <li>
                <Link to={'/chapter/shoes'}>Обувь</Link>
              </li>
              <li>
                <Link to={'/chapter/accessories'}>Аксессуары</Link>
              </li>
            </ul>
          </nav>
          <div className={s.funcs}>
              <div onClick={handleMouseEnterSearch} >
                <Link >
                  <img src={searchIcon} alt="" />
                </Link>
              </div>
              <div>
                <Link to={'/login'}>
                  <img src={userIcon} alt="" />
                </Link>
              </div>
              <div onMouseEnter={handleMouseEnterBasket} >
                <Link to={'/basket'}>
                   <img src={basketIcon} alt="" />
                </Link>
              </div>
            { basket && <BasketFloat setBasket={setBasket}/>}
            { search && <SearchFloat setSearch={setSearch}/>}
          </div>
          <div className={s.res_nav}>
            <ul>
              <li>
                <Link>Войти/ Зарегистрироваться</Link>
              </li>
              <li>
                <Link>Мужская</Link>
              </li>
              <li>
                <Link>Женская</Link>
              </li>
              <li>
                <Link>Унисекс</Link>
              </li>
              <li>
                <Link>Обувь</Link>
              </li>
              <li>
                <Link>Аксессуары</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar