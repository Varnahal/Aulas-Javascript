function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = 'Agrora são ' + hora + ' horas'
    if(hora >= 0 && hora < 12){
        img.src = 'dia';
        document.body.style.backgroundColor ='#f5e673'
    }else if(hora >=12 && hora < 18){
        img.src = 'tarde';
        document.body.style.backgroundColor ='#c5a068'
    }else{
        img.src = 'noite';
        document.body.style.backgroundColor ='#070624'
    }
}