/**
    const array = [1,2,3,4,5,6,7,8,9,10];
    
    const arrayS = array.filter((n)=>{return n%2==0});
    console.log(array)
    console.log(arrayS)
*/
const data = [
    {id:0},
    {id:10},
    {id:4},
    {id:80},
    {id:null},
    {id:'undefined'},
    {},
    {id:'undefined'},
];
console.log(data.filter((n)=>{return n.id ==10}));
let p = data.map((n)=>{
    return n.id+2
})
console.log(p);