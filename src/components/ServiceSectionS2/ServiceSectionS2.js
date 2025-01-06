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
                <SectionTitle subTitle={'Our Services'} Title={'All Consoel Solution'} />
                <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        {Services.map((service, srv) => (
                            <div className="grid" key={srv}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-text">
                                        <div className="service-icon">
                                            <i className={`fi ${service.icon}`}></i>
                                        </div>
                                        <h2>{service.sTitle}</h2>
                                        <p>{service.description}</p>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>Details</Link>
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

export default ServiceSectionS2;