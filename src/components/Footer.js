import React from 'react'
import { Link } from 'react-router-dom'


import s from './styles/Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.box}>
          <div className={s.item}>
            <h3>Помощь и Информация</h3>
            <ul>
              <li> <Link> Помощь </Link> </li>
              <li> <Link> Отследить заказ </Link> </li>
              <li> <Link> доставка и возврат товара </Link> </li>
              <li><Link>карта сайта   </Link> </li>
            </ul>
          </div>
          <div className={s.item}>
            <h3>о компании ykl</h3>
            <ul>
              <li><Link> о нас  </Link> </li>
              <li><Link> карьера в ykl  </Link> </li>
              <li> <Link> корпоротивная ответственность </Link> </li>
              <li><Link> сайт инвестор  </Link> </li>
            </ul>
          </div>
          <div className={s.item}>
            <h3>больше от  ykl</h3>
            <ul>
              <li><Link>мобильное приложения от ykl   </Link> </li>
              <li><Link> торговая площадка ykl  </Link> </li>
              <li><Link>подарочные сертификаты   </Link> </li>
              <li><Link>черная пятница   </Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer