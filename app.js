/************
 * Objetivo: Desenvolver uma aplicação de juros compostos sob compras para a empresa Viva Moda
 * Autor: Victor Hugo Rocha da Silva
 * Data: 05/08/25
 * Versão : 1.1
*************/

// Import da biblioteca readline
var readline = require('readline');

// Import dos módulos criados
var calculoDoJuros = require('./Modulo/calculoDeJuros');
var exibicaoDeDados = require('./Modulo/entradaDeDados');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDeDados.question('Insira seu nome: ', function (nomeCliente) {
    let nome = String(nomeCliente).toUpperCase();

    entradaDeDados.question('Insira o seu produto: ', function (produto) {
        let produtoInserido = (produto);

    entradaDeDados.question('Insira o valor do capital inicial: ', function (capitalInicial) {
        let capital = number(capitalInicial);

      
            entradaDeDados.question('Insira a taxa de juros anual em percentual: ', function (taxaJurosAnual) {
                let taxaAnual = number(taxaJurosAnual);

                entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano: ', function (parcelasAno) {
                    let jurosComposto = number(parcelasAno);

                    entradaDeDados.question('Insira o tempo em meses para o cálculo: ', function (tempoEmMeses) {
                        let tempo = number(tempoEmMeses);


                        let valorFinal = calculoDoJuros.calcular(capital, taxaAnual, jurosComposto, tempo);
                        exibicaoDeDados.mensagemCliente(nome, produto, capital, tempo, valorFinal);

                        entradaDeDados.close();
                    });
                });
            });
        });
    });
});