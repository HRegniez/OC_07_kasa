import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/components/hotelPreview.css'

function Card(props) {
    const {id, title, cover} = props
  return (
    <Link className='preview' key={id} to={`hotel/${id}`} >
        <h2>{title}</h2>
        <img src={cover} />
    </Link>  
  )
}

export default Card
