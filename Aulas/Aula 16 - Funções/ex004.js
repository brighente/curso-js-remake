/*
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat
}

console.log(fatorial(3))

*/

// OU

function fatorial(n){  // Conceito de Recursividade, chamar a função dentro dela mesma
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))