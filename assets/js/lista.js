iconList = document.getElementsByClassName("iconList")

for(i = 0; i < iconList.length; i++) {
    //Ícone com setinha pra baixo
    iconList[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480-360 280-560h400L480-360Z"/></svg>`
}

//Recebe o id da lista e índice(i) da lista para ser exibido
function verificarLista(id, i) {
    lista = document.getElementById(id)

    if(lista.style.display == "unset") {
        fechar(lista)
        //Ícone com setinha pra baixo
        iconList[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480-360 280-560h400L480-360Z"/></svg>`
    }
    else {
        abri(lista)
        //Ícone com setinha pra cima
        iconList[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="m280-400 200-200 200 200H280Z"/></svg>`
    }
}

function abri(lista) {
    lista.style.display = "unset"
}

function fechar(lista) {
    lista.style.display = "none"
}