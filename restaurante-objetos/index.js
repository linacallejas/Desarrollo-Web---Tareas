const datos = {
    nombre: '',
    apellido: '',
    edad: 0,
    metodo() {
        let d = `${this.nombre} ${this.apellido}, ${this.edad} años`;
        return d;
    }
}

const arrayreservas = [];

let npersonas= parseInt(prompt('No. de reservas que desea realizar'));

for (let contador=0; contador<npersonas;contador++){
    datos.nombre= prompt('Nombre del titular:');
    datos.apellido= prompt('Apellido del titular:');
    datos.edad=parseInt(prompt('Edad del titular:'));

    arrayreservas.push(Object.assign({}, datos));
};

for(contador=0; contador<arrayreservas.length; contador++){
console.log(`Reserva No. ${contador}: ${arrayreservas[contador].metodo()}`);
};