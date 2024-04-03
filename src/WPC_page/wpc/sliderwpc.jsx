
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { wpc_icon6, wpc_icon7, wpc_icon8 } from "../../assets";
export default function Slider() {
    return (
        <div className="slider-out">
            <div className="slider">
                <h2 className="slider__heading">
                    ADVANTAGES OF WPC AGAINST WOOD
                </h2>
                <div className="slider__content">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={false}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                        initialSlide={1} 
                    >
                        <SwiperSlide>
                            <div className="slider__box">
                                <div>
                                    <div className="icons__content-main">
                                        <div className="icons__content-img">
                                            <img src={wpc_icon6} alt="" />
                                        </div>
                                        <div className="icons__content-head">
                                            <p >FIRE-RETARDANT</p>
                                        </div>
                                        <div className="icons__content-body">
                                            <p >Unlike wood, it does not catches fire and can be installed in various spaces like kitchens and office cafeterias</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__box">
                                <div className="icons__content-main">
                                    <div className="icons__content-img">
                                        <img src={wpc_icon7} alt="" />
                                    </div>
                                    <div className="icons__content-head">
                                        <p >CARPENTER FRIENDLY</p>
                                    </div>
                                    <div className="icons__content-body">
                                        <p >Unlike wood, WPC is lighter and stronger, making handling easier. Also, like wood, it can be cut, screwed, engraved, drilled, and sawed through.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider__box">
                                <div className="icons__content-main">
                                    <div className="icons__content-img">
                                        <img src={wpc_icon8} alt="" />
                                    </div>
                                    <div className="icons__content-head">
                                        <p >NO SHRINKING</p>
                                    </div>
                                    <div className="icons__content-body">
                                        <p >No more door jams in the rainy season as it does not shrink by absorbing water or moisture</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>

    );
}