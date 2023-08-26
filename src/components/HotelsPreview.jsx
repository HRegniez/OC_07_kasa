import { Link } from 'react-router-dom'
import '../Style/components/hotelPreview.css'
import {useHotelContext} from '../context/HotelProvider'

function HotelsPreview() {
  const {hotelData} = useHotelContext()

  return (
    <section>
      {
        hotelData.map((hotel) => (
            <Link className='preview' key={hotel.id} to={`hotel/${hotel.id}`} >
                <h2>{hotel.title}</h2>
                <img src={hotel.pictures[0]} />
            </Link>    
        ))
      }
    </section>
  )
}

export default HotelsPreview
