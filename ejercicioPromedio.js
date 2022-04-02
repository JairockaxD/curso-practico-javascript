const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notaConCredito = notes.map(function (notaObjeto){
    return notaObjeto.note * notaObjeto.credit;
});


const sumDenotaConCredito = notaConCredito.reduce(
    function (sum = 0, newVal){
        return sum + newVal;

    }
);

const creditos = notes.map(function (notaObjeto){
    return notaObjeto.credit;
});

const sumCreditos = creditos.reduce(
    function (sum = 0, newVal){
        return sum + newVal;

    }
);

const promedioPonderado = sumDenotaConCredito / sumCreditos;

// Ojo * - *
// El .map hasta aquí, entiendo que puede transformar un object en un array y viceversa
// En este ejemplo, puedo usar el .map para separar todos valores de un solo atributo del objecto en un array.
// El .map, se aplica para cada elemento (como usar un for pero sin i), jaja y por eso mismo es una función xd
// El .reduce me permite sumar todos los valores, y me devuelve un solo valor