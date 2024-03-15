"use client"

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

import { motion, useInView } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  {
    src: '/assets/certifications/discover.jpg',
    alt: "Discover"
  },
  {
    src: '/assets/certifications/js1.jpg',
    alt: "JavaScript I"
  },
  {
    src: '/assets/certifications/js2.jpg',
    alt: "JavaScript II"
  },
  {
    src: '/assets/certifications/js3.jpg',
    alt: "Javascript III"
  },
  {
    src: '/assets/certifications/js5.jpg',
    alt: "JavaScript V"
  },
  {
    src: '/assets/certifications/ts.jpg',
    alt: "TypeScript"
  },
  {
    src: '/assets/certifications/react.jpg',
    alt: "React"
  },
  {
    src: '/assets/certifications/sass.jpg',
    alt: "Sass"
  },
  {
    src: '/assets/certifications/Gits.jpg',
    alt: "Git & Github"
  },
  {
    src: '/assets/certifications/nlwia.jpg',
    alt: "NLW - IA"
  },
  {
    src: '/assets/certifications/nlwnotes.jpg',
    alt: "NLW - Notes"
  },
]

const carouselVariants = {
  "onScreen": { opacity: 1, translateY: 0 },
  "offScreen": { opacity: 0, translateY: 80 }
}

export function CertificationsSection() {
  const [navigation, setNavigation] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    const updateNavigation = () => {
      setNavigation(window.innerWidth > 768)
    }

    window.addEventListener('resize', updateNavigation)

    updateNavigation()

    return () => {
      window.removeEventListener('resize', updateNavigation)
    }
    }, [])

  return (
    <section className='mb-24 mt-16 sm:mb-36'>
      <h2 className="py-2 text-center text-4xl sm:text-6xl font-bold mt-8 mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">Certifications</span>
      </h2>
      <motion.div
        ref={ref}
        className='h-full sm:mt-16'
        initial="offScreen"
        animate= { inView ? "onScreen" : "offScreen" }
        transition={{ duration: 1.5 }}
        variants={carouselVariants}
      >
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          rewind={true}
          loop={true}
          spaceBetween={40}
          slidesPerView={3}
          initialSlide={4}
          speed={800}
          navigation={navigation}
          effect="coverflow"
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 20,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              speed: 800,
              initialSlide: 6,
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
      </motion.div>
    </section>
  )
}
