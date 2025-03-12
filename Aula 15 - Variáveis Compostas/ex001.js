let num = [5, 8, 2, 9, 3]

num.push(1) // Colocando o push depois do sort, ele adiciona no final do vetor, independente de ter sido arrumado a ordem, pois veio depois!
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)  
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
