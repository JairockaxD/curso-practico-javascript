function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// const lista1 = [
//     100,
//     200,
//     500,
//     400000000
// ];


// const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}

// let mediana;

// if (esPar(lista1.length)){

//     // necesitamos dos elementos 
//     // -> el promedio
//     // -> mediana
    
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2
//     ]);

//     mediana = promedioElemento1y2;
// } else {
//     mediana = lista1[mitadLista1]
// }


function ordenarCadena(lista){
    lista.sort(function(a, b){
        return a - b
    }); 
    return lista;
}

function calcularMediana(lista){
   // console.log(lista);
    const listaOrdenada = ordenarCadena(lista);
   // console.log(listaOrdenada);

    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

    let mediana;

        if (esPar(listaOrdenada.length)){

            // necesitamos dos elementos 
            // -> el promedio
            // -> mediana
            
            const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
         //   console.log(elemento1);
            const elemento2 = listaOrdenada[mitadListaOrdenada];
         //   console.log(elemento2);
            const promedioElemento1y2 = calcularMediaAritmetica([
                elemento1,
                elemento2
            ]);

            mediana = promedioElemento1y2;
        } else {
            mediana = listaOrdenada[mitadListaOrdenada]
        }
        return mediana;
}