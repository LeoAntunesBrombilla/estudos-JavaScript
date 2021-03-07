// funcoes construtoras -> objetos
// funcoes fabricas -> objetos
// construtora -> Pèssoa (new)

function Pessoa (nome,sobrenome) {
    // privados
    const ID = 123456;

    const metodoInterno = function(){

    };

    // Atributos ou metodos publicos
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": sou um método");
    };
}

const p1 = new Pessoa("Luiz", "Otavio");
const p2 = new Pessoa("Leonardo", "Antunes");

console.log(p1.nome)
p2.metodo();


