import React from 'react'
import Ratings from './Ratings'
import HostDetails from './HostDetails'
import '../Style/components/hotelDetails.css'

function HotelHost(props) {
  const {rating, host} = props

  
  
  return (
    <div className='hotel_host'>
      <Ratings rating={rating}/>
      <HostDetails  host={host} />
      
    </div>
  )
}

export default HotelHost
