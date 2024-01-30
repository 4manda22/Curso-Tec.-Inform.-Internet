<<<<<<< HEAD
function interruptor(){
    let elemento = document.getElementById("luz")

    if(elemento.src.includes("pic_bulboff.gif")){
        elemento.src = "pic_bulbon.gif"
    }else{
        elemento.src = "pic_bulboff.gif"
    }
}
=======
function alterar(){
   if (document.getElementById("titulo").textContent.includes("O")){
    alert("deu certo")
   }else{
    alert("não deu certo")
   }
}
>>>>>>> b540af05070bd99f648a7fffc1e405dd1e5c4a13
