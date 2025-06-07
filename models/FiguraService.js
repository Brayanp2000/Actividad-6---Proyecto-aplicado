class figuraService{
      calcularAreaCuadrado(base=0,altura){ 
        let resultado=base*altura;
        return resultado;
      }
      CalcularPerimetroCuadrado(lado=0){
        let resultado=4*lado;
        return resultado;
      }
      calcularAreaRombo(diagonalmayor=0,diagonalmenor=0){ 
        let resultado=(diagonalmayor*diagonalmenor)/2
        return resultado;
      }
      CalcularPerimetroRombo(lado=0){
        let resultado=4*lado;
        return resultado;
      }
      
     calcularAreaTrapecio(basemayor = 0, basemenor = 0, altura = 0) {
  let resultado = (basemayor + basemenor) * altura / 2;
  return resultado;
}
      CalcularPerimetroTrapecio(lado=0){
        let resultado=4*lado;
        return resultado; 
      }   

}  
    
export default figuraService;

   