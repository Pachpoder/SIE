import React from 'react'
import { Link } from 'react-router-dom'
import abimg2 from '../../images/about/4.jpg'
import shape1 from '../../images/ab-shape-1.png'
import shape2 from '../../images/ab-shape-2.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About = (props) => {
    return(
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={props.abimg} alt=""/>
                                <div className="wpo-ab-shape-1"><img src={shape1} alt=""/></div>
                                <div className="wpo-ab-shape-2"><img src={shape2} alt=""/></div>
                                <div className="wpo-about-exprience">
                                    <h3>Fundada en 2005</h3>
                                </div>
                                <div className="wpo-ab-img-2">
                                    <img src={abimg2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>Bienvenido/a Mercafarma </h4>
                            <h2><b>¿Qué es Mercafarma? </b>
                            </h2>
                            <p>Mercafarma es una compañía farmacéutica guatemalteca fundada en 2005, especializada en representar, distribuir y mercadear productos de laboratorios internacionales. Con una sólida trayectoria respaldada por socios con experiencia en compañías transnacionales, Mercafarma combina principios y valores bíblicos con una gestión eficiente para ofrecer productos farmacéuticos de alta calidad.
                            </p>
                            <p>Nuestro propósito es satisfacer las necesidades de nuestros clientes mientras buscamos la prosperidad de nuestros socios y colaboradores, siempre guiados por nuestros principios y nuestra fe.</p>
                            <Link onClick={ClickHandler} className="theme-btn" to="/about">Más sobre Mercafarma</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;