





/* FUNÇÃO VOID */

function digaMeuNome(){
    const name = 'Rodolfo'

    console.log(name)
}

digaMeuNome()


/* FUNÇÃO COM PARÂMETROS */

function soma(num1, num2){
    resultado = num1 + num2

    console.log(resultado)
}

soma(2, 5)


/* FUNÇÃO COM RETURN */

function estaEndividado(receita, gastos){
    if(receita > gastos){
        return 'Você está no AZUL'
    } else {
        return 'Você está no VERMELHO'
    }
}

let situacao = estaEndividado(10000, 2000)
console.log(situacao)

/* ARROW FUNCTION */

let digaMeuNome2 = () => {  // Forma Moderna de escrever funções
    let nome = 'Juca'

    console.log(nome)
}

digaMeuNome2();