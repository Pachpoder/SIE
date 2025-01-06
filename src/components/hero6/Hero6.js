import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/3.png'
import shape1 from '../../images/slider/shape-6.png'
import shape2 from '../../images/slider/shape-7.png'
import Fade from 'react-reveal/Fade';

const Hero6 = () => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="hero-content">
                            <div className="slide-title-sub">
                                <h5>Trusted Business Partner.</h5>
                            </div>
                            <div className="slide-title">
                                <h2>Ready For Your Financial <b><span>Problem</span> Solution.</b></h2>
                            </div>
                            <div className="slide-text">
                                <p>It was popularised in the 1960s with the release sheets.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="btns">
                                <Link to="/about" className="theme-btn">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fade right>
                <div className="consult-pic">
                    <img src={hero1} alt="" />
                </div>
            </Fade>
            <div className="hero-line-shape-1"><img src={shape1} alt="" /></div>
            <div className="hero-line-shape-2"><img src={shape2} alt="" /></div>
        </section>
    )
}

export default Hero6;