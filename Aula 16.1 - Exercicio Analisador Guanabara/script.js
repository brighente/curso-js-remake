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
        vet.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(vet.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = vet.length
        
        let soma = 0
        let maior = vet[0]
        let menor = vet[0]
        for(let pos in vet){
            if(vet[pos] > maior){
                maior = vet[pos]
            }
            if(vet[pos]< menor){
                menor = vet[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${soma/tot}`
    }
}