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
        this.descartes = [];
    }

    setDescartes(pedra){
        this.descartes.push(pedra);
    }
}

class Jogador{
    constructor(nome, apelido, email, contato){
        this.nome = nome;
    }
    getNome(){
        console.log(this.nome);
    }
}
class JogadorDomino extends Jogador{
    mao = Array();

    mexerPedras(mesa){
        // Loop em todos os elementos
    for(var i = 0;i < 3;i++){
        for(let i = mesa.domino.length - 1; i > 0; i--){
                // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [mesa.domino[i], mesa.domino[j]] = [mesa.domino[j], mesa.domino[i]];
        }
    }
    // Retornando array com aleatoriedade
    return mesa.domino;
    }
    pegarPedras(mesa){
        for(let i = 0;i < 7;i++){
            this.mao.push(mesa.domino.pop());
        }
    }
    jogar(pedra, mesa){
        mesa.setDescartes(pedra);
    }
}

filipe = new JogadorDomino("Filipe");
ryan = new JogadorDomino("Ryan");
mauricio = new JogadorDomino("Mauricio");
camilo = new JogadorDomino("Camilo");
mesa = new Mesa();
filipe.mexerPedras(mesa);
ryan.pegarPedras(mesa);
mauricio.pegarPedras(mesa);
camilo.mexerPedras(mesa);
camilo.pegarPedras(mesa);
filipe.pegarPedras(mesa);

filipe.jogar(filipe.mao[0], mesa);
ryan.jogar(ryan.mao[0], mesa);
mauricio.jogar(mauricio.mao[0], mesa);
camilo.jogar(camilo.mao[0], mesa);

//console.debug(filipe);
console.log(mesa.descartes);