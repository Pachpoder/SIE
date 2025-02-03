import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HamburgerMenuPopup = ({ isOpen, toggleMenu }) => {
    if (!isOpen) return null;

    const styles = {
        popupMenuCard: {
            width: '24rem',
            maxWidth: '90%',
            borderRadius: '16px',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
            overflow: 'hidden',
            animation: 'fadeInSlideIn 0.3s ease-in-out',
            border: 'none',
        },
        header: {
            backgroundColor: '#ab271f',
            color: '#fff',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '16px 16px 0 0',
            fontSize: '18px',
            fontWeight: 'bold',
        },
        closeButton: {
            fontSize: '20px',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
        },
        linkContainer: {
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
            textAlign: 'center',
        },
        link: {
            textDecoration: 'none',
            color: '#ab271f',
            fontWeight: '500',
            fontSize: '16px',
        },
        buttonPrimary: {
            backgroundColor: '#ab271f',
            color: '#fff',
            padding: '12px',
            borderRadius: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '16px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        },
    };

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
            onClick={toggleMenu}
        >
            <div
                style={styles.popupMenuCard}
                className="animate-popup"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div style={styles.header}>
                    <span>Menú</span>
                    <button style={styles.closeButton} onClick={toggleMenu}>&times;</button>
                </div>

                {/* Opciones */}
                <div className="p-4">
                    <div style={styles.linkContainer} className="hover-link-container">
                        <a href="https://tienda.mercafarma.com" style={styles.link} className="hover-link" target="_blank" rel="noopener noreferrer">
                            Tienda Online
                        </a>
                    </div>

                    <div style={styles.linkContainer} className="hover-link-container">
                        <a href="https://wrike.com" style={styles.link} className="hover-link" target="_blank" rel="noopener noreferrer">
                            Wrike
                        </a>
                    </div>

                    <div style={styles.linkContainer} className="hover-link-container">
                        <a href="https://edumercafarma.com" style={styles.link} className="hover-link" target="_blank" rel="noopener noreferrer">
                            Edumercafarma
                        </a>
                    </div>

                    {/* Botón de Login SIE */}
                    <div style={styles.buttonPrimary} className="hover-button-sie" onClick={() => window.location.href = 'https://sie.mercafarma.com/login'}>
                        Login SIE
                    </div>
                </div>
            </div>

            {/* Estilos en línea para animación y hover */}
            <style>
                {`
                    @keyframes fadeInSlideIn {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-popup {
                        animation: fadeInSlideIn 0.3s ease-in-out;
                    }

                    /* Hover para el botón */
                    .hover-button-sie:hover {
                        background-color: #920e10 !important;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                    }

                    /* Hover para los contenedores */
                    .hover-link-container:hover {
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                        transform: translateY(-4px);
                    }

                    /* Hover para los enlaces */
                    .hover-link:hover {
                        color: #0056b3 !important;
                    }
                `}
            </style>
        </div>
    );
};

export default HamburgerMenuPopup;
