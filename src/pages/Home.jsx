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
      {
        hotelData.map((hotel) => (
          <Card id={hotel.id} title={hotel.title} cover={hotel.cover} />
        ))
      }
    </main>
  );
}

export default Home;
