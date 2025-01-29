import React from 'react'
import { Link } from 'react-router-dom'
import abimg2 from '../../images/about/4.jpg'
import shape1 from '../../images/ab-shape-1.png'
import shape2 from '../../images/ab-shape-2.png'
import presentacion from '../../images/mercafarma.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About = (props) => {
    return (
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={presentacion} alt="" />
                                {/* <div className="wpo-ab-shape-1"><img src={shape1} alt="" /></div>
                                <div className="wpo-ab-shape-2"><img src={shape2} alt="" /></div> */}
                                <div className="wpo-about-exprience">
                                    <h3>Fundada en 2005</h3>
                                </div>
                                <div className="wpo-ab-img-2">
                                    <img src={abimg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h2><b>MERCAFARMA</b>
                            </h2>
                            
                            <h4>Soluciones Farmacéuticas de Clase Mundial</h4>
                            <hr />
                            
                            <p>MERCAFARMA, fundada en 2005, es una compañía farmacéutica guatemalteca líder en la representación, distribución y comercialización de productos de laboratorios internacionales.</p>
                            <p>Respaldados por innovación, liderazgo y principios sólidos, transformamos el mercado con excelencia y un firme compromiso con la salud. Nuestra visión estratégica nos impulsa a desarrollar soluciones de alto impacto, garantizando calidad y confianza en cada producto.</p>
                            <p>Como familia comprometida, cada colaborador desempeña un papel clave en la evolución del sector, redefiniendo estándares y generando valor sostenible para el futuro.</p>
                         
                            {/* <Link onClick={ClickHandler} className="theme-btn" to="/about">Más sobre Mercafarma</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;