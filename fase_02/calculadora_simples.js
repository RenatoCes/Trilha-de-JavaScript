//calculadora simples, mudando o valor da variável opção de 0 a 3 a função da calculadora muda, sendo 0 somar, 1 subtrair, 2 dividir e 3 multiplicar.

let numero1 = 10
let numero2 = 2
let opcoes = ["somar","subtrair","dividir","multiplicar"]
let opcao = opcoes[1]

switch(opcao){
    case "somar":
        console.log(numero1 + numero2)
        break;
    case "subtrair":
        console.log(numero1 - numero2)
        break;
    case "dividir":
        console.log(numero1 / numero2)
        break;
    case "multiplicar":
        console.log(numero1 * numero2)
        break;
}
