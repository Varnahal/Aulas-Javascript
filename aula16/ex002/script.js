var array = [];
function islista(n){//analisar se o numero já esta na lista
    var a = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] == n){
            a ++;
        }
    }
    if(a > 0){
        return true;
    }else{
        return false;
    }
}
function add(){//adcionar valor na lista 
    var numtxt = document.getElementById('num');
    var num = Number(numtxt.value);
    if(num == 0){
        alert('digite algum numero maior  que 0')
        numtxt.value = '';
        numtxt.focus();
    }else if(islista(num)){
        alert('digite uum numero diferente'+islista(num))
        numtxt.value = '';
        numtxt.focus();
    }else{
        var sel = document.getElementById('sel');
        var opt = document.createElement('option');
        var res = document.getElementById('resultado');
        opt.text = num
        opt.id='opt';
        sel.appendChild(opt);
        numtxt.value = '';
        res.innerHTML = '';
        numtxt.focus();
        
        for (let i = 0; i < sel.length; i++) {
        
            let numtxt = sel[i].value;
            let num = Number(numtxt);
            array[i] = num;
        }
    }
    finalizar()
    
}
    function finalizar(){
    var sel = document.getElementById('sel');
    var opt = document.getElementById('opt');
    var res = document.getElementById('resultado');
    if(sel.length < 1){
        alert('digite algum numero')
    }else{
    var media = 0;
    var soma = 0;
    for (let i = 0; i < sel.length; i++) {
        
        let numtxt = sel[i].value;
        let num = Number(numtxt);
        soma += num;
    }
    media = soma / sel.length
    array.sort(( function( a , b ){// para fazer o sort funcionar do jeito que deveria
        return a-b;
      }));
    //console.log(array);
    var min = array[0];
    var tm = sel.length - 1;
    var max = array[tm];
    //console.log(tm)
    res.innerHTML ='vc colocou '+ sel.length +' numeros<br>';
    res.innerHTML +='a soma de todos os valores é  '+ soma+'<br>';
    res.innerHTML +='a media de todos os valores é  '+ media+'<br>';
    res.innerHTML +='o menor valor foi  '+ min+'<br>';
    res.innerHTML +='o maior valor foi  '+ max+'<br>';
    } 
}
function onPress_ENTER()//o script funciona se precionar o enter
{
        var keyPressed = event.keyCode || event.which;

        //if ENTER is pressed
        if(keyPressed==13)
        {
            add()
            keyPressed=null;
        }
        else
        {
            return false;
        }
}

