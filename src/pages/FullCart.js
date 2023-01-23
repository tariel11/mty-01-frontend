import React from 'react'
import { useState } from 'react'

import s from './styles/FullCart.module.css'

const FullCart = () => {
  // const options = [
  //   {value: "S (37-38)",},
  //   {value: "M (39-40)",},
  //   {value: "L (41-42)	",},
  //   {value: "XL (43-44)	",},
  //   {value: "XXL (45-46)	",},
  //   {value: "XXXL (47-48)",},
  // ]

  const [plus, setPlus] = useState(false)

  const clickCharacters = (plus) => {
    plus ? setPlus(false) : setPlus(true)
  }

  return (
    <div>
      <div className="container">
        <div className={s.fullcart}>
          <div className={s.img}> 
            <img src='../img/22.png' alt="" />
            <h4 className={s.title}>title</h4>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className={s.desc}>
            <p className={s.text}>
            Свитер — предмет вязаной одежды для верхней части тела без застёжек, с длинными рукавами. Свитер вяжется из толстой или средней толщины шерстяной или полушерстяной пряжи на спицах или крючком, реже на вязальных машинах. Возможен различный тип вязки, для ворота и манжет применяется «резинка» всех видов.
            </p>
            <h4 className={s.h4}>Подробнее</h4>
            <div className={s.characteristics} >
              <h3 className={s.h3} >Характеристики <span onClick={()=>clickCharacters(plus)}>{plus ? '-' : '+'}</span></h3>
              <div className={plus ? s.item_show : s.item_hide}><b>Ткань:</b><p>Верх - курточная ткань, подкладка - твил, утеплитель - слайтекс микро 200 г</p></div>
              <div className={plus ? s.item_show : s.item_hide}><b>Состав:</b><p>100% полиэстер</p></div>
              <div className={plus ? s.item_show : s.item_hide}><b>Уход:</b><p>Машинная стирка 40 °C. Предварительно вывернуть наизнанку и застегнуть молнии. Стирать в бережном режиме с использованием специальных моющих средств для мембранных тканей. Не отбеливать. Не сушить в сушке, в барабане, на батареях и других нагревательных приборах.</p></div>
              <div className={plus ? s.item_show : s.item_hide}><b>Производство:</b><p>Made by YKL.Company, Kyrdyzstan</p></div>
            </div>
            <strong className={s.price}>89$</strong>
          </div>
          <div className={s.btns} >
            <select className={s.select} name="selectedFruit">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
            <button className={s.btn}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullCart