import {useState} from 'react'
import arrow from '../assets/arrow.svg'

function HotelEquipments(props) {
  const equipments = props.equipments

  const [toggle, updateToggle] = useState(false)

  function handleClick() {
    updateToggle(!toggle)
  }

  return (
    <article className='hotel_description'>
      <figure>Équipements<img src={arrow} onClick={handleClick} alt="bouton pour plus de détails" /></figure>
      <figcaption className={!toggle ? "hidden" : null}>{equipments}</figcaption>
    </article>
  )
}

export default HotelEquipments
