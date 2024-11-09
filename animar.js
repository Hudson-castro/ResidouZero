function animar(){
    const botao = document.getElementById('botao')
    botao.classList.toggle('ativar')
}

const menuDiv = document.getElementById('menu-mobile')
const botaAnimar = document.getElementById('botao')

menuDiv.addEventListener('click', animar )

function animar(){
    menuDiv.classList.toggle('abrir')
    botaAnimar.classList.toggle('ativo')

}