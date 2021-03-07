function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,

    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // setter
    set nomeCompleto(valor) {
        valor = valor.split(" ");
        this.nome = valor.shift();
        this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${nome} está ${assunto}.`;
    },

    altura,

    peso,

    // getter

    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio", 1.8, 86);
// console.log(p1.imc);

p1.nomeCompleto = "Maria Oliveira Silva" ;
console.log(p1.nomeCompleto)
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 50);
console.log(p2.imc);
