import React from 'react'
import { Link } from 'react-router-dom'
import fImg1 from '../../images/features/img-1.jpg'
import fImg2 from '../../images/features/img-2.jpg'

const Features = (props) => {
    return (
        <section className="wpo-features-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-img">
                                <img src={fImg1} alt=""/>
                            </div>
                            <div className="wpo-features-text">
                                <h4><Link to="/service-single/1">Yearly Calculation <i
                                            className="fi flaticon-long-arrow-pointing-to-the-right"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-img">
                                <img src={fImg2} alt=""/>
                            </div>
                            <div className="wpo-features-text">
                                <h4><Link to="/service-single/1">Financing Business <i
                                            className="fi flaticon-long-arrow-pointing-to-the-right"></i></Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;