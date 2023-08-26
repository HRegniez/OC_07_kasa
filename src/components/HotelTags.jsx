import React from 'react'

function HotelTags(props) {
  const tags = props.tags
  console.log(tags)
  return (
    <div>
      {tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </div>
  )
}

export default HotelTags
