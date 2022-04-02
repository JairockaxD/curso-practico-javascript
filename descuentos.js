const precioOriginal = 120;
const descuento = 18;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = Number(inputPrice.value);

    const inputTieneCupones = document.getElementById("CheckBoxCupones").checked;

    // if(inputTieneCupones === true){
    //     const inputNumeroCupones = document.getElementById("InputNumeroCupones");
    //     const valueNumeroCupones = inputNumeroCupones.value;

    //     console.log(inputTieneCupones);
    //     console.log(valueNumeroCupones);

        // console.log(valueNumeroCupones);
        // console.log("***********");
       
    const inputNumeroCupones = document.getElementById("InputNumeroCupones");
    const valueNumeroCupones = Number(inputNumeroCupones.value);
       
    if(inputTieneCupones === true){
                 
            if(valueNumeroCupones === 1){
                        
                var valueDiscount = 10;
                var precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

                var resultP = document.getElementById("ResultP");
                resultP.innerText = "El precio con descuento es $ " + precioConDescuento;               

            } else if(valueNumeroCupones === 2){

                var valueDiscount = 20;
                var precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

                var resultP = document.getElementById("ResultP");
                resultP.innerText = "El precio con descuento es $ " + precioConDescuento;
            } else if(valueNumeroCupones === 3){

                var valueDiscount = 30;
                var precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

                var resultP = document.getElementById("ResultP");
                resultP.innerText = "El precio con descuento es $ " + precioConDescuento;

            // } else if(valueNumeroCupones >=4){

            //     var valueDiscount = 20;
            //     var precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

            //     var resultP = document.getElementById("ResultP");
            //     resultP.innerText = "El precio con descuento es $ " + precioConDescuento;
            // }
            
            } else {
                
                var MasDeTresCupones = document.getElementById("MasDeTresCupones");
                MasDeTresCupones.innerText = "Solo se aceptan 3 cupones por persona";;

                var resultP = document.getElementById("ResultP");
                resultP.innerText = "El precio es $ " + valuePrice;

                

            }
}
}


