/********************
 * Objetivo : Arquivo responsável por calcular e validar os juros compostos
 * Autor : Victor Hugo Rocha da Silva
 * Data : 05/08/2025
 * Versão : 1.0
 *********************/
let nomeCliente
let produto

const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possivel calcular com a entrada de letras.'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Os valores informados precisam ser entre 0 até 10'

var calculoDoJuros = require('./Modulo/calculoDeJuros')

entradaDeDados.question('Insira seu nome:', function (nomeCliente) {

    // Recebe o call back e converte para MAIUSCULO
    let nomeAluno = String(nomeCliente).toUpperCase()

    entradaDeDados.question('Insira o seu capital inicial:', function (capitalInicial) {
        let capitalInicial = capitalInicial

        entradaDeDados.question('Insira a taxa de juros anual em percentual ', function (taxaJurosAnual) {
            let taxaJurosAnual = taxaJurosAnual

            entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano:', function (parcelasAno) {
                let parcelasAno = parcelasAno

                entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano:', function (parcelasAno) {
                    let parcelasAno = parcelasAno

                })
            })
        })
    })

    if(statusCompra) {
        console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente} A compra do produto ${produto} tem um valor de:  ${capitalInicial} 
            A sua compra será parcelada em ${tempoEmMeses} vezes e o Sr(a) pagará: ${valorFinal} Muito obrigado por escolher a Viva Moda.`)
        //Finaliza o arquivo após ele ser executado de forma correta
        entradaDeDados.close()
    }
}



module.exports = {
    nomeCliente,
    produto,
}