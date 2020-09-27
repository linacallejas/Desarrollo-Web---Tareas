import {
    suma,
    resta,
    multi,
    division,
} from './operaciones';

// variable que imprime el resultado y que hacen las operaciones basicas
// siempre debe ser un texto quiere decir que los numeros deben estar en comillas
let resultado = '0';
// variable que deben usar para cuando presionen una operacion
let valorTemporal = 0;
// variable que deben usar para cuando presionen una operacion
let operacionSeleccionada = '';

// ---  NO TOCAR -- 
const pantalla = () => document.querySelector('.pantalla').innerHTML = `<span>${resultado}</span>`;
const numeros = () => {
  let response = '';

  for (let index = 0; index < 10; index++) {
    response += `
      <button data-id="${index}" class="numero">${index}</button>
    `;
  }

  response += `
      <button data-id="clear" class="numero">C</button>
    `;

  return response;
}

console.log(numeros());

const operaciones = () => {
  let response = '';
  const operacionesMat = [{
    id: 'suma',
    texto: '+'
  }, 
  {
    id: 'resta',
    texto: '-'
  }, 
  {
    id: 'multiplicacion',
    texto: 'x'
  }, 
  {
    id: 'division',
    texto: '&divide;'
  }, 
  {
    id: 'terminar',
    texto: '='
  }]

  for (let index = 0; index < operacionesMat.length; index++) {
    response += `
      <button data-id="${operacionesMat[index].id}" class="operacion">${operacionesMat[index].texto}</button>
    `;
  }

  return response;
}

pantalla();
document.querySelector('.numeros').innerHTML = numeros();
document.querySelector('.operaciones').innerHTML = operaciones();
// END ---  NO TOCAR --

// ejecutar operaciones
document.querySelector('.operaciones').addEventListener('click', (event) => {
  const operacion = event.target.getAttribute('data-id');

  if(operacion!==null){
      console.log(operacion);
     if(operacion!='terminar'){
         valorTemporal=resultado;
         resultado='0';
     } else { 
         if(operacionSeleccionada=='suma'){
             resultado=`${suma(parseInt(valorTemporal), parseInt(resultado))}`;
         } else if(operacionSeleccionada=='resta'){
            resultado=`${resta(parseInt(valorTemporal), parseInt(resultado))}`;
         } else if(operacionSeleccionada=='multiplicacion'){
            resultado=`${multi(parseInt(valorTemporal), parseInt(resultado))}`;
         } else if(operacionSeleccionada=='division'){
            resultado=`${division(parseInt(valorTemporal), parseInt(resultado))}`;
         };
     };

     operacionSeleccionada=operacion;
     pantalla();

  };
  
  // si la operación no es igual a terminar guardar en valor temporal lo que tenga resultado //
  // deben guardar la operacion en operacionSeleccionada
  // limpiar resultado significa dejarlo igual a 0
  // si operacion es igual a terminar
  // deben validar que operacion habian escogido antes con operacionSeleccionada
  // con base a eso es que van a llamar a su funcion dependiendo del caso
  // actualizar resultado con el valor que retorne su funcion
  // al final de todo volver a actualizar la pantalla
});

// cuando presionan un numero
document.querySelector('.numeros').addEventListener('click', (event) => {
  const numero = event.target.getAttribute('data-id') || 'clear';
    
    if(operacionSeleccionada=="terminar"){
        resultado="0";
        operacionSeleccionada='';

    };


    if(numero=='clear'){
        resultado='0';
        operacionSeleccionada='';
    } else if(resultado=='0'){
            resultado=numero;
        } else if(resultado!==0){
            resultado+=numero;
        };

    
 pantalla();
  // si numero es igual a clear, deben dejar resultado en 0 y operacionSeleccionada en vacio;
  // si resultado es igual a 0, deben reemplazar el valor de resultado;
  // si resultado no es igual a 0, deben concatenar los numeros;
  // luego deben actualizar la pantalla
  // si operacion seleccionada es igual a resultado limpar la pantalla antes de ejecutar los numeros y la operacion seleccionada
});
