const nomes = ["Maria", "Joao", "Eduardo", "Gabriel", "Julia"];

// nomes.splice(indice, delete, elem1, elem2, ...);

// console.log(nomes);

// simulando o pop()
// const removidos = nomes.splice(-1, 1);

// simulando o shift()
// const removidos = nomes.splice(0, 1);

// simulando o push()
// const removidos = nomes.splice(Number.MAX_VALUE, 0, "Pedro");

// simulando o unshift()
const removidos = nomes.splice(Number.MIN_VALUE, 0, "Pedro");

// const removidos = nomes.splice(-2, Number.MAX_VALUE /* remove até o valor máximo da array */);

// console.log(nomes);
console.log(nomes);