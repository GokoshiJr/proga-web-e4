const mostrarListas = () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const num3 = document.getElementById('num3').value;
  const num4 = document.getElementById('num4').value;
  let elementos = [num1, num2, num3, num4];
  let repetidos = elementosRepetidos(elementos);

  if (repetidos.length >= 1) {
    document.getElementById('pares').innerHTML = `Error (Numeros repetidos)`;
  } else {
    let numPar = pares(elementos);
    let primo = primos(num1) + primos(num2) + primos(num3) + primos(num4);
    let noPrimo = 4 - primo;
    let estatusNum = estatus(elementos);
    let multiplos = multiplo2(elementos);

    document.getElementById(
      'pares'
    ).innerHTML = `Pares: ${numPar[0]}, Impares: ${numPar[1]}`;

    document.getElementById('primos').innerHTML = `Primos: ${primo}
      , No Primos: ${noPrimo}`;

    document.getElementById(
      'estatus'
    ).innerHTML = `Positivos: ${estatusNum[0]}, Negativos : ${estatusNum[1]}, Neutros: ${estatusNum[2]}`;

    document.getElementById(
      'multiplo2'
    ).innerHTML = `Multiplo de dos: ${multiplos}`;
  }
};

const multiplo2 = (numberArray) => {
  let multiplo = 0;
  numberArray.forEach((element) => {
    if (element % 2 === 0 && element != 0) {
      multiplo++;
    }
  });

  return multiplo;
};

const pares = (numberArray) => {
  let par = 0;
  let impar = 0;

  numberArray.forEach((element) => {
    if (element % 2 === 0) {
      par++;
    } else {
      impar++;
    }
  });

  let result = [par, impar];
  return result;
};

const primos = (numero) => {
  let divisible = 0;
  let numero1 = Math.abs(Number(numero));

  for (let i = 1; i < numero1 + 1; i++) {
    if (numero1 % i === 0) {
      divisible++;
    }
  }

  if (divisible === 2) {
    return true;
  } else {
    return false;
  }
};

const elementosRepetidos = (elementos) => {
  let repetidos = [];
  let temporal = [];

  elementos.forEach((value, index) => {
    temporal = Object.assign([], elementos);
    temporal.splice(index, 1);
    if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) == -1)
      repetidos.push(value);
  });

  return repetidos;
};

const estatus = (numberArray) => {
  let numeros = numberArray;
  let positivos = 0;
  let negativos = 0;
  let neutros = 0;

  for (let i = 0; i < numeros.length; i++) {
    num = Number(numeros[i]);
    if (num === 0) {
      neutros++;
    } else if (num > 0) {
      positivos++;
    } else {
      negativos++;
    }
  }
  let result = [positivos, negativos, neutros];
  return result;
};
