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

// Import dos módulos criados
var calculoDoJuros = require('./Modulo/calculoDeJuros');
var exibicaoDeDados = require('./Modulo/entradaDeDados');

//Criando um objeto para entrada e e saida de dados via terminal 
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//função para inserir o nome do cliente
entradaDeDados.question('Insira seu nome: ', function (nomeCliente) {
    let nome = (nomeCliente).toUpperCase()

    //função para inserir o produto do cliente
    entradaDeDados.question('Insira o seu produto: ', function (produto) {
        //toUpperCase faz com que as letras fiquem maiusculas
        let produtoInserido = (produto).toUpperCase()

        // capital inicial seria o p
        entradaDeDados.question('Insira o valor do capital inicial: ', function (capitalInicial) {
            let capital = (Number(capitalInicial))

            // seria r = a taxa de juros anual (em decimal)
            entradaDeDados.question('Insira a taxa de juros anual em percentual: ', function (taxaJurosAnual) {
                let taxaAnual = (Number(taxaJurosAnual))

                // 𝑛 é o número de vezes que os juros são compostos por ano.
                entradaDeDados.question('Insira o número de vezes que os juros são compostos por ano: ', function (parcelasAno) {
                    let jurosComposto = (Number(parcelasAno))

                    // t que seria o tempo em meses 
                    entradaDeDados.question('Insira o tempo em meses para o cálculo: ', function (tempoEmMeses) {
                        let tempo = (Number(tempoEmMeses))

                        // SE(if) estiver em vazio sem nenhum campo preenchido ('') deixando somente no final para o tratamento
                        // por conta que não se faria o tratamento em todas automaticamente sendo back :)
                        if (nome == '' || produtoInserido == '' || capital == '' || taxaAnual == '' || jurosComposto == '' || tempo == '') {
                            //apareceça a mensagem de erro definida lá em cima como "ERRO: Existem campos que não foram preenchidos."
                            console.log(MESSAGE_ERROR_EMPTY)
                            //fechando o programa caso tenha um erro
                            entradaDeDados.close()

                            //Isnan é validação para caso nao seja um numero 
                        } else if (isNaN(capital) == true || isNaN(taxaAnual) == true || isNaN(jurosComposto) == true || isNaN(valorFinal) == true) {
                            console.log(MESSAGE_ERROR_NOT_NUMBER)
                            entradaDeDados.close()
                        }

                        // caso tudo esteja correto imprimir o entradaDeDados.js
                        else{ let valorFinal = calculoDoJuros.calcular(capital, taxaAnual, jurosComposto, tempo)
                        exibicaoDeDados.mensagemCliente(nome, produto, capital, tempo, valorFinal)
                        entradaDeDados.close()

                        }
                    })
                })
            })
        })
    })
})