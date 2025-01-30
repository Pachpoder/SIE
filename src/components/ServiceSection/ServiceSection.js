import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import SectionTitle2 from "../SectionTitle2/SectionTitle2";
import Services from '../../api/service';
import sImg1 from '../../images/blog/shape.png';
import sImg2 from '../../images/blog/shape2.png';

const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
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
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="wpo-service-section section-padding section-bg">
            <div className="container">
                <SectionTitle2 subTitle={'Nuestro Compromiso con la experencia e innovación'} Title={'Los Principios Que Nos Impulsan'} />
                <div className="wpo-service-slider">
                    <Slider {...settings}>
                        {Services.map((service, srv) => (
                            <div className="service-item animate__animated animate__fadeInUp" key={srv}>
                                <div className="service-img">
                                    <img src={service.sImg} alt="" />
                                </div>
                                <div className="service-content">
                                    <h2>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>
                                            {service.sTitle}
                                        </Link>
                                    </h2>
                                    <p>{service.description}</p>
                                    <Link className="arrow-btn" onClick={ClickHandler} to={`/service-single/${service.Id}`}>
                                        <i className="fi flaticon-right-arrow-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="shape-1"><img src={sImg1} alt=""/></div>
            <div className="shape-2"><img src={sImg2} alt=""/></div>
        </section>
    );
}

export default ServiceSection;
