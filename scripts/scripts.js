function calcular() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let seletor = document.getElementById("selector").value;
  let calculo;

  switch (seletor) {
    case "+":
      calculo = n1 + n2;
      document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`;
      break;

    case "-":
      calculo = n1 - n2;
      document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`;
      break;

    case "*":
      calculo = n1 * n2;
      document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é = ${calculo}`;
      break;

    case "/":
      calculo = n1 / n2;
      if (Number.isNaN(calculo)) {
        document.getElementById("resultado").innerHTML = `Insira um divisor válido!`;
      } else {
        calculo = calculo % 1 === 0 ? parseInt(calculo) : calculo.toFixed(1);
        document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}`;
      }
      break;
  }
}
