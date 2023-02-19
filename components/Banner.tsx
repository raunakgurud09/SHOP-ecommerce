import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

// import { Banner } from '@/types';
import styles from '@/styles/Banner.module.css'

// interface Props {
//   banners: { _id: string; name: string; imageURL?: string }[]
// }

const Banners = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    dotsClass: 'slick-dots dots',
  }

  return (
    <>
      <div
        className="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div className="gallery-cell">a</div>
        <div className="gallery-cell">b</div>
        <div className="gallery-cell">c</div>
        <div className="gallery-cell">d</div>
        <div className="gallery-cell">e</div>
      </div>
      {/* <Slider {...settings}>
        {banners.map((banner) => (
          <div className="" key={banner._id} role="banner">
            <Image
              layout="fill"
              src={banner.imageURL}
              className={styles.img}
              alt={banner.name}
            />
          </div>
        ))}
      </Slider> */}
    </>
  )
}

export default Banners
