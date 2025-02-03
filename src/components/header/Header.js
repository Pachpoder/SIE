import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import HamburgerMenuPopup from '../../components/header/MenuPopup/HamburgerMenuPopup';
import Logo from '../../images/logo-mercafarma.png';
import Extensiones from '../Extensiones/Extensiones';
import styles from '../../css/burgermenu.module.css';

const Header = (props) => {
    const [hamburgerActive, setHamburgerState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

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
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                        <img src={Logo} alt="Logo Mercafarma" className="logo-img" />
                                    </Link>
                                </div>
                                <Extensiones />
                            </div>

                            {/* Menú de navegación */}
                            <div className="col-lg-6 d-none d-lg-block">
                                <div id="navbar" className="navigation-holder" style={centerMenuStyle}>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} to="/">Inicio</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Historia</Link></li>
                                        <li className="menu-item-has-children"><Link to="/service">Valores y políticas</Link></li>
                                        <li className="menu-item-has-children"><Link to="/service">Plataformas</Link></li>
                                        <li className="menu-item-has-children"><Link to="/project">Páginas Web</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contacto</Link></li>
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

                        /* Estilo para centrar el menú emergente en móviles */
                        .menu-popup-centered {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 90%;
                            max-width: 400px;
                            z-index: 1000;
                        }
                    }

                    @media (min-width: 1025px) {
                        .hamburger-menu-btn {
                            display: none;
                        }

                        .logo-img {
                            max-height: 50px;
                        }

                        /* Menú emergente en el lado derecho arriba en PC */
                        .menu-popup-centered {
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            width: 300px;
                            z-index: 1000;
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
