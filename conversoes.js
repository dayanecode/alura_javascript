//tipo de dado booleano

//conversão implícita
const numero = 456
const numeroString = '456'

console.log(numero == numeroString) //true, porque comparou apenas o valor e não o tipo de dado.
console.log(numero === numeroString) //false, porque o tipo de dado número é diferente do tipo texto.

// === compara não somente o valor mais também o tipo de dado.
// == compara o valor e ignora o tipo de dado.

console.log(numero + numeroString) //456456, ao invés de somar os dois valores ele concatenou porque uma variável é do tipo número e a outra é do tipo string.


//conversão explícita
//função Number() ou 
console.log(numero + Number(numeroString))

let largura = '10'
let altura = '5'
let area = Number(largura) * Number(altura)
// let area = + largura * + altura

console.log(area)

// função String() ou toString()
let telefone = 11965998779
console.log("o telefone é " + String(telefone))
console.log("o telefone é " + telefone.toString())
