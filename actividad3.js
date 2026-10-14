//Función 1:
//crear una funcion que reciba un areglo de numero y retorne como resultado
//un objeto indicandonos cuantos valores son pares e impares 
function contadorParImp(Numeros = []){
    let pares = 0, impares = 0
    Numeros.forEach(numero => {
        if (numero % 2 == 0){
            pares++;
        } else {
            impares++;
        }
    });
    return {
        pares : pares,
        imapres : impares
    };
}
console.log(contadorParImp([1, 2, 3, 4, 5, 6, 7, 8, 9]))



//Funcion 2:
//escribir una funcion que retorne true|false dependiendo si el valor de entrada
//corresponde a un numero capicua. 121, 444, 3223. Solo permite analizar valores
//de hasta 5 digitos (99999)

//test, demostracion, console.log