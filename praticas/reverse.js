let numeroEscolhido = parseInt(prompt("Digite um valor inteiro"));
console.log(numeroEscolhido)
let digito = 0;
let reverter = 0;

while(numeroEscolhido) {
    digito = numeroEscolhido % 10; // aqui conseguimos o ultimo digito do valor digitado pelo usuario
    reverter = (reverter * 10) + digito; // aqui pegamos o ultimo valor e adicionamos ele no começo invertendo a ordem
    numeroEscolhido = parseInt(numeroEscolhido / 10);  // aqui diminuimos a casa decimal para inverter o prox valor
}

console.log(reverter);
