// console.log não é o retorno da função

// function duplica(n) {
//     return n * 2;
// }

// function duplica(n) {
//     return n * 3;
// }

// function duplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(2));
