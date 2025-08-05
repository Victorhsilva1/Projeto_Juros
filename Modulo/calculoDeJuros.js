//Valor final seria o montante 
let valorFinal = 0;
// capital inicial seria o p
let capitalInicial = 1000;
// seria r = a taxa de juros anual (em decimal)
let taxaJurosAnual = 0.12;
// 𝑛 é o número de vezes que os juros são compostos por ano.
let parcelasAno = 6;
// t que seria o tempo em meses 
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