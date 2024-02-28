/** @jsxImportSource react */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { qwikify$ } from '@builder.io/qwik-react';


const proizvodi=[
    {id:1, naslov:'Uz svaku prepreku sa ovom legendom 1', podNaslov:"Na muci se poznaju junaci 1", image:'https://images.unsplash.com/photo-1631390573012-21806f8ff5bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:2, naslov:'Uz svaku prepreku sa ovom legendom 2', podNaslov:"Na muci se poznaju junaci 2", image:'https://images.unsplash.com/photo-1631390573050-4959fb722f1a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {id:3, naslov:'Uz svaku prepreku sa ovom legendom 3', podNaslov:"Na muci se poznaju junaci 3", image:'https://images.unsplash.com/photo-1631390573019-5b5deb1daf53?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
]

function ReactImageGalery() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {proizvodi.map((product, ind) => <SwiperSlide className='relative z-20'>
                    <div className='absolute z-50 top-[40%] left-0 px-2 min-w-[400px] '>
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="bg-gradient-to-r from-[#C1E1E3] via-[#A4D4AB] to-[#0D525A] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                                {product.naslov}
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white">
                                {product.podNaslov}
                            </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4 w-[80%] m-auto ">
                                <a className="block w-full rounded border border-[#0D525A] bg-[#0D525A] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    href="#"
                                >
                                    Kupi odmah
                                </a>

                                <a
                                    className="block w-full rounded border border-[#0D525A] px-12 py-3 text-sm font-medium text-white hover:bg-[#0D525A] focus:outline-none focus:ring active:bg-[#0D525A] sm:w-auto"
                                    href="#"
                                >
                                    Vidi jos
                                </a>
                            </div>
                        </div>
                    </div>
                    <img key={ind} src={product.image} className='object-cover h-[700px] brightness-50  '  width='1500px'  />

                </SwiperSlide>)}

            </Swiper>
        </>
    );
}

export const ImageGallery = qwikify$(ReactImageGalery);