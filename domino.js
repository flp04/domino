class Pedra{
    constructor(v1, v2){
        this.v1 = v1;
        this.v2 = v2;
    }
    mostrarPedra(){
        console.log(this.v1 + "|" + this.v2);
    }
}

const domino = Array();
function criarDomino(){
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
}
criarDomino();
console.debug(domino);
console.log(domino.length);

//console.log(domino[1].mostrarPedra());