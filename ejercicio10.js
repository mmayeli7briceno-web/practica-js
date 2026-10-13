//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "Briceño Anchante",
  nombres: "Mayeli",
  edad: "19",
  telefonos: ["987654321", "912345678", "975312468"],
  formacion: [
    { nivel: "Primaria", nombre: "San José", anio: 2002 },
    { nivel: "Secundaria", nombre: "JPB", anio: 2009 },
    { nivel: "Superior", nombre: "SENATI", anio: 2014 }
  ],
  habilidades: [
    { skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"] },
    { skill: "Lenguaje programación", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"] },
    { skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"]}
  ]
}

//Habilidades en programación
console.log(perfil.habilidades[1].herramientas)

//Cuál es el nombre del centro de formación secundaria?
console.log(perfil.formacion[1].nombre)

//Cuántos teléfonos tiene la persona?
console.log(perfil.telefonos.length)

//Mostrar cada uno de los motores de Base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
})
