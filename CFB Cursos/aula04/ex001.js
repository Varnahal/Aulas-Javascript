function executar(){
    var num = [];
    num.push(1);
    num.push(2);
    num.push(3);
    num.push(4);
    num.push(5);
    num.push(6);

    var i = 0;
    while (i<num.length) {
        document.write(num[i]);
        
        i++
    }
    document.write('<br>')
    //----------Exemplo 2-------------------
    var mochila = [];
    mochila.push(['corda',4]);
    mochila.push(['pedra',40]);
    mochila.push(['faca',1]);
    
    var i = 0;
    var c = 0;
    while (i<mochila.length) {
        while (c<2) {
            if(c == 0){
                var bungas = 'item';
            }else{
                var bungas = 'quantidade'
            }
            document.write(`${bungas}:${mochila[i][c]} <br>`)  
            c++ 
        }
        i++
    }
}