let colab = '{"colaboradores":['+
'{"nome":"Bruno","salario":10000,"idade":40},'+
'{"nome":"Blendasia","salario":13500,"idade":32},'+
'{"nome":"Clixiston","salario":8200,"idade":25},'+
'{"nome":"Flernadis","salario":35000,"idade":38},'+
'{"nome":"Nilsetucus","salario":5000,"idade":21}'+
']}'

let c_obj =JSON.parse(colab)

console.log(c_obj.colaboradores);