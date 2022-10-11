// // let n1 = [10,30,20,40,50];
// // let n2 = [13,47,20,33,62];
// // let n3 = [...n1,...n2];
// const jogador1 = {'nome':'Daniel','energia':100,'vidas':3,'magia':150}
// const jogador2 = {'nome':'Jose','energia':100,'vidas':3,'velocidade':80}
// const jogador3 = {...jogador1,...jogador2}

// // console.log(n1)
// // console.log(n2)
// console.log(jogador3)
// const soma = (v1,v2,v3)=>{
//     return v1+v2+v3
// }
// let val = [1,54,7]
// console.log(soma(...val))//envia cada valor seprarado como um "for"
let textos = document.getElementsByTagName('p');
let textos2 = [...document.querySelectorAll('p')];

console.log(textos)