let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/*
for(pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
*/

valores.sort()
console.log(`O vetor organizado em ordem crescente ficou assim: ${valores}`)

for(let pos in valores){
    console.log(`O valor na posição ${pos} é: ${valores[pos]}`)
}

// Isso se lê assim:  Para cada pos dentro de valores, imprima (O valor na posição x é y)