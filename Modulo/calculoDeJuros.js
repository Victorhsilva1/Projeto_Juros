/********************
 * Objetivo : Módulo para calcular juros compostos
 * Autor : Victor Hugo Rocha da Silva
 * Data : 08/08/2025
 * Versão : 1.1
 *********************/

//Criando a função calcular e passando seus parametros
function calcular(capitalInicial, taxaJurosAnual, parcelasAno, tempoEmMeses) {
    
    //passando o 'tempoEmAnos' para meses dividindo por 12 
    let tempoEmAnos = tempoEmMeses / 12
    //Calculo e execução da formula de juros compostos
    let valorFinal = capitalInicial * Math.pow((1 + (taxaJurosAnual / parcelasAno)), (parcelasAno * tempoEmAnos))
    return valorFinal.toFixed(2)
}

// Exportando somente a função calcular 
module.exports = {
    calcular
};