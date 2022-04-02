// Funciones Helpers o Utils
function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//Calculadora de medianas
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;

  } else {

    const personitaMitad = lista[mitad];
    return personitaMitad;

  }
}
//Mediana General
const salariosEcu = ecuador.map(function (ecuadorObject) {
  return ecuadorObject.salary;
});

//Ordenar el array
const salariosEcuSorted = salariosEcu.sort(function (elementoA, elementoB) {
  return elementoA - elementoB;
});

const medianaGeneralEcu = medianaSalarios(salariosEcuSorted);

//Mediana Top 10%
////Función .splice();
    // const arrayEjemplo = [0,1,2,3,4,5 |||||6,7 |||||8,9,10];
    // const Ejemplo = arrayEjemplo.splice(5,2); // 
    // console.log(Ejemplo); // devolvería el valor de [6,7]

//(P * (100 - 15 = 85) / 100); // Para este ejemplo, la P, sería el "precio", el 100 sería el 100%, es decir, el 100 va a ser constante y el 15, sería el porcentaje que queremos calcular. Restando esos dos valores nos da el 85, y a todo esto se lo divide para 100.


const spliceStart = (salariosEcuSorted.length * 90) / 100; //el 90 es debido a que quiero sacar el 10%
const spliceCount = salariosEcuSorted.length - spliceStart; //
  
const salariosEcuTop10 = salariosEcuSorted.splice(
  spliceStart,
  spliceCount
  );

  const medianaEcuTop10 = medianaSalarios(salariosEcuTop10);



console.log({
  medianaGeneralEcu,
  medianaEcuTop10,
});
