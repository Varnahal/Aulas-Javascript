function executar(){
    var tagsp = document.getElementsByTagName('p');//retorna todos os 'p' em forma de array sendo um objeto array contendo elementos dom em suas posições
    var tagspv = document.getElementsByTagName('p')[2];//o indice pode ser especificado aqui retornando somente o terceiro 'p'
    tagspv.style.color = 'red';
    document.write(tagsp[1].innerHTML)//o indice pode ser especificado aqui tambem
}