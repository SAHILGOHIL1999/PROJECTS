import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bg: "#e2f1e1",
      img: "https://cdn.prod.website-files.com/60beb4720184e9601ef46626/6134efefe6b6c103b05ce901_recreation-hero.jpg"
    },
    {
      id: 2,
      bg: "#fce4ec",
      img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
    }
  ];

  return (
    <div className="slider-container" style={{ margin: '5px 0  0  0' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        style={{ borderRadius: '15px', overflow: 'hidden' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ 
              backgroundColor: slide.bg, 
              height: '400px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <img src={slide.img} alt={slide.title} style={{ marginBottom: '15px' }} />
              <h2>{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

};

export default HeroSlider;