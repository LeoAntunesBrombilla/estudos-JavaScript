function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("Otavio");

console.log(funcao());
console.dir(funcao2);

console.log(funcao(), funcao2())