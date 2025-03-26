let amigo = {nome: 'José',
    sexo: 'F',
    peso: 85,
    engordar(p=0){
        if(this.peso < p){
            console.log(`${this.nome} possui ${this.peso}Kg`)
            console.log(`Você deve engordar ${p - this.peso}Kg`)
        } else {
            console.log(`${this.nome} possui ${this.peso}Kg`)
            console.log(`Você deve emagrecer ${this.peso - p}Kg`)
        }
    }
}

if (amigo.sexo == 'M'){
    amigo.engordar(80)
} else {
    amigo.engordar(65)
} 
