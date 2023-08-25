//Capturar o evento de submti do formulario
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const calculo = nivelIMC(imc);

  const msg = `Seu IMC é ${imc} (${calculo})`;

  setResultado(msg, true);
});

function nivelIMC(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc < 18.5) {
    return nivel[0];
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return nivel[1];
  }
  if (imc >= 25 && imc <= 29.9) {
    return nivel[2];
  }
  if (imc >= 30 && imc <= 34.9) {
    return nivel[3];
  }
  if (imc >= 35 && imc <= 39.9) {
    return nivel[4];
  }
  if (imc > 40) {
    return nivel[5];
  }
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, valido) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaParagrafo();

  if (valido) {
    p.classList.add("paragrafo-result");
  } else {
    p.classList.add("paragrafo-result-wrong");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
