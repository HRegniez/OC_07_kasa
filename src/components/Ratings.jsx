import React from 'react'
import starActive from '../assets/star-active.svg'
import starInactive from '../assets/star-inactive.svg'
import '../Style/components/hotelDetails.css'

function Ratings(props) {
    const rating = props.rating

    function setRatings() {
        const stars = []
        for(let i=1; i<=5; i++) {
            stars.push(
              <img key={i} src={i <= rating ? starActive : starInactive} alt={i <= rating ? 'Active Star' : 'Inactive Star'} />
            )
          }
        return stars
      }

  return (
    <div>
      {setRatings()}
    </div>
  )
}

export default Ratings
