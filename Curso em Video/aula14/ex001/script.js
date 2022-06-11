function contar(){
    var inicio = document.getElementById('inicio').value;
    var final = document.getElementById('fim').value;
    var passo = document.getElementById('passo').value;
    if(inicio.length == 0 || final.length == 0 || passo.length == 0){
        document.getElementById('resultado').innerHTML = 'complete todas as caixas';
    }else{
        var i = Number(inicio);
        var f = Number(final);
        var p = Number(passo);
       if(inicio < final){
        for (i = i; i < f; i += p) {
            document.getElementById('resultado').innerHTML += i + '->';
            }
    }else{
        for (i = i; i > p; i -= p) {
            document.getElementById('resultado').innerHTML += i + '->';
            }
    }
    document.getElementById('resultado').innerHTML += 'Fim'; 
    }
    
    
}
