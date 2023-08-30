import Logo from '../assets/logo.svg'
import {Link, NavLink} from 'react-router-dom'
import '../Style/components/header.css'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header_logo' src={Logo}/>
      </Link>
      <nav className='header_nav'>
          <NavLink className='header_link' to='/'>Accueil</NavLink>
          <NavLink className='header_link' to='/a-propos'>A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header

