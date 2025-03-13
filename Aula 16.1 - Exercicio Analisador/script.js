let vet = []
let res = document.getElementById('res')
let lista = document.getElementById('lista')

function adicionar(){
    
    let n = Number(document.getElementById('number').value)
    let item = document.createElement("option")

    if(n <= 0 || n > 100){
        window.alert('[ERRO], valor inválido ou item já adicionado!')
    } else if(vet.indexOf(n) != -1) {
            window.alert('[ERRO], valor inválido ou item já adicionado!')
    } else {
        item.text = `O valor ${n} foi adicionado.`
        lista.appendChild(item)
        vet.push(n)
    }  
    
}




function finalizar(){ 

    let soma = 0;

    for(let pos in vet){
        soma += vet[pos]
    }
    
    vet.sort((a, b) => a - b)  // método para organizar de maneira correta, já que o sort() analisa os valores como strings, por isso o erro

    res.innerHTML = `Ao todos temos ${vet.length} números cadastrados <br>`
    res.innerHTML += `O maior número cadastrado é ${vet[vet.length - 1]} <br>`
    res.innerHTML += `O menor número cadastrado é ${vet[0]} <br>`
    res.innerHTML += `A soma de todos os valores é ${soma} <br>`
    res.innerHTML += `A média de todos os valores é ${soma/vet.length}`

    
}