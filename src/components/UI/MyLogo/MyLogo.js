import React from 'react'
import { Link } from 'react-router-dom'

import logoIcon from '../../../img/icons/logo.svg' 

const MyLogo = () => {
  return ( 
      <div  style={{margin: '0 auto'}}>
        <Link to={'/'}>
          <img src={logoIcon} alt="logo" />
        </Link>
      </div>
  )
}

export default MyLogo