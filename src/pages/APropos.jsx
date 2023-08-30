import Banner from '../components/Banner'
import LesPropos from '../components/LesPropos'
import bannerImg from '../assets/BannerImg2.jpg'

function APropos() {
  return (
    <main>
      <Banner image={bannerImg}/>
      <LesPropos />
    </main>
  )
}

export default APropos
