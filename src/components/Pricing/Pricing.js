import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";


const Pricing = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <SectionTitle subTitle={'Pricing'} Title={'Choose Your Pricing Plan'} />
                <div className="pricing-grids clearfix">
                    <div className="grid">
                        <div className="type">
                            <h5>Basic</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">$50</h3>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Strategy &amp; Research</li>
                                <li>Business &amp; Finance Analysing</li>
                                <li>SEO Optimization</li>
                                <li>Managment &amp; Marketing</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                            <Link to="/pricing" className="get-started">Get Started</Link>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>ULTRA</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">$68</h3>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Strategy &amp; Research</li>
                                <li>Business &amp; Finance Analysing</li>
                                <li>SEO Optimization</li>
                                <li>Managment &amp; Marketing</li>
                                <li>Website Design &amp; Development</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                            <Link to="/pricing" className="get-started">Get Started</Link>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>Pro</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">$75</h3>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Strategy &amp; Research</li>
                                <li>Business &amp; Finance Analysing</li>
                                <li>SEO Optimization</li>
                                <li>Managment &amp; Marketing</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                            <Link to="/pricing" className="get-started">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;