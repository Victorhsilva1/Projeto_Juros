/********************
 * Objetivo : Módulo para calcular juros compostos
 * Autor : Victor Hugo Rocha da Silva
 * Data : 08/08/2025
 * Versão : 1.1
 *********************/


function calcular(capitalInicial, taxaJurosAnual, parcelasAno, tempoEmMeses) {
    
    let tempoEmAnos = tempoEmMeses / 12
    let valorFinal = capitalInicial * Math.pow((1 + (taxaJurosAnual / parcelasAno)), (parcelasAno * tempoEmAnos))
    
    return valorFinal
}

module.exports = {
    calcular
};