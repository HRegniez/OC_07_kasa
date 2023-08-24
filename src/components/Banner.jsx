import React from 'react'
import img1 from '../assets/BannerImg.jpg'
import img2 from '../assets/BannerImg2.jpg'
import '../Style/components/banner.css'

function Banner(props) {
  const bannerImg = props.type === 'home' ? img1 : img2

  return (
    <section className='main_banner'>
        <img  src={bannerImg} alt="Banner image" />
        {
          props.type === 'home' ? <h1>Chez vous, <br/>partout et ailleurs</h1> : null
        }
    </section>
  )
}

export default Banner
