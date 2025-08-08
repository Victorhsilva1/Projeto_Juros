/************
 * Objetivo: Desenvolver uma aplicação de juros compostos sob compras para a empresa Viva Moda
 * Autor: Victor Hugo Rocha da Silva
 * Data: 08/08/25
 * Versão : 1.1
*************/

// Import da biblioteca readline
var readline = require('readline');

//Padrão de mensagens de erro da aplicação
const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possivel calcular com a entrada de letras.'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Os valores informados precisam ser entre 0 até 10'

// Import dos módulos criados
var calculoDoJuros = require('./Modulo/calculoDeJuros');
var exibicaoDeDados = require('./Modulo/entradaDeDados');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function
if (nome == '' || produto == '' || capital == '' || taxaAnual == '' || jurosComposto == '' || tempo == '') {
    console.log(MESSAGE_ERROR_EMPTY)

} else if (isNaN(capital) == true || isNaN(taxaAnual) == true || isNaN(jurosComposto) == true || isNaN(valorFinal) == true) {
    console.log(MESSAGE_ERROR_NOT_NUMBER)
}

entradaDeDados.question('Insira seu nome: ', function (nomeCliente) {
    let nome = (nomeCliente).toUpperCase()

    entradaDeDados.question('Insira o seu produto: ', function (produto) {
        let produtoInserido = (produto).toUpperCase()

        entradaDeDados.question('Insira o valor do capital inicial: ', function (capitalInicial) {
            let capital = (Number(capitalInicial))

            entradaDeDados.question('Insira a taxa de juros anual em percentual: ', function (taxaJurosAnual) {
                let taxaAnual = (Number(taxaJurosAnual))

                entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano: ', function (parcelasAno) {
                    let jurosComposto = (Number(parcelasAno))

                    entradaDeDados.question('Insira o tempo em meses para o cálculo: ', function (tempoEmMeses) {
                        let tempo = (Number(tempoEmMeses))


                        let valorFinal = calculoDoJuros.calcular(capital, taxaAnual, jurosComposto, tempo)
                        exibicaoDeDados.mensagemCliente(nome, produto, capital, tempo, valorFinal)

                        entradaDeDados.close()

                        if (nome == '' || produto == '' || capital == '' || taxaAnual == '' || jurosComposto == '' || tempo == '') {
                            console.log(MESSAGE_ERROR_EMPTY)

                        } else if (isNaN(capital) == true || isNaN(taxaAnual) == true || isNaN(jurosComposto) == true || isNaN(valorFinal) == true) {
                            console.log(MESSAGE_ERROR_NOT_NUMBER)
                        }

                       


                    })
                })
            })
        })
    })
})