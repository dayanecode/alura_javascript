//criando string para guardar qualquer conjunto de caractere
//tudo o que a gente colocar entre aspas o JavaScript vai considerar como String
const texto1 = 'Olá, mundo'

const senha ="senhasupersegura123456!"

const stringDeNumeros = '321123'

const citacao = 'A Day disse: "Você é fenomenal!"'
const apresentacao = 'Meu nome é: '

const nome = 'Dayane'

console.log(citacao)

//concatenação (+)

console.log(apresentacao + nome)

// *******************************************************
// Pesquisar sobre template string OU  template literal
// *******************************************************

// character econding - Padrão UTF: Unicode Transformation Format utilizado como padrão na Web até hoje.
// Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode
// O JavaScript usa, por padrão, o UTF-16. 
const cifrao = '\u0024'
const tique = '\u2705'

console.log(cifrao)
console.log(tique)