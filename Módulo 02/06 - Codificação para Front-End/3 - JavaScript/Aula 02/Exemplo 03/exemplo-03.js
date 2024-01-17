function somarUm(){
    let elemento = document.getElementById ("t1")
   //alert (element.textContent) 
   elemento.textContent = parseFloat(elemento.textContent) + 1 
}
function subtrair(){
    let elemento = document.getElementById ("t2")
    elemento.textContent = parseFloat(elemento.textContent) - 1
}