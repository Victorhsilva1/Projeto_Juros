//Valor inicial seria o montante 
let valorFinal = 0;
let capitalInicial = 1000;
let taxaJurosAnual = 0.12;
let parcelasAno = 6;
let tempoEmMeses = 2;

function calculoDoJuros() {
    valorFinal = capitalInicial*Math.pow((1+(taxaJurosAnual / parcelasAno ) ), parcelasAno / tempoEmMeses)
    return valorFinal 
}

console.log(calculoDoJuros());

module.exports = {
    valorFinal, 
    capitalInicial,
    taxaJurosAnual,
    parcelasAno,
    tempoEmMeses
}