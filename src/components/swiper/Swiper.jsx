import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import s from '../main/Main.module.scss'


const Slider = ({activeItem, itemHandler}) => {
    return (
        <Swiper
            spaceBetween={2}
            slidesPerView={3}
            loop={true}
            // autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation]}
        >
            <div>
                <SwiperSlide>
                    <div className={` ${activeItem === 0 ? 'active' : ''}`} onClick={() => itemHandler(0)}>
                        MetaTrader 4
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${activeItem === 1 ? 'active' : ''}`} onClick={() => itemHandler(1)}>
                        MetaTrader 4 MultiTerminal
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={` ${activeItem === 2 ? 'active' : ''}`} onClick={() => itemHandler(2)}>
                        MetaTrader 4 Supreme Edition
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${activeItem === 3 ? 'active' : ''}`} onClick={() => itemHandler(3)}>
                        MetaTrader 4 WebTrader
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>

    );
};

export default Slider;

