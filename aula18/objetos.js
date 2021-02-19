// const pessoa1 = {
//     nome: "Luiz",
//     sobrenome: "Miranda",
//     idade: 25,
// };

// const pessoa2 = {
//     nome: "Maria",
//     sobrenome: "Oliveira",
//     idade: 55,
// };

// console.log(pessoa1.nome);

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     };
// }

// Se for nome: nome, tipo a primeira igual a segunda da pra abreviar


// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }



// const pessoa1 = criaPessoa("Luiz", "Otavio", 25);
// const pessoa2 = criaPessoa("Maria", "Oliveira", 22);
// const pessoa3 = criaPessoa("Roberto", "silva", 55);
// const pessoa4 = criaPessoa("Leonardo", "Castro", 18);
// const pessoa5 = criaPessoa("Rita", "Cardoso", 65);

// console.log(pessoa1.nome, pessoa2.sobrenome)


// Função dentro de objeto é MÉTODO

const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala () {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi`)
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();