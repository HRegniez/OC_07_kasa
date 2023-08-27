import {useState} from 'react'
import arrow from '../assets/arrow.svg'

function HotelDescription(props) {
  const description = props.description

  const [toggle, updateToggle] = useState(false)

  function handleClick() {
    updateToggle(!toggle)
  }


  return (
    <article className='hotel_description'>
      <figure><p>Description</p><img src={arrow} onClick={handleClick} alt="bouton pour plus de détails" /></figure>
      <figcaption className={!toggle ? "hidden" : "hotel_description--caption"}>{description}</figcaption>
    </article>
  )
}

export default HotelDescription
