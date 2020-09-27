function Familia (nombre="", apellido="", edad=0, sexo="") { 
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.sexo=sexo;
};

//const family= new Familia ('Lina', 'Callejas', 23, 'Femenino');

//console.log(family);

const array = [];

let personas = parseInt(prompt('Número de personas a ingresar'));

for (let contador = 0; contador < personas; contador++) {
    let nom= prompt('Nombre');
    let apell= prompt('Apellido');
    let edad= prompt('Edad');
    let sexo= prompt('Sexo');    

    const nuevo= new Familia(nom, apell, edad, sexo)

    array.push(nuevo);
};

array.forEach(element => {
    console.log(element);    
});

console.log(array);