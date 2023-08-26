import React from 'react'
import HotelTags from './HotelTags'

function HotelDetails(props) {
    const hotel = props.data
  return (
    <div>
        <h1>{hotel.title}</h1>
        <span>{hotel.location}</span>
        <HotelTags tags={hotel.tags}/>
    </div>
  )
}

export default HotelDetails
