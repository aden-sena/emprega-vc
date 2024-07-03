painel = document.getElementById("painel")
info = document.getElementById("info")
icones = document.getElementsByClassName("icones")

desligarPainel()

/*
    Função que recebe o id de quem clicou nele e então seleciona a informação para exibir e mantém o ícone ativo.
*/
function exibirInfo(id) {
    ligarPainel()
    normal()

    window.location.href = "#icones"

    switch(id) {
        case 0:
            info.innerHTML = `
            <h3>Seja objetivo e conciso</h3> 
            <p>Mantenha o currículo em uma ou duas páginas, dependendo da sua experiência.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 1:
            info.innerHTML = `
                <h3>Faça um currículo para cada vaga pretendida</h3> 
                <p>Adapte seu currículo para destacar as habilidades e experiências mais relevantes para cada posição.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 2:
            info.innerHTML = `
                <h3>Contato</h3>
                <p>Fique atento ao telefone e e-mail informado no seu currículo, o recrutador vai tentar entrar em contato, se não atender ou responder com brevidade pode perder a oportunidade.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 3:
            info.innerHTML = `
                <h3>Formato Claro e Profissional</h3> 
                <p>Use um layout limpo, com fontes legíveis e seções bem definidas.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 4:
            info.innerHTML = `
                <h3>Revisão e Ortografia</h3> 
                <p>Revise o currículo várias vezes para corrigir erros de gramática e ortografia.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break
        
        case 5:
            info.innerHTML = `
                <h3>Consistência</h3> 
                <p>Certifique-se de que as informações são consistentes e de fácil leitura.</p>
                
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 6:
            info.innerHTML = `
                <h3>Foto</h3>
                <p>Colocar apenas quando solicitado.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 7:
            info.innerHTML = `
                <h3>Currículo em formato PDF</h3> 
                <p>Mantenha seu currículo em formato PDF, assim a formatação original será preservada ao abrir o arquivo em diferentes dispositivos.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break

        case 8:
            info.innerHTML = `
                <h3>Utilize um e-mail profissional:</h3> 
                <p>Ao enviar seu currículo por e-mail, utilize um endereço de e-mail profissional que seja fácil de lembrar e que não contenha apelidos ou palavras informais.</p>
                
                <img src="assets/img/icones-curriculo/emailenviado.png" id="emailEnviado">
                <h3>Envio por e-mail:</h3>
                <p>Coloque o nome da vaga no assunto e no corpo do e-mail, informe a vaga que está enviando seu currículo.</p>
            `

            icones[id].classList.add('iconeAtivo')
        break
    }
}

function ligarPainel() {
    painel.style.display = "unset"
}

function desligarPainel() {
    painel.style.display = "none"
    normal()
}

function normal() {
    for(i = 0; i < 9; i++) {
        icones[i].classList.remove('iconeAtivo')
    }
}