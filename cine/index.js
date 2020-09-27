// Datos deben ser globales
const peliculas = [];

//Función tipo objeto

function Pelicula (id = '', name = '', year = '', people = 0, capacity = 0) {
  this.id = id;
  this.name = name;
  this.year = year;
  this.people = parseInt(people);
  this.capacity = parseInt(capacity);

  this.percentage= function(){
    return `${(this.people/this.capacity)*100}`;
  }
}; 

// funcion que crea la cartelera 
const cartelera = () => {
  document.querySelector('#cine').innerHTML = peliculas.map(pelicula => {
    const { name, year, people, capacity } = pelicula;
    
    // Falta sumar el porcentaje que representa el numero de personas sobre la capacidad
    let porcentaje= pelicula.percentage();
    // Poner dentro de una etiqueta strong cuando llegue al 100%
    if(porcentaje === 100){
      porcentaje= `<strong>${pelicula.percentage()}</strong>`;
    } else {
      porcentaje = pelicula.percentage();
    }

    return `<div>
              <h3>${name}</h3>
              <p>${year}</p>
              <p>${people}</p>
              <p>${capacity}</p>
              <p>${porcentaje}</p>
            </div>`;
  });
};
cartelera();

// funcion que actualiza el listado de peliculas
const listado = () => {
  document.querySelector('#pelicula').innerHTML = peliculas.map(pelicula => {
    // los options tienen un atributo que se llama disable, deben sumarlo si se llego al limite de la pelicula
    let limite='';

    if (pelicula.people==pelicula.capacity){
      limite = `<option value="${pelicula.id}" disabled>${pelicula.name}</option>`
    } else {
      limite= `<option value="${pelicula.id}">${pelicula.name}</option>`;
    }
    return limite;
  });
};
listado();

// boton que se encarga de sumar una nueva pelicula
document.querySelector('#nueva').addEventListener('click', () => {
  // aca convirte un texto en un array, quiere decir que deben escribir todo separado en comas 
  // eg: ligaDC, Liga de la Justicia, 2020, 10, 10
  const pelicula = document.querySelector('#datos').value.split(','); 
  // aca deben tomar ese array y convertirlo en un objeto tipo Pelicula
  const p1= new Pelicula(pelicula[0], pelicula[1], pelicula[2], pelicula[3], pelicula[4]);
  // recuerden llamar las funciones de cartelera y listado
  peliculas.push(p1);
  cartelera();
  listado();
});

// boton que se encarga de actualizar pelicula
document.querySelector('#guardar').addEventListener('click', () => {
  const numero = parseInt(document.querySelector('#numero').value);
  const peliculaSeleccionada = [...document.querySelector('#pelicula').selectedOptions].shift().value;

  // aca deben actualizar la pelicula que selecciono
 peliculas.map(pelicula => {
   if (pelicula.id===peliculaSeleccionada){
     pelicula.people = pelicula.people + numero;
   }
 });

  // recuerden llamar las funciones de cartelera y listado
  cartelera();
  listado();
}); 