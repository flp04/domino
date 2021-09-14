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
filipe = new Jogador("Filipe", "Batata", "filipe.husak87@gmail.com", "11 97613-5815");
filipe.getNome();