function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo =document.getElementById('passo')

    let contagem = document.getElementById('contagem')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO], faltam dados!')
        
    } else {
        contagem.innerHTML = 'Contando: '
        
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pas = Number(passo.value)

        if(ini<f){
            // Contagem Crescente
            for(i=ini; i <= f; i += pas){
                contagem.innerHTML += `${i} &#x1F449; `
            }
        } else {
            // Contagem Decrescente
            for(i=ini; i >= f; i-= pas){
                contagem.innerHTML += `${i} &#x1F449; `
            }
        }

        contagem.innerHTML += `&#x1F3C1;`
        
    }

    

    

    
    

    
}