function mostrarDatos(id) {
  mensaje = document.getElementById('mostrar');
  if (id === 'E1') {
    msg =
      'Por medio de un formulario y javascript, elabore el siguiente cronometro';
  } else if (id === 'E2') {
    msg =
      'Elabore una aplicacion en Javascript, que dada una lista de cuatro numeros ingresados por el usuario, calcule cuantos son: Pares o Impares, Primos o no, Positivos Negativos o Neutros, Multiplos de 2. Adicionalmente no debe permitir ingresar un numero repetido en la lista';
  } else if (id === 'E3') {
    msg =
      'Por medio de un formulario, construya el juego de la vieja. Debe controlar cada usuario que juega (Nombre del Usuario, con el fin de senalar quien gano)';
  } else if (id === 'E4') {
    msg =
      'Elabore una aplicacion que permita realizar conversiones de longitudes';
  }
  mensaje.innerHTML = msg;
}
