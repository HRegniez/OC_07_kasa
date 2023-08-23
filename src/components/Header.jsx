import React from 'react'
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import '../Style/components/header.css'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header_logo' src={Logo}/>
      </Link>
      <nav className='header_nav'>
          <Link className='header_link' to='/'>Accueil</Link>
          <Link className='header_link' to='/a-propos'>A Propos</Link>
      </nav>
    </header>
  )
}

export default Header

