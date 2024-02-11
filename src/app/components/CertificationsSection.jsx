"use client"

import Image from 'next/image'
import { images } from '../../../public/certificationsImages/certificationsImages';

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function CertificationsSection() {
  const swiperStyle = {
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }
  return (
    <section className='mb-24 mt-16 sm:mb-36'>
      <h2 className="py-2 text-center text-4xl sm:text-6xl font-bold mt-8 mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">Certifications</span>
      </h2>
      <div className='h-full sm:mt-16'>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          rewind={true}
          loop={true}
          spaceBetween={40}
          slidesPerView={3}
          speed={700}
          navigation={window.innerWidth > 767}
          effect="coverflow"
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 20,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              speed: 800,
            },
            767: {
              slidesPerView: 3,
            },
          }}
          >
          {
            images.map((image, index) => {
              return (
                <SwiperSlide key={index} className='rounded-xl overflow-hidden'>
                  <Image src={image.src} alt={image.alt} height={500} width={500} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
