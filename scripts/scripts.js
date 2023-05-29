function calcular(n1, n2) {
  n1 = parsefloat(document.getElementById("n1").value);
  n2 = parsefloat(document.getElementById("n2").value);
  seletor = document.getElementById("selector").value;

  switch (seletor) {
    case "+":
      calculo = n1 + n2;

      document.getElementById(
        "resultado"
      ).innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`;
      break;

    case "-":
      calculo = n1 - n2;

      document.getElementById(
        "resultado"
      ).innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`;
      break;

    case "x":
      calculo = n1 * n2;

      document.getElementById(
        "resultado"
      ).innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é = ${calculo}`;
      break;

    case "/":
      calculo = Math.round(n1 / n2);

      if (Number.isNaN(calculo)) {
        document.getElementById(
          "resultado"
        ).innerHTML = `insira um divisível válido!`;
      } else {
        document.getElementById(
          "resultado"
        ).innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}`;
      }
      break;
  }
}
