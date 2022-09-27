/**
    const data = [1,2,3,4,5,6,7,8,9,10];
    console.log(data.reduce((acc,n)=>{return acc+n},0))
*/
const users = [
    {nome:'Daniel',idade:17},
    {nome:'José',idade:18},
    {nome:'Gabriel',idade:18},
    {nome:'Leo',idade:18},
    {nome:'Roberto',idade:43},
];
const ageUsers = users.reduce((acc,n)=>{
    acc.push(n.idade)
    return acc
},[])
/**
    function tiraMedia(n){
        let ph = 0;
    
        for(let j of n){
            console.log(j)
            ph+=Number(j);
        }
        return ph / n.length
    }
*/
let ageUsersred = ageUsers.reduce((acc,n)=>{
    return acc +n
},0)

console.log(ageUsersred / ageUsers.length)