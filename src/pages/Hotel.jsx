import  { useParams } from 'react-router-dom'
import  { useHotelContext } from '../context/HotelProvider'
import Carousel from '../components/Carousel'
import HotelHost from '../components/HotelHost'
import HotelDescription from '../components/HotelDescription'
import HotelEquipments from '../components/HotelEquipments'
import HotelDetails from '../components/HotelDetails'


function Hotel({}) {
  const { id } = useParams()
  const { getHotelById } = useHotelContext()
  
  const hotel = getHotelById(id)
  console.log(hotel)
  if (!hotel) {
    return <div>loader ?</div>
  }
  
  
  return (
    <main>
      <Carousel pictures={hotel.pictures}/>
      <article>
        <HotelDetails data={hotel}/>
        <HotelHost rating={hotel.rating} host={hotel.host}/>  
      </article>
      <aside>
        <HotelDescription description={hotel.description} />
        <HotelEquipments equipments={hotel.equipments} />  
      </aside>
    </main>
  )
}

export default Hotel
