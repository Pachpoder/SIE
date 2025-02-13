import React from "react";
import shape from '../../images/ct-shape.png';

const ContactInfo = (props) => {
    return (
        <section className="contact-info-section section-padding">
            <div className="container">
                <div className="office-info">
                    <div className="row">
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="office-info-item" style={itemStyle}>
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-place"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <p>Paseo Cayala - Edificio R8, Blvr. Rafael Landivar, Cdad. de Guatemala.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="office-info-item active" style={itemStyle}>
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    
                                    <a href="https://wa.me/50248811026" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                       
                                        <p>Mercafarma</p>
                                    </a>
                                    <a href="https://wa.me/50248811026" target="_blank" rel="noopener noreferrer">
                                        <button style={buttonStyle}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c83a32'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ab271f'}
                                        >
                                            WhatsApp Corporativo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="office-info-item" style={itemStyle}>
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-email"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <p>recursoshumanos@
                                        grupomercafarma.com</p>
                                        <a href="https://wa.me/50230819160" target="_blank" rel="noopener noreferrer">
                                        <button style={buttonStyle}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c83a32'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ab271f'}
                                        >
                                            WhatsApp RRHH
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct-shape">
                <img src={shape} alt="shape" />
            </div>
        </section>
    );
}

const itemStyle = {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid rgba(255, 92, 0, 0.5)',
    borderRadius: '12px',
    backgroundColor: '#7a7a7a'
};

const buttonStyle = {
    backgroundColor: '#ab271f',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s ease'
};

export default ContactInfo;
