import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import HeaderTopbar2 from '../HeaderTopbar2/HeaderTopbar2';
import HamburgerMenuPopup from '../header/MenuPopup/HamburgerMenuPopup';
import Logo from '../../images/logo-mercafarma.png';
import styles from '../../css/burgermenu.module.css';

const Header3 = (props) => {
    const [hamburgerActive, setHamburgerState] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash) {
            scroller.scrollTo(location.hash.replace('#', ''), {
                duration: 500,
                smooth: true,
                offset: -70,
            });
        }
    }, [location]);

    const toggleHamburgerMenu = () => {
        setHamburgerState(!hamburgerActive);
    };

    const handleSectionClick = (sectionId) => {
        const targetUrl = `/#${sectionId}`;

        if (location.pathname !== '/') {
            navigate(targetUrl);
        } else {
            scroller.scrollTo(sectionId, {
                duration: 500,
                smooth: true,
                offset: -70,
            });
        }
    };

    return (
        <header id="header" className={`wpo-header-style-7 ${props.topbarNone}`}>
            <HeaderTopbar2 />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="col-lg-3 col-md-6 col-8 d-flex align-items-center">
                                <div className="navbar-header">
                                    <Link
                                        onClick={() => handleSectionClick('banner-section')}
                                        className="navbar-brand"
                                        to="/"
                                    >
                                        <img src={Logo} alt="Logo Mercafarma" className="logo-img" />
                                    </Link>
                                </div>
                            </div>

                            {/* Menú de navegación */}
                            <div className="col-lg-6 d-none d-lg-block">
                                <div id="navbar" className="navigation-holder" style={centerMenuStyle}>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li>
                                            <Link
                                                onClick={() => handleSectionClick('banner-section')}
                                                to="/#banner-section"
                                                className="nav-link"
                                            >
                                                Inicio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => handleSectionClick('about-section')}
                                                to="/#about-section"
                                                className="nav-link"
                                            >
                                                Historia
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => handleSectionClick('values-section')}
                                                to="/#values-section"
                                                className="nav-link"
                                            >
                                                Valores y políticas
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => handleSectionClick('brands-section')}
                                                to="/#brands-section"
                                                className="nav-link"
                                            >
                                                Plataformas
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => handleSectionClick('capsules-section')}
                                                to="/#capsules-section"
                                                className="nav-link"
                                            >
                                                Páginas Web
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={() => handleSectionClick('contact-section')}
                                                to="/#contact-section"
                                                className="nav-link"
                                            >
                                                Contacto
                                            </Link>
                                        </li>
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

export default Header3;
