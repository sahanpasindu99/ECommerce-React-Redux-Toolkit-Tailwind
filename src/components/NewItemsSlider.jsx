import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard';

const NewItemsSlider = ({ products }) => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="w-full px-2 mb-8 " >
            <ProductCard product={product} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewItemsSlider;
