import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NewItemsSlider = ({ products }) => {
  return (
    <div className="overflow-hidden">
      <Swiper
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 2,
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
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="w-full px-2 mb-12">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))
        ) : 
        (
          Array(5).fill(0).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="w-[225px]  p-4 rounded-3xl shadow-lg  mb-12">
                <div className="relative">
                  {/* Image Skeleton */}
                  <Skeleton height={148} width="100%" borderRadius={12} />
                  {/* Favorite Button Skeleton */}
                  <Skeleton
                    circle={true}
                    height={32}
                    width={32}
                    style={{ position: 'absolute', top: '4px', right: '12px' }}
                  />
                </div>
                {/* Product Info Skeleton */}
                <div className="text-center">
                  <Skeleton width="50%" height={12} />
                  <Skeleton width="80%" height={20} style={{ marginTop: 4 }} />

                  {/* Rating Skeleton */}
                  <div className="flex items-center justify-center mt-4 mb-4 space-x-1">
                    {Array(5).fill(0).map((_, index) => (
                      <Skeleton key={index} circle={true} height={14} width={14} />
                    ))}
                    <Skeleton width={30} height={12} style={{ marginLeft: 8 }} />
                  </div>

                  {/* Sold Skeleton */}
                  {/* <Skeleton width={50} height={12} style={{ marginTop: 10 }} /> */}

                  {/* Cart & Price Skeleton */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Skeleton circle={true} height={40} width={40} />
                    <Skeleton width={80} height={40} borderRadius={20} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
          )
          }
      </Swiper>
    </div>
  );
};

export default NewItemsSlider;
