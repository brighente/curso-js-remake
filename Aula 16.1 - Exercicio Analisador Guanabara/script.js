let vet = []
let res = document.getElementById('res')
let lista = document.getElementById('lista')
let num = document.querySelector('input#number')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, vet)){

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}