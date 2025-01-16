import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/mancha.png'
import hero2 from '../../images/slider/mancha.png'

const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    fade: true
};

const Hero = () => {
    return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title">
                                        <h2>Mercafarma</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Somos una compañía farmacéutica líder en Guatemala, especializada en representar, distribuir y mercadear productos de laboratorios internacionales, garantizando calidad y excelencia en el sector salud.</p>
                                    </div>
                                    <div className="btns">
                                        <a
                                            href="https://www.mercafarma.com.gt/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="theme-btn"
                                        >
                                            DIRIGIRSE A MERCAFARMA
                                        </a>
                                    </div>
                                    <div className="slider-pic">
                                        <img src={hero1} alt="" />
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
                                        <h5>SIE</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Sistema de Información Ejecutiva</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p><b>Centralizar</b> la información y <b>facilite</b> la gestión de los procesos, promueva la <b>interacción</b> activa y personalizada entre los empleados, garantizando un entorno seguro y profesional que incremente la productividad de la organizacional.</p>
                                    </div>
                                    <div className="btns">
                                        <Link to="/about" className="theme-btn">DIRIGIRSE A SIE</Link>
                                    </div>
                                    <div className="slider-pic">
                                        <img src={hero2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Hero;