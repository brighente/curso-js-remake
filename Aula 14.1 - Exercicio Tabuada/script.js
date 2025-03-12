function gerarTabuada(){
    let number = document.getElementById('numero')
    let campoTabuada = document.getElementById('tabuada')

    campoTabuada.innerHTML = ''

    if(number.value.length == 0){
        window.alert('[ERRO], por favor informe um número!')
    } else {
        let num = Number(number.value)
        for(i=1; i<=10; i++){
            campoTabuada.innerHTML += `${num} x ${i} = ${num * i}\n`
            
        }
    }

    
    

    
}