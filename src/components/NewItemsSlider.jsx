import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard';

const NewItemsSlider = ({ products }) => {
  return (
    <div className="overflow-hidden"> {/* Ensure the container handles overflow */}
      <Swiper
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1, // Adjust to 1 for screen sizes below 320px
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 2, // Adjust to 1 for screen sizes below 320px
            spaceBetween: 100,
          },
          470: {
            slidesPerView: 3,
            spaceBetween: 85,
          },
          780: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          1180: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="w-full px-2 mb-8">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewItemsSlider;
