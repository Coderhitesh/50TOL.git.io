import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './TopProduct.css'

import firstTop from './first-top.jpg'
import firstHover from './first-hover.jpg'

import SecondTop from './second-top.jpg'
import SecondHover from './second-hover.jpg'

import ThirdTop from './third-top.jpg'
import ThirdHover from './third-hover.jpg'

import forthTop from './forth-top.jpg'
import forthHover from './forth-hover.jpg'

import fifthTop from './fifth-top.jpg'
import fifthHover from './fifth-hover.jpg'

function TopProduct() {
    return (
        <section className='top-product-section'>
            <div className="top-product-container">
                <div className="heading">
                    <span>Top 10 Engagement Rings</span>
                    <a href="">VIEW ALL</a>
                </div>
                <div className="main-container">
                    {/* <div className="product-row">
                <div className="product-col">
                    <div className="img">
                        <img src={firstTop} alt="" />
                        <img src={firstHover} alt="" />
                    </div>
                    <div className="content">
                        <h3>KENSINGTON</h3>
                        <span>Rs. 85,000.00</span>
                    </div>
                </div>
                <div className="product-col">
                    <div className="img">
                        <img src={SecondTop} alt="" />
                        <img src={SecondHover} alt="" />
                    </div>
                    <div className="content">
                        <h3>KENSINGTON</h3>
                        <span>Rs. 85,000.00</span>
                    </div>
                </div>
                <div className="product-col">
                    <div className="img">
                        <img src={ThirdTop} alt="" />
                        <img src={ThirdHover} alt="" />
                    </div>
                    <div className="content">
                        <h3>KENSINGTON</h3>
                        <span>Rs. 85,000.00</span>
                    </div>
                </div>
                <div className="product-col">
                    <div className="img">
                        <img src={forthTop} alt="" />
                        <img src={forthHover} alt="" />
                    </div>
                    <div className="content">
                        <h3>KENSINGTON</h3>
                        <span>Rs. 85,000.00</span>
                    </div>
                </div>
                <div className="product-col">
                    <div className="img">
                        <img src={fifthTop} alt="" />
                        <img src={fifthHover} alt="" />
                    </div>
                    <div className="content">
                        <h3>KENSINGTON</h3>
                        <span>Rs. 85,000.00</span>
                    </div>
                </div>
            </div> */}

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper product-row"
                    >
                        <SwiperSlide className='product-col'>
                            <div className="img">
                                <img src={firstTop} alt="" />
                                <img src={firstHover} alt="" />
                            </div>
                            <div className="content">
                                <h3>KENSINGTON</h3>
                                <span>Rs. 85,000.00</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product-col'>
                            <div className="img">
                                <img src={SecondTop} alt="" />
                                <img src={SecondHover} alt="" />
                            </div>
                            <div className="content">
                                <h3>KENSINGTON</h3>
                                <span>Rs. 85,000.00</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product-col'>
                            <div className="img">
                                <img src={ThirdTop} alt="" />
                                <img src={ThirdHover} alt="" />
                            </div>
                            <div className="content">
                                <h3>KENSINGTON</h3>
                                <span>Rs. 85,000.00</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product-col'>
                            <div className="img">
                                <img src={forthTop} alt="" />
                                <img src={forthHover} alt="" />
                            </div>
                            <div className="content">
                                <h3>KENSINGTON</h3>
                                <span>Rs. 85,000.00</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product-col'>
                            <div className="img">
                                <img src={fifthTop} alt="" />
                                <img src={fifthHover} alt="" />
                            </div>
                            <div className="content">
                                <h3>KENSINGTON</h3>
                                <span>Rs. 85,000.00</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default TopProduct
