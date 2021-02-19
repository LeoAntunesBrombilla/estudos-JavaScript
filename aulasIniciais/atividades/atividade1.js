const nome = "Leonardo";
const sobrenome = "Antunes";
const idade = 24;
const peso = 84;
const alturaEmM = 1.8;

let imc;
let anoNascimento;


imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

console.log(nome, sobrenome, "tem", idade, "anos", "pesa", peso, "kg");
console.log(`tem ${alturaEmM} e seu IMC é de ${imc}`)
console.log(nome + " nasceu em " + anoNascimento);

