// Ao executar o código
// const nomeCompleto = nome + sobrenome,
// nenhum erro seria exibido e o valor armazenado na variável seria "LaraAyumi".
const nome = "Lara"
const sobrenome = "Ayumi"
console.log(nome + sobrenome);
// Alternativa correta!É isso aí! Usamos o sinal de soma(+) para juntar 2 palavras.Para deixar essa saída mais próxima do mundo real, podemos adicionar uma string vazia entre as variáveis, como mostra o próximo código
// const nomeCompleto = nome + " " + sobrenome.

// ******************************************************************************

// Ao executar o código
// const resultado = idade + dezAnosDepois,
// um erro NaN seria exibido, já que o valor armazenado na variável dezAnosDepois é uma string e não um número.
const idade = 2
const dezAnosDepois = "12"
console.log(idade + dezAnosDepois); 
// Por incrível que pareça, nenhum erro seria exibido.Ao executar o código que soma um número com uma string, 
// o JavaScript interpola(ou junta) os valores e o resultado seria "212".

// ******************************************************************************

// Ao executar o código console.log(bacharel == 1), um erro NaN seria exibido, já que o valor armazenado na variável bacharel é um booleano e não um número.
const bacharel = false
console.log(bacharel == 1)
// Quase.Ao executar o código, o valor true seria exibido.Mesmo bacharel sendo um boolean, quando tentarmos comparar o valor 1 com == (dois sinais de igual, comparando apenas o valor e não o tipo), o JavaScript utiliza o princípio de variáveis "truthy" / "falsy"
// e considera o número 1 como equivalente a true e o número 0 equivalente a false.