const javier = {
    nombre: "Javier Alfonso",
    apellido: "Callejas Ibarra",
    edad: 52,
    sexo: "Masculino",
};

const martha = {
    nombre: "Martha Ligia",
    apellido: "Balaguera Suescún",
    edad: "Desconocida",
    sexo: "Femenino",
};

const javier2 = {
    nombre: "Javier Armando",
    apellido: "Callejas Balaguera",
    edad: 27,
    sexo: "Masculino",
};

const lina = {
    nombre: "Lina Marcela",
    apellido: "Callejas Balaguera",
    edad: 23,
    sexo: "Femenino",
};

const carlos = {
    nombre: "Carlos Alfonso",
    apellido: "Callejas Balaguera",
    edad: 19,
    sexo: "Masculino",
};

const arrayprincipal = [javier, martha, javier2, lina, carlos];

arrayprincipal.forEach(element => {
console.log(element);   
});