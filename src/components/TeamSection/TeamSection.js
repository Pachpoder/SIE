import React from 'react';
import Slider from 'react-slick';
import Team from '../../api/team';
import shape1 from '../../images/team/shape1.png';
import shape2 from '../../images/team/shape2.png';
import shape3 from '../../images/team/shape3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const TeamSection = (props) => {
    const sliderSettings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,  // Ocultar flechas de navegación
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className={`wpo-team-section section-padding ${props.tClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span></span>
                            <h2>Marcas</h2>
                        </div>
                    </div>
                </div>

                {/* Slider con los elementos */}
                <div className="wpo-team-wrap">
                    <Slider {...sliderSettings}>
                        {Team.map((team, index) => (
                            <div className="wpo-team-item" key={index}>
                                <div className="wpo-team-img">
                                    <img src={team.tImg} alt={team.name} />
                                    <div className="wpo-team-text">
                                        <span>{team.title}</span>
                                        <h2>{team.name}</h2>
                                        <div className="button">
                                            <a 
                                                href={team.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={ClickHandler}
                                            >
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Imágenes decorativas */}
            {/* <div className="shape-1"><img src={shape1} alt="" /></div>
            <div className="shape-2"><img src={shape2} alt="" /></div>
            <div className="shape-3"><img src={shape3} alt="" /></div> */}

            {/* Estilos personalizados para el slider */}
            <style>
                {`
                    .slick-slide {
                        display: flex;
                        justify-content: center;
                        padding: 10px;
                    }

                    .wpo-team-item {
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        border-radius: 12px;
                        overflow: hidden;
                        background-color: #fff;
                        transition: transform 0.3s ease;
                    }

                    .wpo-team-item:hover {
                        transform: scale(1.05);
                    }

                    .wpo-team-img img {
                        width: 100%;
                        border-bottom: 4px solid #ab271f;
                    }

                    .slick-dots {
                        bottom: -20px;
                    }

                    .slick-prev, .slick-next {
                        display: none;
                    }
                `}
            </style>
        </section>
    );
};

export default TeamSection;
