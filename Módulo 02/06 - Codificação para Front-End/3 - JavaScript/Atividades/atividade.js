//Q-1  faça um programa que imprime no console do navegador o nome que o usúario informar no prompt depois de 3 segundos.

/*setTimeout(teste, 3000)
function teste(){
let nome = prompt("Qual o seu nome?")
console.log(nome)
}
*/

//Q-2  Faça um programa que chama a função somar passando 2 valores, depois retorne e mostre em um alert o resultado da multiplicação desses valores.

/*let valor = somar()
function somar(){
    return 5 * 10
}
alert(valor)
*/


//Q-3 Faça um programa que altera o valor de uma tag h2 no html, incrementando infinitamente o valor com +1 a cada 2 segundos.
/* 

function on(){
    let elemento = document.getElementById("t2")
    elemento.textContent = elemento.textContent + ", tudo bem? "
}
*/

//Q-4 Crie uma tag H3 no HTML contendo o texto "Olá mundo" e faça com que a cor desse texto altere para uma cor aleatória a cada 4 segundos.
/* function corAleatoria() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  setInterval(function() {
    var texto = document.getElementById('t3');
    texto.style.color = corAleatoria();
  }, 4000)
  */
//Q-5 Console do usúario o ano que ele nasceu e o ano atual, após isso chame uma função passando esses valores,
// por fim mostre em um alert o resultado da subtração desses valores trazendo consequentemente a idade dele em um texto concatenado:
//Sua idade é de (X) anos"
var anoNascimento = prompt("Qual é o ano do seu nascimento?");

var anoAtual = prompt("Qual é o Ano atual?")

function calcularIdade(anoNascimento, anoAtual) {
  return anoAtual - anoNascimento;
}

var idade = calcularIdade(anoNascimento, anoAtual);

alert("Sua idade é de " + idade + " anos.");