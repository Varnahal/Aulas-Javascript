let amigo = {
    nome:'josé',
    idade:18,
    peso:200,
    engordar(p =0){
        this.peso += p;
    }
}
amigo.engordar(150);
console.log(amigo.nome +' pesa '+amigo.peso+'KG');