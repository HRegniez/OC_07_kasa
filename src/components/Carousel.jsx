import {useState} from 'react'
import '../Style/components/carousel.css'
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'

function Carousel(props) {
  const pictures = props.pictures
  console.log(pictures.length)
  const [indexCurrent, setIndexCurrent] = useState(0)

  const forward = () => (
    setIndexCurrent((indexCurrent + 1) % pictures.length)
  )
  const backward = () => (
    setIndexCurrent((indexCurrent - 1 + pictures.length) % pictures.length)
  )

    const counter = () => (
      <span className='carousel_counter'>{`${indexCurrent + 1}/${pictures.length}`}</span>
    )

  return (
    <div className='carousel'>
      <img className='carousel_img' src={pictures[indexCurrent]} alt="" />
      
      <img src={arrowLeft} className={pictures.length <= 1 ? "hidden" : "carousel_arrow--left"} onClick={backward}/>
      <img src={arrowRight} className={pictures.length <= 1 ? "hidden" : "carousel_arrow--right"}  onClick={forward}/>
      {pictures.length > 1 ? counter() : "" }
    </div>
  )
}

export default Carousel
