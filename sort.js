// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]

const lista1Unordered = [5,3,1,9, 36,6];

const listaUnordered = document.getElementById("Lista1");
listaUnordered.innerText = "La lista 1 tiene los siguientes elementos: " + lista1Unordered;

const listaOrdered = document.getElementById("Lista1Ordenada");
listaOrdered.innerText = "La lista 1 ordenada es: " + lista1Unordered.sort();


// const numeros = [3, 23, 12,5,32,20,]

// numeros.sort(function(a, b){
//     return a - b
// }); 

// console.log(numeros);

function ordenarCadena(lista){
    lista.sort(function(a, b){
        return a - b
    }); 
    return lista;
}
