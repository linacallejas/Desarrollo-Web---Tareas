const suma = function(v1=0, v2=0){
let Rsuma=v1+v2;
return Rsuma;
};

const resta = (v1=0, v2=0) => v1 - v2;

const multi = (v1=0, v2=0) => {
    let Rmulti = v1*v2;

    return Rmulti;
};

const division = (v1=0, v2=0) => v1/v2;

export {
    suma,
    resta,
    multi,
    division,
};