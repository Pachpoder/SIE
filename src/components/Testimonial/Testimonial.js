import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg';
import ts2 from '../../images/testimonial/img-2.jpg';
import ts3 from '../../images/testimonial/img-3.jpg';
import ts4 from '../../images/testimonial/img-3.jpg';
import ts5 from '../../images/testimonial/img-3.jpg';
import ts6 from '../../images/testimonial/img-3.jpg';

const images = [ts1, ts2, ts3, ts4, ts5, ts6];

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="wpo-gallery-section section-padding">
        <div className="container">
        <div className="wpo-section-title">
                            <span></span>
                            <h2>Galería Mercafarma</h2>
                        </div>
            <div className="wpo-gallery-wrap">
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div className="wpo-gallery-item" key={index}>
                            <img src={img} alt={`Gallery Image ${index + 1}`} className="wpo-gallery-img" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </section>
    );
}

export default Gallery;
