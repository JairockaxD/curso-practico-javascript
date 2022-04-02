const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    2,
    2,
    3,
    4,
    5,
    5
];


const listaMap = {};

lista1.map(function (elemento){
    if(listaMap[elemento]){
        listaMap[elemento] +=1;
    } else{
        listaMap[elemento] = 1;
    };
});

console.log(listaMap);

const lista1Count = {};

lista1.map(
    function (elemento) {

        if(lista1Count[elemento]){
            //lista1[elemento] = lista1[elemento] + 1;
            lista1Count[elemento] += 1; //otra manera de escribir lo que está en la línea comentada de arriba
        } else {
            lista1Count[elemento] = 1;
    }
    }
);


const lista1Array = Object.entries(lista1Count)
.sort(function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
}
);


const moda = lista1Array[lista1Array.length - 1];

function calcularModa(array){
    const arrayToObject = {};

    array.map(
        function (elemento) {
            if(arrayToObject[elemento]){
                //lista1[elemento] = lista1[elemento] + 1;
                arrayToObject[elemento] += 1; //otra manera de escribir lo que está en la línea comentada de arriba
            } else {
                arrayToObject[elemento] = 1;
        }
        }
    );
    
    const objectToArray = Object.entries(arrayToObject).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = objectToArray[lista1Array.length - 1];
    console.log(moda);

}