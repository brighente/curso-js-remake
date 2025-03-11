// Manipulando e criando tag img na div

let imgContainer = document.getElementById('img')
let img = document.createElement("img")
imgContainer.appendChild(img)

// Função de coisas que acontecem após o clique em Cadastrar

function cadastrar(){
    let nome = document.getElementById('nome').value
    let ano = Number(document.getElementById('ano').value)

    let agora = new Date()
    let anoAtual = agora.getFullYear()
    let idade = anoAtual - ano

    // Parte de criar campos

    let text = document.getElementById('text')
    let sexo = document.getElementsByName('sexo')
    
    if(sexo[0].checked){
        text.innerHTML = `<br>Bem vindo, ${nome}! <br>Sua idade provavelmente é ${idade} anos e você é do sexo Masculino.`
        text.style.textAlign = 'center'

        if(idade >= 0 && idade <= 12){
            // imagem criança
            img.src = './img/piá.png'
        } else if(idade <=18){
            // imagem adolescente
            img.src = './img/guri.png'
        } else if(idade <=50){
            // imagem adulto
            img.src = './img/adulto.png'
        } else {
            // imagem velho
            img.src = './img/velho.png'
        }
    } else if(sexo[1].checked){
        text.innerHTML = `<br>Bem vinda, ${nome}! <br>Sua idade provavelmente é ${idade} anos e você é do sexo Feminino.`
        
        text.style.textAlign = 'center'

        if(idade >= 0 && idade <= 12){
            // imagem criança
            img.src = './img/piá muie.png'
        } else if(idade <=18){
            // imagem adolescente
            img.src = './img/guria.png'
        } else if(idade <=50){
            // imagem adulto
            img.src = './img/adulta.png'
        } else {
            // imagem velho
            img.src = './img/velha.png'
        }
    }
}

