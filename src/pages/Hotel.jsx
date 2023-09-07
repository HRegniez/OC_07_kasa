import  { useParams } from 'react-router-dom'
import  { useHotelContext } from '../context/HotelProvider'
import Carousel from '../components/Carousel'
import HotelHost from '../components/HotelHost'

import HotelDetails from '../components/HotelDetails'
import PopDown from '../components/PopDown'
import NoHotel from '../pages/NoHotel'
// import '../Style/pages/hotel.css'


function Hotel({}) {
  const { id } = useParams()
  const { getHotelById } = useHotelContext()
  
  const hotel = getHotelById(id)
  console.log(hotel)
  if (!hotel) {
    return (
      <NoHotel />
    )
  }
  
  return (
    <main>
      <Carousel pictures={hotel.pictures}/>
      <article className='hotel_top'>
        <HotelDetails data={hotel}/>
        <HotelHost rating={hotel.rating} host={hotel.host}/>  
      </article>
      <aside className='hotel_bottom'>
        <PopDown title="description" contents={[hotel.description]} />
        <PopDown title="équipements" contents={hotel.equipments} />
      </aside>
    </main>
  )
}

export default Hotel
