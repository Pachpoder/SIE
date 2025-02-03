import React, { useState } from 'react';
import { Link } from 'react-scroll';  // Importa react-scroll para navegación suave
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import HamburgerMenuPopup from '../../components/header/MenuPopup/HamburgerMenuPopup';
import Logo from '../../images/logo-mercafarma.png';
import Extensiones from '../Extensiones/Extensiones';
import styles from '../../css/burgermenu.module.css';

const Header = (props) => {
    const [hamburgerActive, setHamburgerState] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerState(!hamburgerActive);
    };

    return (
        <header id="header" className={props.topbarNone}>
            <HeaderTopbar />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="col-lg-3 col-md-6 col-8 d-flex align-items-center">
                                <div className="navbar-header">
                                    <Link to="banner-section" smooth={true} duration={500} className="navbar-brand">
                                        <img src={Logo} alt="Logo Mercafarma" className="logo-img" />
                                    </Link>
                                </div>
                                <Extensiones />
                            </div>

                            {/* Menú de navegación */}
                            <div className="col-lg-6 d-none d-lg-block">
                                <div id="navbar" className="navigation-holder" style={centerMenuStyle}>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link to="banner-section" smooth={true} duration={500}>Inicio</Link></li>
                                        <li><Link to="about-section" smooth={true} duration={500}>Historia</Link></li>
                                        <li><Link to="values-section" smooth={true} duration={500}>Principios</Link></li>
                                        <li><Link to="brands-section" smooth={true} duration={500}>Marcas</Link></li>
                                        <li><Link to="capsules-section" smooth={true} duration={500}>Cápsulas</Link></li>
                                        <li><Link to="contact-section" smooth={true} duration={500}>Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Botón y menú hamburguesa */}
                            <div className="col-lg-3 col-md-6 col-4 text-end">
                                <button
                                    className={`${styles['hamburger-menu-btn']} ${hamburgerActive ? styles.active : ''}`}
                                    onClick={toggleHamburgerMenu}
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        padding: '8px',
                                        fontSize: '24px',
                                        lineHeight: '0',
                                    }}
                                >
                                    <span className={styles['hamburger-icon']}></span>
                                </button>

                                {/* Componente de menú emergente */}
                                <HamburgerMenuPopup isOpen={hamburgerActive} toggleMenu={toggleHamburgerMenu} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Estilos adicionales para el responsive */}
            <style>
                {`
                    @media (max-width: 1024px) {
                        #navbar {
                            display: none;
                        }

                        .hamburger-menu-btn {
                            display: inline-block;
                            position: relative;
                            z-index: 10;
                        }

                        .logo-img {
                            max-height: 40px;
                            width: auto;
                            margin: 0 auto;
                        }

                        .wpo-site-header {
                            padding: 12px 16px;
                        }

                        .container-fluid {
                            padding: 0;
                            flex-wrap: nowrap;
                        }

                        .navbar-header,
                        .text-end {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }

                        .hamburger-icon {
                            width: 28px;
                            height: 3px;
                            background-color: #fff;
                            margin: 5px auto;
                            border-radius: 2px;
                        }
                    }

                    @media (min-width: 1025px) {
                        .hamburger-menu-btn {
                            display: none;
                        }

                        .logo-img {
                            max-height: 50px;
                        }
                    }

                    @media (max-width: 480px) {
                        .logo-img {
                            max-height: 35px;
                        }

                        .wpo-site-header {
                            padding: 8px 12px;
                        }

                        .text-end {
                            justify-content: flex-end;
                        }
                    }
                `}
            </style>
        </header>
    );
};

const centerMenuStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
};

export default Header;
