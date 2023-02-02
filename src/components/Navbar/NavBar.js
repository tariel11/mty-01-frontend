import React, {useState} from 'react'
import { Link } from 'react-router-dom' 

import MyLogo from '../UI/MyLogo/MyLogo'
import MyIcons from '../UI/MyIcons/MyIcons'
import s from './NavBar.module.scss'

const NavBar = () => { 
  const [menu, setMenu] = useState(false)
  const links = [{title: 'Мужская', link: 'man'},{title: 'Женская', link: 'woman'},{title: 'Унисекс', link: 'unisex'},{title: 'Обувь', link: 'shoes'},{title: 'Аксессуары', link: 'accessories'}, ]
   
  return (
    <header>
      <div className="container">
        <nav className={s.navbar}>

          {/* MENU RESPONSIVE */}
          <div className={menu ? [s.menu__active + ' ' + s.menu] : s.menu}> 
            <ul>
              <li><Link to={'/login'} onClick={()=>setMenu(!menu)}>Войти / Зарегистрироваться</Link></li>
              {links.map(link => 
                  <li key={link.link}><Link to={'/chapter/' + link.link} onClick={()=>setMenu(!menu)} >{link.title}</Link></li>
                )}
            </ul>
          </div>

          {/* BURGER */}
          <div onClick={()=>setMenu(!menu)} className={menu ? [s.burger + ' ' + s.burger__active] : s.burger} >
            <span></span> 
            <span></span> 
            <span></span> 
          </div>

          {/* LOGO */}
          <MyLogo/>

          {/* NAV */} 
          <ul className={s.navul}>
            {links.map(link => 
              <li key={link.link}><Link to={'/chapter/' + link.link}>{link.title}</Link></li>
            )}
          </ul>

          {/* ICONS */}
          <MyIcons/>

        </nav>
      </div>
    </header>
  )
}

export default NavBar