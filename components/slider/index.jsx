import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import Image from 'next/image'
import css from './styles.module.css'
import { FreeMode } from 'swiper'

export function Slider({ slides }) {
  return (
    <div className={css.container}>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 2 },
          800: { slidesPerView: 4 },
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        centeredSlides={true}
        modules={[FreeMode]}
      >
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide}>
              <div className={css.image}>
                <Image
                  src={slide}
                  alt="gallery"
                  placeholder="blur"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
