function contart(n){
    let cont = 0;
    let t = setTimeout(()=>{
        for (let i = 0; i < n; i++) {
        cont ++
    }
    },2000)
    
    return cont
}

function contarP(n){
    let cont = 0;
    let p = new Promise((res,rej)=>{
        for (let i = 0;i<n;i++){
            cont++
        }
        if(cont == n){
            res(cont)
        }else{
            rej('ERRO')
        }
    })
    return p
}
async function contarPA(n){
    const a = await contarP(n)
    console.log(a)
}

function contarPT(n){
    let cont = 0;
    let p = new Promise((res,rej)=>{
        let t = setTimeout(()=>{
            for (let i = 0;i<n;i++){
                cont++
            }
            if(cont == n){
                res(cont)
            }else{
                rej('ERRO')
            }
        },2000);
    })
        
    return p
}

async function contarPTA(n){
    const r = await contarPT(n)
    console.log(r)
}

function somaposi(n1,n2){
    let p = new Promise((res,rej)=>{
        if(n1>=0 && n2>=0){
            res(n1+n2)
        }else{
            rej('ERRO: numero é menor que zero(negativo)')
        }
    })

    return p
}
contarPTA(9)
contarPA(99)
//console.log(contarP(10)
//    .then(sucesso => console.log('deu bom: '+sucesso))
//    .catch(erro => console.log(erro))    
//    )
//console.log(somaposi(2,-10).then(sucesso => console.log('deu bom: '+sucesso))
//    .catch(erro => console.log(erro)))    
//console.log(contarPT(10).then(sucesso => console.log('deu certo: '+sucesso)).catch(erro=>console.log(erro)))