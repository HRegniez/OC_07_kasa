import React from 'react'
import hotels from '../backend/data.json'
import { Link } from 'react-router-dom'
import '../Style/components/hotelPreview.css'

function HotelsPreview() {
  return (
    <section>
      {
        hotels.map((hotel) => (
            <Link className='preview' key={hotel.id} to={`hotel/${hotel.id}`}>
                <h2>{hotel.title}</h2>
                <img src={hotel.pictures[0]} />
            </Link>    
        ))
      }
    </section>
  )
}

export default HotelsPreview
