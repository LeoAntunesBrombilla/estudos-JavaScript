// Retorna o "valor mesmo"

console.log("Leonardo Antunes" && 0 && "Maria"); //  nesse caso o 0

// elementos que avaliam em falso

/*
false
FALSY
0 
"" '' ``
null / undefined
NaN
*/

// Usando falsys como condicionais

// Usando o AND

// function falaOi () {
//     return "Oi";
// }

// const vaiExecutar = "Joaozinho";

// console.log(vaiExecutar && falaOi());

// Usando o OR

// const corUsuario = null;
// const corPadrao = corUsuario || "preto";

const corUsuario = "vermelho";
const corPadrao = corUsuario || "preto";

console.log(corPadrao);