function funcaoZ () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcaoZ(1,2,3,4,5);

// ou 

// funcao("valor", 1, 2, 3, 4, 5, 6, 7, 8);

// fazer a desestruturação

// function funcao ({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// let obj = {nome: "Luiz", sobrenome: "Otávio", idade: 20};
// funcao(obj);

// rest operator 

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "*") acumulador *= numero;
        if (operador === "/") acumulador /= numero;
    }

    console.log(acumulador);
}

conta("*", 1, 20, 30, 40, 50);

// arguments nao tem na função arrow