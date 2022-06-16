function executar(){
    var num = [];
    num.push(1);
    num.push(2);
    num.push(3);
    num.push(4);
    num.push(5);
    num.push(6);
    for (let i = 0; i < num.length; i++) {
        document.write(num[i]);
        
    }
    document.write('<br>')
    //----------Exemplo 2-------------------
    var mochila = [];
    mochila.push(['corda',4]);
    mochila.push(['pedra',40]);
    mochila.push(['faca',1]);
    
    for (let i = 0; i < mochila.length; i++) {
        document.write('<br><br>')
        for (let c = 0; c < 2; c++) {
            if(c == 0){
                var bungas = 'item';
            }else{
                var bungas = 'quantidade'
            }
            document.write(`${bungas}:${mochila[i][c]} <br>`)
            
        }
        
    }
}