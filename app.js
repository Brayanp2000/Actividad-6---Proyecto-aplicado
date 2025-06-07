import express from 'express';
import router from './routes/router.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Simular __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


// Middleware para parsear POST
app.use(express.urlencoded({ extended: true }));

// Configurar motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Hacer pública la carpeta 'public' para archivos estáticos como CSS
app.use(express.static(path.join(__dirname, 'public')));

// Usar el router
app.use('/', router);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
