import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import s from './Footer.module.scss'

const Footer = () => {

  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false) 

  const firstClick = b => b ? setFirst(false) : setFirst(true)
  const secondClick = b => b ? setSecond(false) : setSecond(true)
  const thirdClick = b => b ? setThird(false) : setThird(true)

  return (
    <footer>
      <div className="container">
        <div className={s.box}>
          <div className={s.item}>
            <h3 onClick={()=> firstClick(first)}>Помощь и Информация</h3>
            <ul className={first ? s.res_show : s.res_hide}>
              <li> <Link> Помощь </Link> </li>
              <li> <Link> Отследить заказ </Link> </li>
              <li> <Link> доставка и возврат товара </Link> </li>
              <li><Link>карта сайта   </Link> </li>
            </ul>
          </div>
          <div className={s.item}>
            <h3 onClick={()=> secondClick(second)}>о компании ykl</h3>
            <ul className={second ? s.res_show : s.res_hide}>
              <li><Link> о нас  </Link> </li>
              <li><Link> карьера в ykl  </Link> </li>
              <li> <Link> корпоротивная ответственность </Link> </li>
              <li><Link> сайт инвестор  </Link> </li>
            </ul>
          </div>
          <div className={s.item}>
            <h3 onClick={()=> thirdClick(third)}>больше от  ykl</h3>
            <ul className={third ? s.res_show : s.res_hide}>
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