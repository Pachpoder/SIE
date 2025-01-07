const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Importar cors

const app = express();
const PORT = 5000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234', // Tu contraseña de MySQL
    database: 'laravel', // Nombre de tu base de datos
});

// Habilitar CORS para permitir solicitudes desde otros dominios
app.use(cors());

// Verificar conexión a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.message);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Ruta para obtener extensiones con departamentos
app.get('/extensiones', (req, res) => {
    const query = `
        SELECT 
            e.id AS id_extension,
            e.nombre,
            e.correo,
            e.extension,
            e.dependencia,
            e.id_departamento,
            d.descripcion AS departamento
        FROM 
            extensiones e
        LEFT JOIN 
            departamentos d
        ON 
            e.id_departamento = d.id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener los datos' });
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
