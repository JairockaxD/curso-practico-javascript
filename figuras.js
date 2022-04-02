//Código del cuadrado
// console.group("Cuadrado");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");
 */

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es", perimetroCuadrado + " cm")

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es", areaCuadrado + " cm^2")
// console.groupEnd();

//Código del triángulo
// console.group("Triángulo");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden " 
    + ladoTriangulo1 
    + "cm, "+ ladoTriangulo2 
    + "cm, "+ baseTriangulo 
    + "cm"
); */

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es", alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return (lado1 + lado2 + base);
}
//console.log("El perímetro del triangulo es", perimetroTriangulo + " cm");

function areaTriangulo (base, altura){
    return (base * altura)/2;
}

// console.groupEnd();

// //Código del Círculo
// console.group("Círculo");
// // Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diámetro
function diametroCirculo (radio){
    return radio * 2;
} 
//PI
const PI = Math.PI;

// Circunferencia 
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio) {
    return (radio * radio) * PI;
}
//console.groupEnd();

//Aquí interactua con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2= Number(inputLado2.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);
   
    console.log(valueLado1);
    console.log(valueLado2);
    console.log(valueBase);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    alert(perimetro);

}

    function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2= inputLado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);

}

    function calcularPerimetroCirculo(){
        
        const inputRadio = document.getElementById("InputCirculoRadio");
        const valueRadio = inputRadio.value;
       
        const perimetro = perimetroCirculo(valueRadio);
        alert(perimetro);

    }


    function calcularAreaCirculo(){
        const inputRadio = document.getElementById("InputCirculoRadio");
        const valueRadio = inputRadio.value;

        const area = areaCirculo(valueRadio);
        alert(area);
        
    }

    function alturaTriangulo (lado1, lado2, base){

        if( lado1 === lado2){
            return Math.sqrt((lado1*lado1)-((base/2)*(base/2)));
        } else{
            alert("Este no es un triángulo isoceles");
        }

    }

    function calcularAlturaTriangulo(){
        const inputLado1 = document.getElementById("InputLado1");
        const valueLado1 = Number(inputLado1.value);
        const inputLado2 = document.getElementById("InputLado2");
        const valueLado2 = Number(inputLado2.value);
        const inputBase = document.getElementById("InputBase");
        const valueBase = Number(inputBase.value);

        const altura = alturaTriangulo(valueLado1, valueLado2, valueBase);
        alert(altura);

    }