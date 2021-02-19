const numero = prompt("Digite um numero");

const numeroTitulo = document.getElementById("Numero");
const texto = document.getElementById("texto");
const NotANumber = document.getElementById("NaN");
const piso = document.getElementById("piso");
const teto = document.getElementById("teto");
const duasCasas = document.getElementById("duasCasas");


numeroTitulo.innerHTML = (Number(numero));
texto.innerHTML = `${(Number(numero)) ** (0.5)}`;
NotANumber.innerHTML = `${isNaN((Number(numero)))}`;
piso.innerHTML = `${Math.floor((Number(numero)))}`;
teto.innerHTML = `${Math.ceil((Number(numero)))}`;
duasCasas.innerHTML = `${(Number(numero)).toFixed(2)}`;


