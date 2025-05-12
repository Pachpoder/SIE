import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from '../../api/service';

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const iconContainerStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    borderRadius: '50%',
    backgroundColor: '#f5f5f5'
};

const imageStyle = {
    maxWidth: '80%',
    maxHeight: '80%',
    objectFit: 'contain',
    borderRadius: '50%'
};

const cardStyle = {
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#2c2c2c',
    color: 'white',
    borderRadius: '10px',
};

const cardContentStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
};

// 🔽 Función para convertir "Fecha: 12 de Mayo" en Date
const parseFecha = (fechaStr) => {
    const meses = {
        'Enero': 0, 'Febrero': 1, 'Marzo': 2, 'Abril': 3,
        'Mayo': 4, 'Junio': 5, 'Julio': 6, 'Agosto': 7,
        'Septiembre': 8, 'Octubre': 9, 'Noviembre': 10, 'Diciembre': 11
    };
    const match = fechaStr.match(/Fecha:\s*(\d{1,2})\s+de\s+(\w+)/i);
    if (!match) return new Date(0);
    const day = parseInt(match[1]);
    const month = meses[match[2]];
    return new Date(2025, month, day); // puedes ajustar el año si lo deseas dinámico
};

const ServiceSectionS2 = () => {
    // 🔽 Ordenar los servicios por fecha y luego por número de cápsula
    const serviciosOrdenados = [...Services].sort((a, b) => {
    const fechaA = parseFecha(a.des2);
    const fechaB = parseFecha(b.des2);

    if (fechaA.getTime() !== fechaB.getTime()) {
        return fechaB - fechaA; // ← CAMBIO AQUÍ: de más reciente a más antigua
    }

    const numeroCapsula = (titulo) => {
        const match = titulo.match(/Cápsula\s*(\d+)/i);
        return match ? parseInt(match[1]) : 0;
    };

    return numeroCapsula(b.sTitle) - numeroCapsula(a.sTitle); // también invertido por claridad
});


    return (
        <section className="wpo-service-section-s2 section-padding">
            <div className="container">
                <SectionTitle 
                    Title={'Contenido de Crecimiento Personal!'} 
                    subTitle={'Aquí encuentras las cápsulas de este mes, para que las veas cuando las necesites.'} 
                />
                <div className="row-grid wpo-service-slider-s2">
                    <Slider {...settings}>
                        {serviciosOrdenados.map((service, srv) => (
                            <div className="grid" key={srv}>
                                <div className="wpo-service-item" style={cardStyle}>
                                    <div className="wpo-service-text" style={cardContentStyle}>
                                        <div className="service-icon" style={iconContainerStyle}>
                                            {service.image ? (
                                                <img src={service.image} alt={service.sTitle} style={imageStyle} />
                                            ) : (
                                                <i className={`fi ${service.icon}`}></i>
                                            )}
                                        </div>
                                        <h2>{service.sTitle}</h2>
                                        <p>{service.description}</p>
                                        <p><small>{service.des2}</small></p>
                                        <a
                                            href={service.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => window.scrollTo(10, 0)}
                                        >
                                            Ver Cápsula
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;
