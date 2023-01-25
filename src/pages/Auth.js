import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import axios from '../utils/axios'
import { Store } from '../utils/Store'
import s from './styles/Auth.module.scss'

const Auth = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [gmail, setGmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if(isLogin){
        const { data } = await axios.post('/api/user/login', {
          gmail,
          password,
        });
        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate( '/');
      } else {
        const { data } = await axios.post('/api/user/registration', {
          name,
          fullName,
          phone,
          gmail,
          password,
        });
        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate( '/');
      }
    } catch (err) {
      console.log('errrorr');
      console.log(err)
    }
  };

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  }, [userInfo]);

  const isLogin = pathname === '/login';
  const isRegistration = pathname ==='/registration';

  const [privacy, setPrivacy] = useState(false)

  const clickPrivacy = b => b ? setPrivacy(false) : setPrivacy(true) 
  
  return (
    <div>
      <div className="container">
        <div className={s.authbox}>
            <h1><span onClick={()=> navigate('/login')} className={isRegistration ? s.span : ''}>Войти</span> <span onClick={()=> navigate('/registration')} className={isLogin ? s.span : ''}>Регистрация</span> </h1>
          <form onSubmit={submitHandler}>

            <input className={s.check} id='remember' type="checkbox" />
            <label htmlFor="remember">Запомнить меня</label>

          { isRegistration && <> 
              <input type="text" placeholder='ИМЯ' required value={name} onChange={e => setName(e.target.value)} />
              <input type="test" placeholder='ФАМИЛИЯ'  value={fullName} onChange={e => setFullName(e.target.value)} />
              <input type="number" placeholder='НОМЕР ТЕЛЕФОНА' required value={phone} onChange={e => setPhone(e.target.value)} />
            </>}

            <input type="gmail" placeholder='EMAIL ADRESS' required value={gmail} onChange={e => setGmail(e.target.value)} />
            <input type="password" placeholder='PASSWORD' required value={password} onChange={e => setPassword(e.target.value)} />

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

            <button type='submit'>Войти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth