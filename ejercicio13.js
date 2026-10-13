//formas de crear una funcion
function hacerAlgo(){
  return "resultado"
}

//F2: Por expresión
const saludo = function saludar(){
    return "Hola que tal"
}

console.log(saludo())

const suma = function sumar(num1, num2){
    return num1 + num2
}

console.log(suma(17, 20))

//tipos de funciones: ANONIMA (funciones por expresion)
const mensaje = function (){
  return "Ingenieria de software"
}

console.log(mensaje) //Tipo de dato => function
console.log(mensaje()); //Ejecuta la funcion

//Para aplicar este tipo de funciones, se requiere ; antes del llamado
//AUTOEJECUTABLES (se declara y se ejecutan al mismo tiempo). no olvidar ;
/*
(declaracion de la funcion) (ejecucion de la funcion);
*/

(
  function(){
    console.log("Hola que tal")
  }
)();

(
  function (nombre = ''){
    console.log('Bienvenido:', nombre)
  }
)('Katherine');

//Crea una funcion autoejecutable que calcule el promedio de 3 notas 
//estas funciones suelen ejecutar tarea sin retornar datos
(
  function (nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3) / 3)
  }
)(14, 12, 20);