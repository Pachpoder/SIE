import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import SectionTitle2 from "../SectionTitle2/SectionTitle2";
import s1 from '../../images/project/shape-2.png'
import s2 from '../../images/project/shape-3.png'

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
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
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        }
    ]
};


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection3 = (props) => {
    return (
        <section className={`wpo-project-section-s3 section-padding ${props.pClass}`}>
            <div className="container">
                <SectionTitle2 subTitle={'OUR PORTFOLIO'} Title={'Successfull Work of Consoel'} />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12 sortable-project">
                        <div className="wpo-project-container project-slider-s3">
                            <Slider {...settings}>
                                {Projects.slice(9, 13).map((project, prj) => (
                                    <div className="grid" key={prj}>
                                        <div className="wpo-project-item">
                                            <div className="wpo-project-img">
                                                <img src={project.pImg} alt="project" className="img img-responsive" />
                                            </div>
                                            <div className="wpo-project-text">
                                                <h3><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}>{project.title}</Link></h3>
                                                <span>{project.subTitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-shape-1"><img src={s1} alt=""/></div>
            <div className="p-shape-2"><img src={s2} alt=""/></div>
        </section>
    );
}

export default ProjectSection3;