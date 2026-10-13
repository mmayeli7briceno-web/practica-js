let edades = [21, 25, 18, 44, 52, 31, 37, 60, 29, 48, 55, 33, 41, 19, 57]

//Más alto, más bajo, promedio
let mayor = 0, menor = edades[0], promedio = 0

//la mayor edad
edades.forEach(edad => {
  if(edad > mayor) mayor = edad
  if(edad < menor) menor = edad
  promedio += edad  
})

promedio = (promedio / edades.length).toFixed(2)

console.log("Total de edades: ",edades.length)
console.log("La edad mayor:",mayor)
console.log("La edad menor:",menor)
console.log("El promedio:",promedio)