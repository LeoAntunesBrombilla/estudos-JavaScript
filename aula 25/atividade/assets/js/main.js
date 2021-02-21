function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resposta");
  let IMC;

  function recebeEvento(evento) {
    evento.preventDefault();

    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    function calcIMC(peso, altura) {
      // console.log(peso)
      // console.log(isNaN(peso))
      if (isNaN(peso)) {
        resultado.innerHTML = `Peso inválido`;
        document.querySelector(".resposta").style.backgroundColor = "red";
      } else if (isNaN(altura)) {
        resultado.innerHTML = `Altura inválida`;
        document.querySelector(".resposta").style.backgroundColor = "red";
      }
      IMC = peso / (altura * altura);
      return IMC;
    }

    calcIMC(peso.value, altura.value);

    if (IMC < 18.5) {
      resultado.innerHTML = `Seu IMC é ${IMC} (Abaixo do peso)`;
      document.querySelector(".resposta").style.backgroundColor = "green";
    } else if (IMC <= 24.9) {
      resultado.innerHTML = `Seu IMC é ${IMC} (Peso normal)`;
      document.querySelector(".resposta").style.backgroundColor = "green";
    } else if (IMC <= 29.9) {
      resultado.innerHTML = `Seu IMC é ${IMC} (Sobrepeso)`;
      document.querySelector(".resposta").style.backgroundColor = "green";
    } else if (IMC <= 34.9) {
      resultado.innerHTML = `Seu IMC é ${IMC} (Obesidade grau 1)`;
      document.querySelector(".resposta").style.backgroundColor = "green";
    } else if (IMC <= 39.9) {
      resultado.innerHTML = `Seu IMC é ${IMC} (Obesidade grau 2)`;
      document.querySelector(".resposta").style.backgroundColor = "green";
    } else if (IMC >= 40) {
      resultado.innerHTML = `Seu IMC é ${IMC} (Obesidade grau 3)`;
      document.querySelector(".resposta").style.backgroundColor = "green";
    }
  }

  form.addEventListener("submit", recebeEvento);
}

meuEscopo();
