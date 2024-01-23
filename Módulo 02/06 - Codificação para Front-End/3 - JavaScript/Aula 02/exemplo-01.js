function Acionar (){
    if (document.getElementById("Luz").src.includes("pic_bulbon.gif")){
        document.getElementById("Luz").src= "pic_bulboff.gif"
    }else{
         document.getElementById("Luz").src = "pic_bulbon.gif"}
}