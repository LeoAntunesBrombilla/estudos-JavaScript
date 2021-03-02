// (Function Hoisting)

falaOi();

function falaOi() {
    console.log("Oie");
}

// função é first-class object 

// Arrow function

const funcaoArrow = () => {
    console.log("arrow function")
}

//dentro de um objeto

const obj = {
    falar() {
        console.log("função dentro do objeto")
    }
}

obj.falar();