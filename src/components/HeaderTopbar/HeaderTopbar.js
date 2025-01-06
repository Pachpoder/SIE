import React from 'react'
import {Link}  from 'react-router-dom'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call-1"></i>(00) 0431 275 490</li>
                                <li><i className="fi flaticon-email-1"></i>support24@gmail.com</li>
                                <li><i className="fi flaticon-location"></i> Roberts Avenue, Chattanooga.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/about">Careers</Link></li>
                                <li><Link to="/blog">News & Media</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                            </ul>
                            <ul className="social">
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;