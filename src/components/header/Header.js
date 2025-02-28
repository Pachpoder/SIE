import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
                    <div className="container-fluid navbar-container">

                        {/* Logo */}
                        <div className="navbar-logo">
                            <Link to="banner-section" smooth={true} duration={500} className="navbar-brand">
                                <img src={Logo} alt="Logo Mercafarma" className="logo-img" />
                            </Link>
                            <Extensiones />
                        </div>

                        {/* Menú de navegación */}
                        <div className="navbar-menu d-none d-lg-flex">
                            <ul className="nav navbar-nav">
                                <li><Link to="banner-section" smooth={true} duration={500}>Inicio</Link></li>
                                <li><Link to="about-section" smooth={true} duration={500}>Mercafarma</Link></li>
                                <li><Link to="capsules-section" smooth={true} duration={500}>Crecimiento Personal</Link></li>
                                <li><Link to="brands-section" smooth={true} duration={500}>Otros Sitios Web</Link></li>
                                <li><Link to="contact-section" smooth={true} duration={500}>Contacto</Link></li>
                                <li><a target='_blank' href='http://192.168.1.161/home'>Centro de Gestiones</a></li>
                            </ul>
                        </div>

                        {/* Menú hamburguesa correctamente alineado y visible */}
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
                </nav>
            </div>

            {/* Estilos corregidos */}
            <style>
                {`
                    .wpo-site-header {
                        background-color: #A61C1C; /* Fondo rojo del navbar */
                        padding: 10px 0;
                    }

                    .navbar-container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        flex-wrap: nowrap;
                        padding: 0 20px;
                    }

                    .navbar-logo {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    }

                    .logo-img {
                        max-height: 50px;
                        width: auto;
                    }

                    .navbar-menu {
                        flex-grow: 1;
                        display: flex;
                        justify-content: center;
                    }

                    .nav.navbar-nav {
                        display: flex;
                        gap: 20px;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }

                    .nav.navbar-nav li {
                        display: inline-block;
                    }

                    .nav.navbar-nav li a {
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: bold;
                        color: white;
                        padding: 8px 12px;
                        transition: color 0.3s ease;
                    }

                    .nav.navbar-nav li a:hover {
                        color: #ffcc00;
                    }

                    /* Ajustes para que el menú hamburguesa siempre aparezca en la derecha */
                    .navbar-hamburger {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        right: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    .hamburger-menu-btn {
                        border: none;
                        background: none;
                        padding: 8px;
                        font-size: 24px;
                        cursor: pointer;
                    }

                    .hamburger-icon {
                        width: 30px;
                        height: 3px;
                        background-color: white;
                        display: block;
                        margin: 5px 0;
                        border-radius: 2px;
                    }

                    /* Ajustes responsivos */
                    @media (max-width: 1024px) {
                        .navbar-container {
                            padding: 8px 15px;
                        }

                        .logo-img {
                            max-height: 40px;
                        }

                        .nav.navbar-nav {
                            gap: 15px;
                        }

                        .nav.navbar-nav li a {
                            font-size: 14px;
                            padding: 6px 10px;
                        }
                    }

                    /* Mostrar menú hamburguesa en pantallas pequeñas y mantener alineado */
                    @media (max-width: 992px) {
                        .navbar-menu {
                            display: none;
                        }

                        .navbar-hamburger {
                            display: flex;
                            position: absolute;
                            right: 15px;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .hamburger-menu-btn {
                            display: block;
                        }
                    }
                `}
            </style>
        </header>
    );
};

export default Header;
