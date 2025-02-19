import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/Banner1Derecha.png';
import hero2 from '../../images/slider/banner2derecha.png';
import hero3 from '../../images/slider/banner3Derecha.png';
import hero4 from '../../images/slider/Banner4Derecha.png';
import izquierda1 from '../../images/cambio-banner-tren-bala.webp';
import izquierda2 from '../../images/Banner-2-imagen-izquierda.webp';
import izquierda3 from '../../images/Banner-3-imagen-izquierda.webp';
import izquierda4 from '../../images/Banner-4-imagen-izquierda.webp';

const Hero = () => {
    const sliderRef = useRef(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (sliderRef.current && !initialized) {
            // Forzar reinicio del autoplay sincronizado después de montaje
            sliderRef.current.slickPause();
            setTimeout(() => {
                sliderRef.current.slickPlay();
                setInitialized(true);
            }, 100); // Pequeño retraso para asegurar la sincronización inicial
        }
    }, [initialized]);

    const settings = {
        dots: false,
        arrows: true,
        speed: 500,          // Velocidad de transición de 1.5 segundos
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,      // Autoplay desactivado
        autoplaySpeed: 5000,  // 10 segundos entre cada cambio de slide
        fade: true,
        infinite: true,
        beforeChange: (current, next) => {
            if (!initialized) {
                sliderRef.current.slickPause();
                setTimeout(() => {
                    sliderRef.current.slickPlay();
                }, 5000); // Reinicio exacto para el primer cambio
            }
        }
    };

    return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                <Slider {...settings} ref={sliderRef}>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">

                                    <div className="slide-title-sub">
                                        <img src={izquierda1} alt="Izquierda 1" />
                                    </div>

                                    <div className="slider-pic">
                                        <img src={hero1} alt="Slide 1" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <img src={izquierda2}></img>
                                    </div>
                                    <div className="slider-pic">
                                        <img src={hero2} alt="Slide 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <img src={izquierda3}></img>
                                    </div>
                                    <div className="slider-pic">
                                        <img src={hero3} alt="Slide 3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <img src={izquierda4}></img>
                                    </div>
                                    <div className="slider-pic">
                                        <img src={hero4} alt="Slide 4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Hero;
