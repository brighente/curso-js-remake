var idade = 16
// if(idade < 18) {
//     if(idade >= 16){
//         console.log('Voto Opcional')
//     } else {
//         console.log('Não Vota')
//     }
// } else {
//     console.log('Vota')
// }

// Ou fazer dessa maneira

if(idade < 16){
    console.log('Não Vota')
    } else if(idade < 18) {
        console.log('Voto Opcional')
    } else {
        console.log('Voto Obrigatório')
    }