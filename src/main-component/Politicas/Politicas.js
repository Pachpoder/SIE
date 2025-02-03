import React from 'react';
import Footer from '../../components/footer/Footer';


const Politicas = (props) => {
    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <h1 className="post-title">Políticas de Vestimenta</h1>
                                <p>
                                    Aquí puedes agregar el contenido completo de las políticas de vestimenta, siguiendo el estilo y formato existente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Politicas;
