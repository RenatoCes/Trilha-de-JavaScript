//functions
function maior_de_idade(idade)
{
    return (idade < 18) ? "Menor de idade" : "Maior de idade"
}

let resultado_maior_de_idade = maior_de_idade(18)
console.log(resultado_maior_de_idade)

//Arrow functio

let function_sum = (a = 0, b = 0) => a + b
console.log(function_sum(19,2))

//for diferente na função
let sum = 0
let sum_all = (...args) => {
    sum = 0    
    for(let arg of args) sum += arg;
    return sum
}
sum_all(1,2,3,4,5,6,7,8,9,10)
console.log(sum)

let hello = () => {
    return "Hello World"
}
console.log(hello())