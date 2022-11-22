//a var pode ser utilizada antes de ser declarada (var a;)
var h = 5
var c =7

a = h * c
console.log(a)

var a;

//a let NÃO pode ser utilizada antes de ser declarada
let forma = 'retangulo'
let altura = 5
let comprimento = 7
let area;

if (forma === "triangulo") {
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}
console.log(area)

//variável const não pode ter o seu valor alterado.

const form = 'triangulo'
const alt = 5
const comp = 7
let ar;

if (form === 'quadrado') {
    ar = alt * comp; 
} else {
    ar = (alt * comp) / 2
} 

console.log(ar)

