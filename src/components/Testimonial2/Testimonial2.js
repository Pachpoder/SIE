import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle/SectionTitle';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has text ever since the 1500s, when an unknown printer took a galley of type and scrambled make survived not only five centuries, but also the leap into electronic typesetting.",
        Title: 'Cathi Falcon',
        Sub: "Founder",
    },
    {
        id: '01',
        tImg: ts2,
        Des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has text ever since the 1500s, when an unknown printer took a galley of type and scrambled make survived not only five centuries, but also the leap into electronic typesetting.",
        Title: 'Harry Abraham',
        Sub: "SCG First Company",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has text ever since the 1500s, when an unknown printer took a galley of type and scrambled make survived not only five centuries, but also the leap into electronic typesetting.",
        Title: 'Benjir Walton',
        Sub: "Merketer",
    }
]

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const Testimonial2 = () => {

    return (
        <section className="wpo-testimonial-section-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'CLIENT TESTIMONIAL'} Title={'Best Word Our Clients'} />
                <div className="wpo-testimonial-wrap">
                    <div className="icon"><i className="fi flaticon-left-quote"></i></div>
                    <div className="wpo-testimonial-items wpo-testimonial-slide">
                        <Slider {...settings}>
                            {
                                testimonial.map((tesmnl, tsm) => (
                                    <div className="wpo-testimonial-item" key={tsm}>
                                        <div className="wpo-testimonial-text">
                                            <p>{tesmnl.Des}</p>
                                            <div className="wpo-testimonial-text-btm">
                                                <span>{tesmnl.Sub}</span>
                                                <h3>{tesmnl.Title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="t-shape-1">
                        <svg width="152.000000pt" height="137.000000pt" viewBox="0 0 152.000000 137.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,137.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path
                                    d="M101 1288 c171 -466 515 -851 954 -1070 126 -63 240 -107 373 -142 l92 -25 0 660 0 659 -725 0 -724 0 30 -82z" />
                            </g>
                        </svg>
                    </div>
                    <div className="t-shape-2">
                        <svg width="186.000000pt" height="202.000000pt" viewBox="0 0 186.000000 202.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path
                                    d="M0 965 l0 -965 870 0 871 0 19 45 c67 157 56 324 -29 448 -87 127 -229 238 -648 507 -158 102 -337 220 -398 264 -238 170 -473 391 -609 574 -38 50 -71 92 -73 92 -1 0 -3 -434 -3 -965z" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;