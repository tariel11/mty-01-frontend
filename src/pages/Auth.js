import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import s from './styles/Auth.module.css'

const Auth = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  const isLogin = pathname === '/login';
  const isRegistration = pathname ==='/registration';

  const [privacy, setPrivacy] = useState(false)

  const clickPrivacy = b => b ? setPrivacy(false) : setPrivacy(true) 
  
  return (
    <div>
      <div className="container">
        <div className={s.authbox}>
            <h1><span onClick={()=> navigate('/login')} className={isRegistration ? s.span : ''}>Войти</span> <span onClick={()=> navigate('/registration')} className={isLogin ? s.span : ''}>Регистрация</span> </h1>
          <form>

            <input className={s.check} id='remember' type="checkbox" />
            <label htmlFor="remember">Запомнить меня</label>

          { isRegistration && <> <input type="text" placeholder='ИМЯ' required/>
            <input type="test" placeholder='ФАМИЛИЯ' />
            <input type="number" placeholder='НОМЕР ТЕЛЕФОНА' required/> </>}

            <input type="gmail" placeholder='EMAIL ADRESS' required/>
            <input type="password" placeholder='PASSWORD' required/>

            { isLogin && <Link className={s.link}>Забыли пароль?</Link>}

            <div className={s.privacybox}>
              <div>
                <input className={s.check} id='privacy' type="checkbox" />
                <label htmlFor="privacy">Согласен</label>
              </div>

              <p onClick={()=> clickPrivacy(privacy)}>{privacy ? 'Скрыть' : 'Читать политику конфидицеальности'}</p>
              
            </div>
            {privacy && <p>
              1. Общие положения  Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Михайловым Иваном Сергеевичем (далее – Оператор). <br />
              1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну. <br />
              1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта
            </p>}

            <button>Войти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth