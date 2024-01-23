function clicou(){
    document.getElementById("t3").textContent = parseInt(Math.random() * 11 )

    let r = 40
    let g = 35
    let b = 200
    document.getElementById("t3").style.color = `rgb(${r}, ${g}, ${b})`

}

