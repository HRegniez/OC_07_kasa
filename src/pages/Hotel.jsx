import  { useParams } from 'react-router-dom'
import  { useHotelContext } from '../context/HotelProvider'
import Carousel from '../components/Carousel'
import HotelHost from '../components/HotelHost'
import HotelDescription from '../components/HotelDescription'
import HotelEquipments from '../components/HotelEquipments'
import HotelDetails from '../components/HotelDetails'
import PopDown from '../components/PopDown'
// import '../Style/pages/hotel.css'


function Hotel({}) {
  const { id } = useParams()
  const { getHotelById } = useHotelContext()
  
  const hotel = getHotelById(id)
  console.log(hotel)
  if (!hotel) {
    // Navigate to 404
  }
  
  
  return (
    <main>
      <Carousel pictures={hotel.pictures}/>
      <article className='flex'>
        <HotelDetails data={hotel}/>
        <HotelHost rating={hotel.rating} host={hotel.host}/>  
      </article>
      <aside className='flex'>
        <PopDown title="description" contents={[hotel.description]} />
        <PopDown title="équipements" contents={hotel.equipments} />
      </aside>
    </main>
  )
}

export default Hotel
