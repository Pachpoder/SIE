import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from '../../api/service'


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = () => {
    return (
        <section className="wpo-service-section-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Gracias Señor'} Title={'Cápsulas Mercafarma'} />
                <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        {Services.map((service, srv) => (
                            <div className="grid" key={srv}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-text">
                                        <div className="service-icon" style={iconContainerStyle}>
                                            {service.image ? (
                                                <img src={service.image} alt={service.sTitle} style={imageStyle} />
                                            ) : (
                                                <i className={`fi ${service.icon}`}></i>
                                            )}
                                        </div>
                                        <h2>{service.sTitle}</h2>
                                        <p>{service.description}</p>
                                        <a 
                                            href={service.videoUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={() => window.scrollTo(10, 0)}
                                        >
                                            Ver Cápsula
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

const iconContainerStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    borderRadius: '50%',
    backgroundColor: '#f5f5f5'
};

const imageStyle = {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
    borderRadius: '50%'
};

export default ServiceSectionS2;
