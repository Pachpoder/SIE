import React from 'react'

export function validateIdPlataforms(id) {
    switch (parseInt(id, 10)) {
        case 1:
            return (
                <>
                    <p>JARVIS es un sistema diseñado para optimizar y centralizar la gestión de visitas médicas, facilitando las operaciones diarias de los visitadores médicos y fortaleciendo las relaciones comerciales con los profesionales de la salud. Este sistema permite almacenar y gestionar de manera eficiente toda la información general de los médicos, incluyendo sus datos personales, especialidades y ubicaciones, asegurando un acceso rápido y organizado a esta información clave.</p>
                    <p>Una de las principales funcionalidades de JARVIS es su módulo de gestión de agendas, que permite a los usuarios programar y controlar visitas periódicas a cada médico. La agenda ofrece vistas personalizables por mes, semana o día, proporcionando una visión clara y estructurada del calendario de visitas, lo que mejora la organización y planificación de las actividades del equipo de ventas.</p>
                    <p>El sistema también incluye herramientas avanzadas para la toma de pedidos de todos los productos comercializados por la empresa, simplificando y agilizando el proceso de registro y seguimiento de solicitudes. Asimismo, JARVIS permite el reporte seguro de pagos en efectivo realizados por los clientes, garantizando transparencia y un mejor control interno sobre estos ingresos.</p>
                    <p>Otra funcionalidad destacada es la gestión de cupones promocionales, que permite a los visitadores médicos entregar incentivos estratégicos a los profesionales de la salud, fortaleciendo las relaciones comerciales y aumentando la fidelidad de los médicos hacia los productos de la empresa.</p>
                    <p>Adicionalmente, JARVIS está diseñado con herramientas exclusivas para los visitadores médicos, como la generación de reportes detallados sobre visitas realizadas, pedidos gestionados y un módulo para realizar solicitudes administrativas, como permisos especiales, de manera rápida y eficiente.</p>
                    <p>Con todas estas características, JARVIS se convierte en una solución completa que no solo optimiza procesos operativos y comerciales, sino que también habilita un control efectivo y promueve la toma de decisiones estratégicas basadas en datos.</p>
                    <div className="wpo-project-single-title">
                        <h3>Objetivo</h3>
                    </div>
                    <p>El objetivo principal de JARVIS es centralizar y optimizar la gestión de visitas médicas, brindando a los visitadores médicos una herramienta eficiente para mejorar su productividad, fortalecer la relación comercial con los médicos y garantizar un control efectivo de procesos relacionados con ventas, pagos y promociones.</p>
                    <div className="wpo-project-single-title">
                        <h3>Alcances</h3>
                    </div>
                    {/* s */}
                    <div className="wpo-project-single-title-plataform">
                        <h5>Gestión integral de la información de médicos:</h5>
                    </div>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Almacenamiento de datos generales, como nombre, especialidad y ubicación.</li>
                        <li>Acceso rápido y organizado a la información clave para un mejor entendimiento del cliente.</li>
                    </ul>
                    {/*  */}
                    <div className="wpo-project-single-title-plataform">
                    <h5>Planificación y control de visitas:</h5>
                    </div>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Módulo de agenda personalizable con vistas mensuales, semanales y diarias.</li>
                        <li>Programación de visitas periódicas para garantizar un seguimiento constante a cada médico.</li>
                    </ul>
                    {/*  */}
                    <h5>Gestión comercial eficiente:</h5>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Toma de pedidos de productos de manera estructurada, simplificando los procesos de ventas.</li>
                        <li>Registro y reporte de pagos en efectivo realizados por los clientes, asegurando transparencia.</li>
                    </ul>
                    {/*  */}
                    <h5>Promoción y fidelización:</h5>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Módulo de gestión de cupones promocionales, facilitando la entrega de incentivos estratégicos a los médicos.</li>
                    </ul>
                    {/*  */}
                    <h5>Herramientas específicas para visitadores médicos:</h5>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Reportes detallados de visitas realizadas y pedidos gestionados para un mejor seguimiento de resultados.</li>
                        <li>Funcionalidad para realizar solicitudes administrativas, como permisos especiales, de forma rápida y directa desde la plataforma.</li>
                    </ul>
                    {/*  */}
                    <h5>Control interno y análisis estratégico:</h5>
                    <ul style={{ listStyleType: 'circle', marginLeft: '30px' }}>
                        <li>Consolidación de información clave para garantizar un control interno eficiente.</li>
                        <li>Generación de reportes estratégicos que facilitan la toma de decisiones informadas basadas en datos actualizados.</li>
                    </ul>
                </>
            );
        case 2:
            return (
                <>
                <button>Cupones</button>

                </>
            );
        case 3:
            return (
                <>
                <button>Diamante</button>

                </>
            );
        case 4:
            return (
                <>
                <button>Pago seguro</button>

                </>
            );
        case 5:
            return (
                <>
                <button>Ordenes de produccion</button>

                </>
            );
        case 6:
            return (
                <>
                <button>Control de activos</button>

                </>
            );
        default:
            return null;
    }
}