//Funcion 4:
//Crear una funcion que solicite dos arreglos numericos, debera
//retornar la suma de ambos arreglos simpre que tengan el mismo numero
//de elementos, de lo contrario, devolver array vacio []
function sumARreglo(lis1 = [], lis2 = []){
    let resultado = []

    if(lis1.length == lis2.length){
        lis1.forEach((numero, indice) => {
            resultado[indice] = numero + lis2[indice]
        })
    }
    return resultado
}

//console.log(sumARreglo([1, 2, 3], [4, 5, 6]))

//funcion 4
//Crear una funcion que solicite un numero positivo y retorne todos los divisores
//desde 1 hasta el numero que hayas indicado. El resultado se obtiene
//como arreglo. Ejemplo: 22 -> [1,2,11,22], ejemplo 40 -> [1,2,4,5,8,10,20,40]
function retorDivisores(numero = 0){
    let resultado = [] , posicion = 0

    if(numero > 0){
        for(let i = 1; i <= numero; i++){
            if(numero % i == 0){
                resultado[posicion] = i
                posicion++
            }
        }
    }
    return resultado
}
console.log(retorDivisores(22))
