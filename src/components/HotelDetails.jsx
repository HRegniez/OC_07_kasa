import React from 'react'
import HotelTags from './HotelTags'
import '../Style/components/hotelDetails.css'

function HotelDetails(props) {
    const hotel = props.data
  return (
    <div className='hotel_details'>
        <h1>{hotel.title}</h1>
        <span className='hotel_location'>{hotel.location}</span>
        <HotelTags tags={hotel.tags}/>
    </div>
  )
}

export default HotelDetails
