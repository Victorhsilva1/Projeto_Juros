/********************
 * Objetivo : Arquivo responsável por exibir a mensagem final ao cliente
 * Autor : Victor Hugo Rocha da Silva
 * Data : 08/08/2025
 * Versão : 1.0
 *********************/

function mensagemCliente(nomeCliente, produto, capitalInicial, tempoEmMeses, valorFinal) {
 console.log(`Muito obrigado por realizar a sua compra conosco, Sr(a) ${nomeCliente}. A compra do produto "${produto}"
    tem um valor inicial de R$ ${capitalInicial}.
    A sua compra será parcelada em ${tempoEmMeses} meses e o valor final com juros será de R$ ${valorFinal}.
    Muito obrigado por escolher a Viva Moda.`)
    }
    
    module.exports = {
    mensagemCliente
    }