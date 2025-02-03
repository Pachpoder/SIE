import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-mercafarma.png'
import shape from '../../images/ft-shape.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer-s2">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p><b>Fundada en 2005</b> | Líder en soluciones farmacéuticas en Guatemala.
                                    Innovación, liderazgo y compromiso con la salud.</p>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/mkfgt/?locale=es_LA" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.maxicrez.com/" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>
                                            <i className="ti-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UC3YNfF1LZkQh9ehELZPu_HQ" target="_blank" rel="noopener noreferrer" onClick={ClickHandler}>
                                            <i className="ti-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Soporte</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={() => window.open('https://www.wrike.com/workspace.htm?acc=2864213#/forms?formid=1367318', '_blank')} to="#">Centro de Asistencia IT</Link></li>
                                    <li><Link onClick={() => window.open('https://www.wrike.com/frontend/requestforms/index.html?token=eyJhY2NvdW50SWQiOjI4NjQyMTMsInRhc2tGb3JtSWQiOjczNTE4MX0JNDgxNzMxNDkzOTQ4OQljMDFjNjJmMTFlMGJlMTkzNjM0MmQ1ODZkNjZlZWNmMDI5OTAyZjI1Mzk5ODlhM2EzMjQ2ZjQ5ZTM0NGJlZmRi', '_blank')} to="#">Pedidos Personales</Link></li>
                                    <li><Link onClick={() => window.open('https://www.wrike.com/frontend/requestforms/index.html?token=eyJhY2NvdW50SWQiOjI4NjQyMTMsInRhc2tGb3JtSWQiOjY4MTUxMX0JNDgwNjU4MDEzNDUzOAlkMTk2MTUxZGZhYjk1OTJiMTc5ODI3OTc2NTE2NTQ1MGU5ZGE0ZjVjYmFjZjBjOTBhNTQ1YzAxZTE3YWEwMWEx', '_blank')} to="#">Buzón de Quejas y Sugerencias</Link></li>
                                    <li><Link onClick={() => window.open('https://tinyurl.com/29hub4qt', '_blank')} to="#">Solicitud RRHH</Link></li>
                                    <li><Link onClick={() => window.open('https://portal.gyt.com.gt/guest/consultas/medired/busqueda.php?medicosPageSize=50&medicosOrder=Sorter_NOMBRE&medicosDir=ASC%2F1000&medicosPage=1', '_blank')} to="#">Médicos Afiliados</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget blog-widget">
                                <div className="widget-title">
                                    <h3>Políticas</h3>
                                </div>
                                <ul>
                                    <li>
                                        <h4>
                                            <a
                                                href="/docs/Codigo%20de%20vestimenta_250203_114336.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Código de vestimenta
                                            </a>
                                        </h4>
                                    </li>

                                    <li>
                                        <h4><Link onClick={ClickHandler} to="/reglas-seguridad">10 reglas de oro Ciberseguridad</Link></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                {/* <div className="widget-title">
                                    <h3>Contacto</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={() => window.open('https://www.wrike.com/workspace.htm?acc=2864213#/forms?formid=1367318', '_blank')} to="#">Centro de Asistencia IT</Link></li>
                                    <li><Link onClick={() => window.open('https://www.wrike.com/frontend/requestforms/index.html?token=eyJhY2NvdW50SWQiOjI4NjQyMTMsInRhc2tGb3JtSWQiOjczNTE4MX0JNDgxNzMxNDkzOTQ4OQljMDFjNjJmMTFlMGJlMTkzNjM0MmQ1ODZkNjZlZWNmMDI5OTAyZjI1Mzk5ODlhM2EzMjQ2ZjQ5ZTM0NGJlZmRi', '_blank')} to="#">Pedidos Personales</Link></li>
                                    <li><Link onClick={() => window.open('https://www.wrike.com/frontend/requestforms/index.html?token=eyJhY2NvdW50SWQiOjI4NjQyMTMsInRhc2tGb3JtSWQiOjY4MTUxMX0JNDgwNjU4MDEzNDUzOAlkMTk2MTUxZGZhYjk1OTJiMTc5ODI3OTc2NTE2NTQ1MGU5ZGE0ZjVjYmFjZjBjOTBhNTQ1YzAxZTE3YWEwMWEx', '_blank')} to="#">Buzón de Quejas y Sugerencias</Link></li>
                                    <li><Link onClick={() => window.open('https://tinyurl.com/29hub4qt', '_blank')} to="#">Solicitud RRHH</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-shape">
                    <img src={shape} alt="shape" />
                </div>
                <div className="ft-shape-s1">
                    <svg width="254.000000pt" height="257.000000pt" viewBox="0 0 254.000000 257.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,257.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M0 1341 c0 -1111 2 -1229 16 -1235 8 -3 56 -11 104 -16 206 -23 368 38 504 191 26 30 135 185 241 344 217 326 264 388 403 529 159 162 348 309 592 461 179 112 349 228 405 277 72 63 132 151 156 226 16 54 20 93 20 202 1 80 -5 157 -13 190 l-13 55 -1208 3 -1207 2 0 -1229z" />
                        </g>
                    </svg>
                </div>
                <div className="ft-shape-s2">
                    <svg width="230.000000pt" height="197.000000pt"
                        viewBox="0 0 230.000000 197.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,197.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1885 1463 c-189 -11 -392 -50 -565 -109 -202 -68 -460 -209 -630 -345 -222 -176 -436 -441 -560 -694 -45 -91 -120 -283 -120 -305 0 -6 428 -10 1145 -10 l1145 0 0 719 c0 677 -1 720 -17 725 -25 8 -268 26 -312 24 -20 -1 -58 -3 -86 -5z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>Copyright &copy; 2025 //  Todos los derechos reservados por <Link onClick={ClickHandler} to="https://www.mercafarma.com.gt/" target='_blanck'><b>Mercafarma</b></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;