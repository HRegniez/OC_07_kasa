import React from 'react'
import img from '../assets/BannerImg.jpg'
import '../Style/components/banner.css'

function Banner() {
  return (
    <section className='main_banner'>
        <img  src={img} alt="Banner image" />
        <p>Chez vous, partout et ailleur</p>
    </section>
  )
}

export default Banner
