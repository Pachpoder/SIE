import React from 'react';


const ReglasSeguridad = (props) => {
    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                            <h1 className="post-title">10 Reglas de Oro de Ciberseguridad para Empleados de Mercafarma</h1>
                                <ol style={styles.ol}>
                                        <li style={styles.li}>
                                            <span style={styles.title}>No utilizar el correo corporativo para fines personales.</span>
                                            <ul style={styles.ul}>
                                                <li>Suscribir cuentas de redes sociales con el correo corporativo.</li>
                                                <li>Publicar el correo corporativo en foros fuera del contexto laboral.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Mantenga sus contraseñas seguras y confidenciales.</span>
                                            <ul style={styles.ul}>
                                                <li>Cree contraseñas únicas y complejas para cada cuenta.</li>
                                                <li>Evite usar información personal como nombres, fechas de nacimiento o direcciones en sus contraseñas.</li>
                                                <li>No comparta sus contraseñas con nadie, ni siquiera con compañeros de trabajo o familiares.</li>
                                                <li>Cambie sus contraseñas regularmente, especialmente después de cualquier incidente de seguridad.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Proteja su información personal.</span>
                                            <ul style={styles.ul}>
                                                <li>No comparta información personal como números de tarjeta de crédito en sitios no seguros.</li>
                                                <li>Tenga cuidado con solicitudes de información personal no solicitadas.</li>
                                                <li>Destruya documentos con información sensible cuando ya no los necesite.</li>
                                                <li>Evite compartir demasiada información en redes sociales para prevenir robos de identidad.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Autenticación de Dos Factores (2FA).</span>
                                            <ul style={styles.ul}>
                                                <li>Habilite la autenticación de dos factores en todas sus cuentas.</li>
                                                <li>Utilice aplicaciones como Google Authenticator o SMS para configurarla.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Cuidado con los correos electrónicos de phishing.</span>
                                            <ul style={styles.ul}>
                                                <li>Desconfíe de correos que soliciten información personal o incluyan enlaces sospechosos.</li>
                                                <li>Verifique la autenticidad del remitente antes de hacer clic en enlaces o descargas.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Cuidado con los mensajes de WhatsApp.</span>
                                            <ul style={styles.ul}>
                                                <li>No responda a mensajes de desconocidos.</li>
                                                <li>No haga clic en enlaces que no sean de confianza.</li>
                                                <li>No envíe códigos de validación a desconocidos.</li>
                                                <li>Evite contestar llamadas de números extranjeros que no reconozca.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Redes Wi-Fi seguras.</span>
                                            <ul style={styles.ul}>
                                                <li>Evite redes Wi-Fi públicas no seguras; utilice redes protegidas o una VPN.</li>
                                                <li>No comparta redes de su dispositivo móvil con terceros.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Reporta incidentes de inmediato.</span>
                                            <ul style={styles.ul}>
                                                <li>Notifique a su supervisor o al equipo de seguridad si sospecha fraude o robo de identidad.</li>
                                                <li>Solicite un cambio de contraseña si la considera comprometida.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Llamadas de emergencia.</span>
                                            <ul style={styles.ul}>
                                                <li>Confirme emergencias llamando a sus familiares.</li>
                                                <li>Establezca códigos de seguridad familiar para verificar situaciones de emergencia.</li>
                                            </ul>
                                        </li>
                                        <li style={styles.li}>
                                            <span style={styles.title}>Actualice regularmente.</span>
                                            <ul style={styles.ul}>
                                                <li>Mantenga sus sistemas operativos, aplicaciones y antivirus actualizados.</li>
                                                <li>Realice copias de seguridad de documentos importantes en OneDrive.</li>
                                            </ul>
                                        </li>
                                    </ol>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    ol: {
        textAlign: 'justify',
        lineHeight: '1.8',
        color: '#333',
        marginTop: '20px',
        fontSize: '18px',
    },
    li: {
        marginBottom: '20px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#0056b3',
    },
    ul: {
        marginTop: '10px',
        marginLeft: '20px',
        color: '#666',
    },
};

export default ReglasSeguridad;
