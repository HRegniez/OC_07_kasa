import React from 'react'
import Ratings from './Ratings'
import HostDetails from './HostDetails'

function HotelHost(props) {
  const {rating, host} = props

  
  
  return (
    <div>
      <Ratings rating={rating}/>
      <HostDetails  host={host} />
      
    </div>
  )
}

export default HotelHost
