//o JavaScript traz na sua biblioteca-base vários métodos que utilizamos para manipular strings de texto:

//Método que converte a string em minúscula toLowerCase();
//Método que converte a string em maiúscula toUpperCase();

const cidade = 'são paulo'

const inputCidade = 'São Paulo'

// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
console.log(cidade === inputCidade) //false

const inputCidadeMinusculo = inputCidade.toLowerCase();

console.log(cidade === inputCidadeMinusculo) //true

