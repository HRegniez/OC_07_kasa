import Banner from '../components/Banner'
import Card from '../components/Card'

// Charge les données du JSON
import {useHotelContext} from '../context/HotelProvider'

import bannerImg from '../assets/BannerImg.jpg'

const bannerText = "Chez vous, partout et ailleurs"

function Home() {
  const {hotelData} = useHotelContext()
  
  return (
    <main>
      <Banner image={bannerImg} text={bannerText}/>
      <div className='preview_contain'>
        {
          hotelData.map((hotel) => (
            <Card id={hotel.id} title={hotel.title} cover={hotel.cover} />
          ))
        }
      </div>
      
    </main>
  );
}

export default Home;
