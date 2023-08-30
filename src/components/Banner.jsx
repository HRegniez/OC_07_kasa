
import '../Style/components/banner.css'

function Banner(props) {
  const bannerImg = props.image
  const bannerText = props.text

  return (
    <section className='main_banner'>
        <img  src={bannerImg} alt="Banner image" />
        <h1>
          {bannerText}
        </h1>
    </section>
  )
}

export default Banner
