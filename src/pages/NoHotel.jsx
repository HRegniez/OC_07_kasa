import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/pages/noHotel.css'
import errorImg from "../assets/404.svg"

function NoHotel() {
  return (
    <article className='no_hotel'>
        <img src={errorImg} alt="erreur 404" />
        <p>Oops! La page que vous demandez n'existe pas.</p>
        <Link className='no_hotel_link' to='/'>Retourner sur la page d'acceuil</Link>
    </article>
  )
}

export default NoHotel
