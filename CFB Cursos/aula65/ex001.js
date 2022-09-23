let meuset = new Set([1,2,3]);//não insere valores iguais

meuset.add(4)
meuset.add(5)
meuset.add(6)
for(n of meuset){
    console.log(n)
}