const calcular = () => {
  let entrada = Number($input.value);
  let $fila2 = cargarFilas('2');
  let $fila1 = cargarFilas('1');
  let activo1 = quienActivo($fila1);
  let activo2 = quienActivo($fila2);
  let salida = operaciones(activo1, activo2, entrada);
  return salida;
};

const operaciones = (activo1, activo2, entrada) => {
  let result = 0;
  let unitEntrada = getUnidad(activo1);
  let unitSalida = getUnidad(activo2);
  let sec = segundos(activo1, entrada);
  if (getUnidad(activo1) === getUnidad(activo2)) {
    result = Number(entrada);
  } else if (getUnidad(activo2) === 'Segundos') {
    result = sec;
  } else if (getUnidad(activo2) === 'Minutos') {
    result = sec / 60;
  } else if (getUnidad(activo2) === 'Horas') {
    result = sec / (60 * 60);
  } else if (getUnidad(activo2) === 'Dias') {
    result = sec / (60 * 60 * 24);
  } else if (getUnidad(activo2) === 'Semanas') {
    result = sec / (60 * 60 * 24 * 7);
  } else if (getUnidad(activo2) === 'Meses') {
    result = sec / (60 * 60 * 24 * 7 * 4.345238095);
  } else if (getUnidad(activo2) === 'Years') {
    result = sec / (60 * 60 * 24 * 7 * 4.345238095 * 12);
  }
  return {resultado: result, entrada: unitEntrada, salida: unitSalida};
};

const cargarFilas = (fila) => {
  let $checkboxFila = [];
  for (let i = 0; i < 7; i++) {
    let radio = document.getElementById(`fila${fila}_radio${i + 1}`);
    $checkboxFila[i] = {radio};
  }
  return $checkboxFila;
};

const quienActivo = ($arrayRadio) => {
  let id = '';
  for (let i = 0; i < 7; i++) {
    if ($arrayRadio[i].radio.checked == true) {
      id = $arrayRadio[i].radio.id;
      $arrayRadio[i].fila = id.slice(4, 5);
      $arrayRadio[i].radio = id.slice(11, 12);
      return {
        fila: String($arrayRadio[i].fila),
        radio: String($arrayRadio[i].radio),
      };
    }
  }
};

const limpiar = () => {
  $output.value = 0;
  $input.value = 0;
  let $inicial1 = document.getElementById('fila1_radio1');
  let $ini1 = {$inicial1};
  $ini1.$inicial1.checked = true;
  let $inicial2 = document.getElementById('fila2_radio1');
  let $ini2 = {$inicial2};
  $ini2.$inicial2.checked = true;
  $small1.innerHTML = `Unidad: Segundos `;
  $small2.innerHTML = `Unidad: Segundos`;
};

const getUnidad = ({radio}) => {
  let unidad = '';
  switch (radio) {
    case '1':
      unidad = 'Segundos';
      break;
    case '2':
      unidad = 'Minutos';
      break;
    case '3':
      unidad = 'Horas';
      break;
    case '4':
      unidad = 'Dias';
      break;
    case '5':
      unidad = 'Semanas';
      break;
    case '6':
      unidad = 'Meses';
      break;
    case '7':
      unidad = 'Years';
      break;
  }
  return unidad;
};

const segundos = ({radio}, entrada) => {
  let result = 0;
  switch (radio) {
    case '1':
      result = entrada;
      break;
    case '2':
      result = entrada * 60;
      break;
    case '3':
      result = entrada * (60 * 60);
      break;
    case '4':
      result = entrada * (60 * 60 * 24);
      break;
    case '5':
      result = entrada * (60 * 60 * 24 * 7);
      break;
    case '6':
      result = entrada * (60 * 60 * 24 * 7 * 4.345238095);
      break;
    case '7':
      result = entrada * (60 * 60 * 24 * 7 * 4.345238095 * 12);
      break;
  }
  return result;
};

const conversion = () => {
  let {resultado, entrada, salida} = calcular();
  $output.value = resultado.toFixed(2);
  $small1.innerHTML = `Unidad: ${entrada} `;
  $small2.innerHTML = `Unidad: ${salida}`;
};

let $input = document.getElementById('conversionInput');
let $output = document.getElementById('conversionOutput');
let $small1 = document.getElementById('small1');
let $small2 = document.getElementById('small2');
