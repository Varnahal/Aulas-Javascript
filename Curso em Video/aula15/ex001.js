var a = ['arroz',1,'feijão'];
a.push('penis gigantesco');//adciona um novo elemento ao array na ultima posição
a.sort();//organiza os valores em ordem crescente
var pos = a.indexOf('penis gigantesco');// diz em que posição algum valor esta
console.log(pos);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
for (const key in a) {
    console.log(a[key]);
}