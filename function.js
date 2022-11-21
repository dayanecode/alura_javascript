//Formatando números no JavaScript

// function ganhoPorHora (salario, qtdHorasTrabalhadas) {

// const salarioPorHora = (salario/qtdHorasTrabalhadas)

// return salarioPorHora

// };

// console.log(ganhoPorHora(24000,198))



//Usando Math.round() para arredondar o resultado final

// function ganhoPorHora(salario, qtdHorasTrabalhadas) {

//     const salarioPorHora = (salario/qtdHorasTrabalhadas)

//     return Math.round(salarioPorHora)

//     };

//     console.log(ganhoPorHora(24000,198))



//Formatando o resultado com ajuda do método toFixed()
// function ganhoPorHora(salario, HorasTrabalhadasNoMes) {

//     const salarioPorHora = (salario / HorasTrabalhadasNoMes)

//     const salarioArred = salarioPorHora.toFixed(2)

//     return salarioArred;

// };

// console.log(ganhoPorHora(24000, 198))



//Formatando o resultado para Real utilizando o método: toLocaleString()
function ganhoPorHora(salario, HorasTrabalhadasNoMes) {

    const salarioPorHora = (salario / HorasTrabalhadasNoMes)

    const salarioFormatado = salarioPorHora.toLocaleString('pt-BR',{
        style: 'currency', //que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
        currency: 'BRL' //A moeda para usar na formatação monetária
    });
  
    return salarioFormatado;

};

console.log(ganhoPorHora(24000, 198)) //R$ 121,21