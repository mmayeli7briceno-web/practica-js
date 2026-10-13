//que es una función?
//Conjunto de intrucciones que se puede reutilizar
//acepta parametro de salida y puede dvolver algun valor

//Pruebas, test
function saludar(){
  console.log("Hola")
}

//Correcto
function despedirse(){
  return "adios"
}

function verificarNota(calificacion = 0){
  //aprobado - desaprobado | operador ternadio (condicion simple)
  return (calificacion >= 10.5 ? "aprobado" : "desaprobado")
}

//La funcion retorna el neto, incrementando +150 por cada hijo
function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)
}

function verificarJubilacion(edad){
  return edad>= 65 ? "Jubilación activa" : "Fase laboral" //"?" es para ver si se cumple o no

}

//esta funcion recibe una lista de sueldos (no sabeos la cantidad de elementos)
//tambien se debe indicar si obtendremos el mayor
//la funcion retorna el mayor o menor sueldo dependiendo de su configuracion 
function analizarSueldos(listaSueldos = [], obtenerMayor = true){
  let resultado = 0

  if(obtenerMayor){
    listaSueldos.forEach(sueldo => {
      if(sueldo > resultado) resultado = sueldo
    })
}else{
    resultado = listaSueldos[0]
    listaSueldos.forEach(sueldo => {
      if (sueldo < resultado) resultado = sueldo
    })
  }
  
  return resultado
}

//recibe un objeto, retorn un arreglo
function obtenerTelefonos(objeto = {}){
  return objeto.telefonos
}

//Retornar un objeto con los parametros
function crearObjeto(apellidos = '', nombres = '', edad = 0){
  return{
    apellidos: apellidos,
    nombres: nombres,
    edad: edad
  }
}

saludar()
console.log(despedirse())
console.log(verificarNota(16))
console.log(calcularNeto(3500, 0)) //3500 + 300
console.log(verificarJubilacion(45))
console.log(analizarSueldos([3500, 1800, 4100, 2200], false))

const perfil = {
  nombres: "Luis Mateo",
  dni: "41454400",
  telefonos: ["956000111", "956000222"]
}
console.log(obtenerTelefonos(perfil))
console.log(crearObjeto('Martinez Perez', 'Luis Miguel', 20))