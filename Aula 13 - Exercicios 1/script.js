function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes().toString().padStart(2, '0') // Garantir que os minutos tenham duas casas decimais
    var body = document.getElementById('body')

    msg.innerHTML = `Agora são exatamente ${hora}:${minutos}`

}


if(hora >=0 && hora < 12){
    // Manhã

    imagem.src = './img/manha.png'
    body.style.background = '#A7E9AF'
} else if(hora <= 18){
    // Tarde

    imagem.src = './img/tarde.png'
    body.style.background = '#FFB347'
} else {
    // Noite

    imagem.src = './img/noite.png'
    body.style.background = '#0D1B2A'
}