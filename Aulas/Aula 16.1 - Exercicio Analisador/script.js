let vet = []
let res = document.getElementById('res')
let lista = document.getElementById('lista')

function adicionar(){
    
    let n = document.getElementById('number')
    let num = Number(n.value)
    let item = document.createElement("option")

    if(num <= 0 || num > 100 || vet.indexOf(num) != -1){
        window.alert('[ERRO], valor inválido ou item já adicionado!')
    } else {
        item.text = `O valor ${num} foi adicionado.`
        lista.appendChild(item)
        vet.push(num)
        res.innerHTML = ''
    } 

    n.value = ''  // Limpa o campo após adicionar
    n.focus()  // Faz continuar selecionado o campo do numero
}
function finalizar(){
    let soma = 0;
    
    if(vet.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {

        let total = vet.length

        for(let pos in vet){
            soma += vet[pos]
        }
        
        vet.sort((a, b) => a - b)  // método para organizar de maneira correta, já que o sort() analisa os valores como strings, por isso o erro

        res.innerHTML = `Ao todos temos ${total} números cadastrados <br>`
        res.innerHTML += `O maior número cadastrado é ${vet[total - 1]} <br>`
        res.innerHTML += `O menor número cadastrado é ${vet[0]} <br>`
        res.innerHTML += `A soma de todos os valores é ${soma} <br>`
        res.innerHTML += `A média de todos os valores é ${soma/total}`
    }
}