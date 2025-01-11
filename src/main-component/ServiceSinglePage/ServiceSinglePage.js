import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Footer2 from '../../components/footer2/Footer2';

const ServiceSinglePage = (props) => {
    const { id } = useParams()

    const textoParrafo = validateId(id);

    const serviceDetails = Services.find(item => item.Id === id)

    function validateId(id) {
        switch (parseInt(id, 10)) { // Asegúrate de convertir 'id' a número si es necesario
            case 1:
                return (
                    <>
                    <p>Desarrollar una eficiente gestión, producto, de la aplicación de principios y valores bíblicos y empresariales, que nos comprometen con pasión a desarrollar los productos de alta calidad que garanticen la satisfacción de nuestros clientes.</p>
                    <h3>Principios y Valores</h3>
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr', // Dividir en dos columnas
                        columnGap: '20px',             // Espaciado entre columnas
                        listStyleType: 'none',         // Quitar estilo de lista predeterminado
                        padding: '0',
                        margin: '0'
                    }}>
                        {[
                            'Temor de Dios',
                            'Integridad',
                            'Respeto',
                            'Liderazgo',
                            'Excelencia',
                            'Innovación',
                            'Confianza',
                            'Pasión por nuestros clientes'
                        ].map((item, index) => (
                            <li key={index} style={{
                                position: 'relative',
                                paddingLeft: '20px',  // Espaciado para el punto
                                marginBottom: '10px'  // Separación entre líneas
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',         // Punto al inicio
                                    content: '"•"',   // Punto personalizado
                                    color: '#000',    // Color del punto
                                    fontSize: '1.2em' // Tamaño del punto
                                }}>•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
                );
            case 2:
                return (
                    <>
                        <p>Ser una compañía Farmacéutica próspera para sus socios y colaboradores</p>
                    </>
                );
            case 3:
                return (
                    <>
                        <p>Aqui se colocan las descripciónes de los valores y principios</p>
                        <ul style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr', // Dividir en dos columnas
                        columnGap: '20px',             // Espaciado entre columnas
                        listStyleType: 'none',         // Quitar estilo de lista predeterminado
                        padding: '0',
                        margin: '0'
                    }}>
                        {[
                            'Temor de Dios',
                            'Integridad',
                            'Respeto',
                            'Liderazgo',
                            'Excelencia',
                            'Innovación',
                            'Confianza',
                            'Pasión por nuestros clientes'
                        ].map((item, index) => (
                            <li key={index} style={{
                                position: 'relative',
                                paddingLeft: '20px',  // Espaciado para el punto
                                marginBottom: '10px'  // Separación entre líneas
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',         // Punto al inicio
                                    content: '"•"',   // Punto personalizado
                                    color: '#000',    // Color del punto
                                    fontSize: '1.2em' // Tamaño del punto
                                }}>•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    </>
                );
            case 4:
                return (
                    <>
                        <p>Comercializar productos que cumplan con la normativa nacional e internacional vigente con el fin de proporcionar a nuestros consumidores productos de alta calidad y de uso seguro, satisfacemos los requisitos de nuestras partes interesadas, nos esforzamos y trabajamos constantemente en programas de formación que permitan la mejora continua de los procesos y controles, para garantizar y superar las expectativas de los clientes.</p>
                        <h3>Objetivos de calidad propuestos:</h3>
                        <ol>
                            <li>Comercializar productos.</li>
                            <li>Cumplir con la normativa nacional e internacional vigente.</li>
                            <li>Satisfacer los requisitos de las partes interesadas.</li>
                            <li>Cumplir con el programa(s) de formación.</li>
                            <li>Mejorar de forma continua los procesos y controles.</li>
                            <li>Garantizar y superar las expectativas de los clientes.</li>
         
                        </ol>
                    </>
                );
            default:
                return (
                    <>
                        <h3>Error</h3>
                        <p>No se encontró información para el ID proporcionado.</p>
                    </>
                );
        }
    }


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={'Project'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={serviceDetails.sImgS} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails.sTitle}</h3>
                                    </div>
                                    <p>{textoParrafo}</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={serviceDetails.ssImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={serviceDetails.ssImg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                        risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam.</p>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                        <li>Elit curabitur amet risus bibendum.</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0,3).map((service, srv) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                    <div className="wpo-service-item">
                                                        <i className={`fi ${service.icon}`} ></i>
                                                        <h2>{service.sTitle}</h2>
                                                        <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar/>
                    </div>
                </div>
            </div>
            <Footer2/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
