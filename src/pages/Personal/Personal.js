import React, { useContext, useState } from 'react' 
import { Link } from 'react-router-dom'

import { Store } from '../../utils/Store'
import BasketItem from '../../components/BasketItem/BasketItem'
import Admin from '../../components/Admin/Admin'
import avatar from '../../img/personal/avatar.svg'
import s from './Personal.module.css'

const Personal = () => {
  const { state } = useContext(Store);
  const { userInfo} = state;
  
  const [ layout, setLayout ] = useState('history')

  const stateHandler = layout => {
    layout === 'history' ? setLayout('history') 
    :  layout === 'data' ? setLayout('data') 
    :  layout === 'help' ? setLayout('help') 
    :  layout === 'logout' ? setLayout('logout') 
    : setLayout('')  
  }
  
  if(userInfo){
    if(userInfo.gmail === 'admin@admin.com'){
      return <Admin/>
    }
  }

  return (
    <div className='page_wrap'>
      <div className="container">
        {!userInfo 

        ? <div className={s.login}>
            <h1>Вы еще не вошли в свой аккаунт</h1>
            <Link to={'/login'}>Войти / Регистрироваться</Link>
          </div> 

        : <div className={s.personal}>

          <div className={s.window}>
            <img src={avatar} alt="avatar" />
            <h2>{userInfo.name}</h2>
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
              <h1>ИСТОРИЯ ПОКУПОК ( 122)</h1>
              <div className={s.history_box}> 
                <BasketItem/>
              </div>
            </div>}

            {layout === 'data' &&  <div className={s.data}>
              <h1>Здесь вы можете посмотреть свои данные и изменить пароль</h1>
              <ul>
                <li>Имя: {userInfo.name} </li>
                <li>Фамилия: {userInfo.fullName} </li>
                <li>Номер телефона: {userInfo.phone} </li>
                <li>Gmail: {userInfo.gmail} </li>
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
          </div>}
      </div>
    </div>
  )
}

export default Personal