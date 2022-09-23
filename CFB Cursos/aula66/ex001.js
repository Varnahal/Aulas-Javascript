let num = [1,4,9,16,25];
let raiz = num.map(Math.sqrt);

for(n of raiz){
    console.log(n)
}
//function dobra(n){
//   return n*2
//}
let dobros = num.map((n)=>{
    return n*2
})
for(n of dobros){
    console.log(n)
}