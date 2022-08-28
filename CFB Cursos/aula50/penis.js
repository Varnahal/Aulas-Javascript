var dv1 = document.getElementById('dv1');
window.addEventListener('load',inicia);
dv1.addEventListener('mouseover',troca);
dv1.addEventListener('mouseout',tira);
function inicia(){
    
}
function troca(){
    var obj = event.target;
    obj.style.backgroundColor = 'red'
}
function tira(){
    var obj = event.target;
    obj.style.backgroundColor = 'rgba(0, 0, 0, 0.174)'
}