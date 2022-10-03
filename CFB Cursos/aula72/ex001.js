// // let n1 = [10,20,30];
// // let n2 = [11,22,33,44,55];
// // let n3 = [...n1,...n2]
// const obj = {nome:'Daniel',energia:100,vida:3}
// const obj2 = {nome:'jose',energia:100,vida:5}
// const obj3 = {...obj,...obj2}

// console.log(obj3)
// const soma = (...v3)=>{
//     let sum = 0;
//     for(v of v3){
//         sum+=v;
//     }
//     return sum
// };
// let valores = [1,5,4,12,13]

// console.log(soma(...valores))
const objs = document.getElementsByTagName('p');
const objs2 = [...document.getElementsByTagName('p')];

objs2.forEach(element=>{
    console.log(element.outerHTML)
})

console.log(objs);
console.log(objs2);