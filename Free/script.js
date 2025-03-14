let num = document.querySelector('input#number')
let palpites = []
let res = document.getElementById('res')
let numSecreto;

function iniciar(){
    numSecreto = Math.floor(Math.random() * 50) + 1
}


function verificar(){
    let number = Number(num.value)
    if(number < 0 || number > 100 || palpites.indexOf(number) != -1){
        res.innerHTML = `Palpite<strong> INVÁLIDO!!</strong> Número fora do range estipulado!`
    } else {
        palpites.push(Number(number))
        num.value = ''
        num.focus()
        for(let pos in palpites){
            if(palpites[pos] > numSecreto){
                res.innerHTML = `Palpite<strong> MAIOR </strong>que o número secreto!`
            } else if(palpites[pos] < numSecreto){
                res.innerHTML = `Palpite<strong> MENOR </strong>que o número secreto!`
            } else {
                res.innerHTML = `<strong>PARABÉNS!!</strong> Você descobriu o número secreto!`
                res.innerHTML += `Para jogar novamente, clique no botão <strong>INICIAR JOGO</strong>!`
            }
        }
    }

}


