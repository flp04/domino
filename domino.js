class Pedra{
    constructor(v1, v2){
        this.v1 = v1;
        this.v2 = v2;
    }
    mostrarPedra(){
        console.log(this.v1 + "|" + this.v2);
    }
}

function criarDomino(){
    var domino = Array();
    for(var v1=0;v1<8;v1++){
        for(var v2=v1+1;v2<7;v2++){
            var pedra = new Pedra(v1, v2);
            domino.push(pedra);
        }
    }
    for(var v=0;v<7;v++){
        var pedra = new Pedra(v,v);
        domino.push(pedra);
    }
    return domino;
}

class Mesa{
    constructor(){
        this.domino = criarDomino();
        this.descarte = [];
    }
}

class Jogador{
    constructor(nome, apelido, email, contato){
        this.nome = nome;
        this.apelido = apelido;
        this.email = email;
        this.contato = contato;
    }
    getNome(){
        console.log(this.nome);
    }
}
class JogadorDomino extends Jogador{
    mao = Array();
    mexerPedras(Mesa){
        mesa.domino = shuffleArray(mesa.domino);
    }
    pegarPedras(mesa){

    }
}

filipe = new JogadorDomino("Filipe");
filipe.getNome();
mesa = new Mesa();
filipe.mexerPedras(mesa);
console.debug(mesa.domino);