import React from 'react'
import logo from '../assets/logoWhite.svg'
import '../Style/components/footer.css'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="Logo de Kasa" />
        <p>© 2020 Kasa. <br/>All rights reserved</p>
    </footer>
  )
}

export default Footer
