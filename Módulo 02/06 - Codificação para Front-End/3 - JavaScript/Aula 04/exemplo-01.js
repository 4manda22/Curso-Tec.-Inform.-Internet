function clicou(){
    document.getElementById("t3").textContent = parseInt(Math.random() * 11 )

    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)
    document.getElementById("t3").style.color = `rgb(${r}, ${g}, ${b})`

}

