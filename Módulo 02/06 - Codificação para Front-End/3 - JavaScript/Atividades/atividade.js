//Q-1  faça um programa que imprime no console do navegador o nome que o usúario informar no prompt depois de 3 segundos.
/*

let nome = prompt("informe seu nome:")

setTimeout(inserir, 3000)

    function inserir(){

   console.log(nome)
}
*/

//Q-2  Faça um programa que chama a função somar passando 2 valores, depois retorne e mostre em um alert o resultado da multiplicação desses valores.
 /*
 function somar(a, b){
  return a * b 
 }
 alert(somar(5,8))
 */

//Q-3 Faça um programa que altera o valor de uma tag h2 no html, incrementando infinitamente o valor com +1 a cada 2 segundos.
/*
setInterval(somar, 2000)
function somar(){
  document.getElementById("t2").textContent++
}
*/


//Q-4 Crie uma tag H3 no HTML contendo o texto "Olá mundo" e faça com que a cor desse texto altere para uma cor aleatória a cada 4 segundos.
/*
setInterval(cor, 4000)
function cor(){
  document.getElementById("cores").textContent = " Olá mundo!" 

  let r = parseInt(Math.random() * 256)
  let g = parseInt(Math.random() * 256)
  let b = parseInt(Math.random() * 256)
  document.getElementById("cores").style.color = `rgb(${r}, ${g}, ${b})`

}
*/

  
//Q-5 Console do usúario o ano que ele nasceu e o ano atual, após isso chame uma função passando esses valores,
// por fim mostre em um alert o resultado da subtração desses valores trazendo consequentemente a idade dele em um texto concatenado:
//Sua idade é de (X) anos"

let nascimento = prompt("Digite o ano do seu nascimento:")
let atual = prompt("Digite o ano atual")

conta(atual, nascimento)
function conta(x, y){
  alert("Sua idade é de " + (x - y)  + " anos ")
}
