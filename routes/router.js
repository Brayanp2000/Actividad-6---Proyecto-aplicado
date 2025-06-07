import { Router } from 'express';
import FiguraController from '../controllers/FiguraController.js';

const router = Router();
const controller = new FiguraController();

// Ruta principal 
router.get('/', (req, res) => {
  res.render('index'); // renderizar index.ejs
});

// Area
router.get('/area', controller.formularioCalcularArea);
router.post('/area', controller.calcularAreaFiguras);

// Perimetro
router.get('/perimetro', controller.formularioCalcularPerimetro);
router.post('/perimetro', controller.calcularPerimetrosFiguras);

export default router;
