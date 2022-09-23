class carro{
    corCarro = 'sem cor';
    Modelo = 'sem modelo';
    marca = 'sem marca';
    ligado = false;//desligado
    static alerta = true;
    constructor() {
        //console.log('eu sou um carro')
    }
    set setCor(c){
        this.corCarro = c;
    }
    get getCor(){
        return this.corCarro
    }
    set setMarca(c){
        this.marca = c;
    }
    get getMarca(){
        return this.marca  
    }
    set setModelo(c){
        this.Modelo = c;
    }
    get getModelo(){
        return this.Modelo
    }
    set setAlerta(t){
        carro.alerta = t
    }

    ligar(){
        this.ligado = true
    }
    deligar(){
        this.ligado = false
    }
    info(){
        console.log(`A cor do carro é: `+this.getCor+`\nO Modelo do carro é: `+this.getModelo+`\nA marca do carro é: ${this.marca}`)
        console.log(this.ligado ? "O carro está: ligado" : "O carro está: desligado")
        console.log('Alerta: '+ (carro.alerta ?'ligado':'desligado'))
        console.log('--------------------------------------')
    }
}
class carrocomb extends carro{

}
carro.prototype.potencia = 0
carro.prototype.info2 = ()=>{//pode sobrescrever caso o mesmo nome de uma função já exixtente 
    console.log('potencia: '+ this.potencia)
}
carro.prototype.setpot = (p)=>{
    this.potencia = p;
}
let c1=new carro();
c1.setpot(100)
c1.info()
c1.info2()
