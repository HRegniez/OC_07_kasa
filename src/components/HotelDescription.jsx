import React from 'react'

function HotelDescription(props) {
  const description = props.description

  return (
    <article>
      <figure>Description</figure>
      <figcaption>{description}</figcaption>
    </article>
  )
}

export default HotelDescription
