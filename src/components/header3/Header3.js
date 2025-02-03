import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderTopbar2 from '../HeaderTopbar2/HeaderTopbar2'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo-mercafarma.png'
import HamburgerMenuPopup from '../header/MenuPopup/HamburgerMenuPopup'
import styles from '../../css/burgermenu.module.css';


const Header3 = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [hamburgerActive, setHamburgerState] = useState(false);
    
        const toggleHamburgerMenu = () => {
            setHamburgerState(!hamburgerActive);
        };
        
    return (
        <header id="header" className={`wpo-header-style-7 ${props.topbarNone}`}>
            <HeaderTopbar2 />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Inicio</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/">Historia</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link to="/">Valores y politicas</Link>
                                            
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="/">Plataformas</Link>
                                           
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="/">Páginas Web</Link>
                                       
                                        </li>
                                        
                                        <li><Link onClick={ClickHandler} to="/">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                        </div>
                                    </div>

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
                        </div>
                    </div>
                </nav>
            </div>
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
    )
}

export default Header3;