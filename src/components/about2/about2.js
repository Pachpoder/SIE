import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about/2.jpg'
import shape1 from '../../images/about/shape-1.png'
import shape2 from '../../images/about/shape-2.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About2 = (props) => {
    return(
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <div className="inner-img">
                                    <img src={abimg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>Welcome To Consoel</h4>
                            <h2>We are trusted consulting company.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting’s
                                the industrey's standard dummy text ever since the 1500 when printed
                                galley of type and scrambled type specimen book.</p>
                            <div className="text-sub-wrap">
                                <div className="text-sub-item">
                                    <i className="fi flaticon-tax"></i>
                                    <h5>Perfect solution of
                                        business strategy.</h5>
                                </div>
                                <div className="text-sub-item">
                                    <i className="fi flaticon-investor"></i>
                                    <h5>Financial solution
                                        now in your hand</h5>
                                </div>
                            </div>
                            <Link onClick={ClickHandler} className="theme-btn" to="/service">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1"><img src={shape1} alt=""/></div>
            <div className="shape-2"><img src={shape2} alt=""/></div>
        </section>
    )
}

export default About2;