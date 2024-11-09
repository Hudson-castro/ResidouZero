
const menuDiv = document.getElementById('menu-mobile')
const botaoAnimar = document.getElementById('botao')

menuDiv.addEventListener('click', animar )

function animar(){
    menuDiv.classList.toggle('abrir')
    botaoAnimar.classList.toggle('ligar')

}







