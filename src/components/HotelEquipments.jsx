import {useState} from 'react'
import arrow from '../assets/arrow.svg'

function HotelEquipments(props) {
  const equipments = props.equipments

  const [toggle, updateToggle] = useState(false)

  function handleClick() {
    updateToggle(!toggle)
  }

  return (
    <article>
      <figure>Équipements<img src={arrow} onClick={handleClick} alt="bouton pour plus de détails" /></figure>
      <figcaption className={toggle ? "show" : "hiden"}>{equipments}</figcaption>
    </article>
  )
}

export default HotelEquipments
