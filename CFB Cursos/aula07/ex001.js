function executar(){
    let div = document.getElementById('memes');
    let butao = document.getElementById('pulo');
    div.style.transition = '1s';
    butao.onclick = function() {arroz()};
        div.style.transform = 'translateY(-200px)';
        setTimeout(() => {
          div.style.transform = 'translateY(0px)';
          
        }, 800);
        
        setTimeout(() => {
            butao.onclick = function(){executar()};
        }, 1700);
}