// (condicao) ? "valor verdadeiro" : "valor para falso";


const pontuaUsuario = 1001;

const nivelUsuario = pontuaUsuario >= 1000 ? "Usuário VIP" : "Usuario normal";
console.log(nivelUsuario);

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

// if(pontuaUsuario >= 100) {
//     console.log("Usuario VIP");
// } else {
//     console.log("Usuario normal")
// }

