import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SearchFloat from '../SearchFloat/SearchFloat'
import searchIcon from '../../../img/icons/search.svg'
import userIcon from '../../../img/icons/user.svg'
import basketIcon from '../../../img/icons/basket.svg'
import s from './MyIcons.module.css'

const MyIcons = () => {
  const [search, setSearch] = useState(false)

  return (
    <div className={s.funcs}>

        <Link onClick={()=>setSearch(!search)}>
          <img src={searchIcon} alt="searchIcon" />
        </Link>

        <Link to={'/login'}>
          <img src={userIcon} alt="userIcon" />
        </Link>

        <Link to={'/basket'}>
            <img src={basketIcon} alt="basketIcon" />
        </Link>
      
    { search && <SearchFloat setSearch={setSearch} search={search}/>}
    </div>
      
  )
}

export default MyIcons