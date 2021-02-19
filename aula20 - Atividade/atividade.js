function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];
  let count = 0;

  // form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //     alert(1);
  //     console.log("Enviado!");
  // };

  function recebeEvento(evento) {
    evento.preventDefault();
    
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    

    function criaPessoa(nome, sobrenome, peso, altura) {
      pessoas.push({nome, sobrenome, peso, altura});
    }

    criaPessoa(nome.value,sobrenome.value,peso.value,altura.value);

    console.log(pessoas)

    resultado.innerHTML += `${pessoas[count].nome} ${pessoas[count].sobrenome} ${pessoas[count].peso} ${pessoas[count].altura} <br />` 
    count++
  }

  form.addEventListener("submit", recebeEvento);
}

meuEscopo();
