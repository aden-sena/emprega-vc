menu_icon = document.getElementById("menu-icon")
menu = document.getElementById("menu")

//Condição para aparecer o icone do menu mobile
if(window.innerWidth < 700) {
    menuFechado()
}

menu_icon.addEventListener('click', () => menuStatus())

/*
    Função que verifica se o menu está visível ou não, e então chama o oposto dele.
    Se está vísivel(unset) desativa e vice-versa.
*/
function menuStatus() {
    if(menu.style.display == "unset") {
        menuFechado()
    }
    else {
        menuAtivo()
    }
}

function menuAtivo() {
    //Deixa o display vísivel
    menu.style.display = "unset"
    
    //Ícone de fechar o menu
    menu_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2B3185"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`
}

function menuFechado() {
    //Deixa o display invisível
    menu.style.display = "none"

    //Ícone de abrir o menu
    menu_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2B3185"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`
}

