import React from 'react'
import '../Style/components/hotelDetails.css'

function HotelTags(props) {
  const tags = props.tags
  return (
    <div  className="hotel_details--tags">
      {tags.map((tag) => (
        <span className="hotel_details--tag" key={tag}>{tag}</span>
      ))}
    </div>
  )
}

export default HotelTags
