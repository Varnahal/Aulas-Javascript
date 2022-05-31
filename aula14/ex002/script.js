function contar(){
    var ntxt = document.querySelector('#inicio').value;
    var n = Number(ntxt);
    var res = document.querySelector('#resultado');
    var sel = document.querySelector('#sel');
    res.innerHTML = '';
    sel.innerHTML ='';
    for (let i = 0; i <= 10; i++) {
        let result = n * i;
        let opt = document.createElement('option');
        opt.text = n +'X'+ i + '=' + result;
        opt.value = 'tab'+i;
        sel.appendChild(opt);
        res.innerHTML += n +'X'+ i + '=' + result+ '<br>';
    }
    
}
