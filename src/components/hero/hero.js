import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/prueba-intranet-men.png'
import hero2 from '../../images/slider/prueba-intra.png'
// import hero2 from '../../images/slider/prueba-intra.png'
import hero3 from '../../images/slider/Hero-banner4.png'
import hero4 from '../../images/slider/tren-hero.png'


// ARREGALR ESTO EL CAMBIO DE VELOCIDAD NO FUNCIONA


const Hero = () => {

    const [settings, setSettings] = useState({
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
    });

    useEffect(() => {
      setSettings ((prev) => ({ ...prev, autoplaySpeed: 1000 }));

      const resetSpeed = setTimeout(() => { 
        setSettings((prev) => ({ ...prev, autoplaySpeed: 10000 }));
      }, 1000);
    
      return () => {
        clearTimeout(resetSpeed);
      }
    }, []);
    
    
    
    return (
        <section className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-6 col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-title-sub">
                                        <h5>Bienvenidos a:</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>MERCAFARMA</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Somos una familia líder en el mercado farmacéutico, comprometidos con la calidad, innovación y excelencia. Cada colaborador desempeña un papel fundamental en nuestra misión de mejorar la salud y ofrecer productos y servicios de alta calidad.</p>
                                    </div>
                                    {/* <div className="btns">
                                        <a
                                            href="https://www.mercafarma.com.gt/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="theme-btn"
                                        >
                                            www.mercafarma.com.gt
                                        </a>
                                    </div> */}
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
                                        <h5>Mercafarma</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Excelencia que Transforma</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Nuestra pasión por lo que hacemos nos une como equipo, impulsa la excelencia que transforma y nos motiva a alcanzar metas estratégicas que generan impacto y valor cada día.</p>
                                    </div>
                                    {/* <div className="btns">
                                        <Link to="/about" className="theme-btn">DIRIGIRSE A SIE</Link>
                                    </div> */}
                                    <div className="slider-pic">
                                        <img src={hero2} alt="" />
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
                                        <h5>Orgullosos de ser Mercafarma: </h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Innovación, liderazgo y compromiso</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Formamos parte de una empresa que reconoce y valora tu talento. En <b>MERCAFARMA</b>, la innovación, el liderazgo y el compromiso son pilares fundamentales que nos inspiran a superar desafíos, generar impacto positivo y alcanzar nuevas metas cada día.</p>
                                    </div>
                                    {/* <div className="btns">
                                        <Link to="/about" className="theme-btn">DIRIGIRSE A SIE</Link>
                                    </div> */}
                                    <div className="slider-pic">
                                        <img src={hero3} alt="" />
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
                                        <h5>Mercafarma</h5>
                                    </div>
                                    <div className="slide-title">
                                        <h2>El Motor Que Nos Impulsa</h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Súbete al tren de <b>MERCAFARMA</b> y seamos juntos la fuerza que transforma, innova y lidera el camino hacia un mañana más eficiente y extraordinario.</p>
                                    </div>
                                    {/* <div className="btns">
                                        <Link to="/about" className="theme-btn">DIRIGIRSE A SIE</Link>
                                    </div> */}
                                    <div className="slider-pic">
                                        <img src={hero4} alt="" />
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