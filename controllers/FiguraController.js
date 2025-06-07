import FiguraService from '../models/FiguraService.js';

class FiguraController {

    figuraService = null;

    constructor() {
        this.figuraService = new FiguraService();
        this.formularioCalcularArea = this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras = this.calcularAreaFiguras.bind(this);
        this.formularioCalcularPerimetro = this.formularioCalcularPerimetro.bind(this);
        this.calcularPerimetrosFiguras = this.calcularPerimetrosFiguras.bind(this);
    }

    // formulario de área
    formularioCalcularArea(request, response) {
        response.render('area');
    }

    // calcular Area figura
    calcularAreaFiguras(request, response) {
        const { figura, base, altura, diagonalmayor, diagonalmenor, basemayor, basemenor, alturatrapecio } = request.body;
        let resultado;

        if (figura === 'cuadrado') {
            resultado = this.figuraService.calcularAreaCuadrado(base, altura);
        } else if (figura === 'rombo') {
            resultado = this.figuraService.calcularAreaRombo(diagonalmayor, diagonalmenor);
        } else if (figura === 'trapecio') {
    const bm = parseFloat(basemayor);
    const bme = parseFloat(basemenor);
    const alt = parseFloat(alturatrapecio);
    resultado = this.figuraService.calcularAreaTrapecio(bm, bme, alt);
}



        response.render('area', { resultado });
    }

    //formulario de perimetro
    formularioCalcularPerimetro(request, response) {
        response.render('perimetro');
    }

    //calcular perimetro figura
    calcularPerimetrosFiguras(request, response) {
        const { figura, lado } = request.body;
        let resultado;

        if (figura === 'cuadrado') {
            resultado = this.figuraService.CalcularPerimetroCuadrado(lado);
        } else if (figura === 'rombo') {
            resultado = this.figuraService.CalcularPerimetroRombo(lado);
        } else if (figura === 'trapecio') {
            resultado = this.figuraService.CalcularPerimetroTrapecio(lado);
        }

        response.render('perimetro', { resultado });
    }
}

export default FiguraController;
