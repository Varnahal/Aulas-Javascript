function verificar(){
    var nastxt = document.getElementById('nas').value;
    var res = document.getElementById('res');
    var date = new Date();
    var year = date.getFullYear();
    var img = document.createElement('img');
    img.src = 'jose.png'
    img.style.width = '100px';
    img.style.height = '100px';
    if(nastxt.length == 0 || nastxt > year){
        alert('ERRO');
    }else{
       var age = year - nastxt; 
       var fsex = document.getElementsByName('sexo');
       if(fsex[0].checked){
        var genero = 'Homem';
       }else if(fsex[1].checked){
        var genero = 'Mulher';
       }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `${genero + age}<br>`
    res.appendChild(img);
}