let nome = document.getElementById('name')
let age = document.getElementById("age")
document.getElementById('send').addEventListener('click',sendinfo);
function sendinfo(){
    let obj = {
        nomea:nome.value,
        idade:age.value
    }
    let objJSON = JSON.stringify(obj);
    let xml = new XMLHttpRequest();

    xml.open('POST','receiver.php');
    xml.setRequestHeader('Content-Type','application.json');
    xml.send(objJSON);

}
