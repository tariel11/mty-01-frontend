import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Store } from '../utils/Store'
import s from './styles/Personal.module.scss'

import bg from '../img/personal/bg.jpeg'
import avatar from '../img/personal/avatar.svg'
import BasketItem from '../components/BasketItem'

const Personal = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: {cartItems},} = state;

  console.log(state);
  
  const [ layout, setLayout ] = useState('history')

  const stateHandler = layout => {
    layout === 'history' ? setLayout('history') 
    :  layout === 'data' ? setLayout('data') 
    :  layout === 'help' ? setLayout('help') 
    :  layout === 'logout' ? setLayout('logout') 
    : setLayout('')  
  }

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className={s.personal}>
          <div className={s.window}>
            <img src={avatar} alt="avatar" />
            <h2>h2</h2>
          </div>
          <ul className={s.ul}>
            <li onClick={()=>stateHandler('history')}>История покупки</li>
            <li onClick={()=>stateHandler('data')}>Мои данные</li>
            <li onClick={()=>stateHandler('help')}>Нужна помощь</li>
            <li onClick={()=>stateHandler('logout')}>Выйти</li>
          </ul>
          <div className={s.content}>
            {layout === 'history' && 
            
            <div className={s.history}>
              <h1> <strong>ИСТОРИЯ ПОКУПОК ( 122)</strong> <p>КОЛИЧЕСТВО</p> <p>ЦЕНА</p> <p>ВСЯ СУММА</p> </h1>
              <div className={s.history_box}>
                <BasketItem/>
              </div>
            </div>}

            {layout === 'data' &&  <div className={s.data}>
              <h1>Здесь вы можете посмотреть свои данные и изменить пароль</h1>
              <ul>
                <li>Имя:</li>
                <li>Фамилия:</li>
                <li>Номер телефона:</li>
                <li>Gmail:</li>
              </ul>
            </div>}

            {layout === 'help' && <div className={s.help}>
              <h1>Пожалуйста, опишите свою проблему, или свяжитесь с нами</h1>
              <form> 
                <textarea rows="15" cols="50" placeholder='Здравствуйте, я пишу по поводу...'>
                </textarea>
                <button>ОТПРАВИТЬ</button>
              </form>
            </div> }
            
            {layout === 'logout' && <div className={s.logout}>
              <h1>ВЫ действительно хотите <br /> выйти из аккаунта?</h1>
              <button>да, выйти</button>
            </div> }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal