//Crear un objeto que contenga la informacion de tu computadora
//cadenas(string con ""), enteros(4), decimales("2.76"), logicos, arreglos, nuevosobjeos
const computadora = {
  clave: "Laptop Lenovo",
  entero: 16,
  decimales: 2.00,
  logico: true,
  arreglos: [
    "AMD Ryzen 7 5825U",
    "AMD Radeon Graphics",
    "Windows 11 Home Single Language"
  ],
  objetos: [
    { componente: "Procesador", estado: "Activo" },
    { componente: "Memoria RAM", estado: "16 GB" },
    { componente: "Almacenamiento SSD", estado: "954 GB de capacidad total" },
    { componente: "Sistema operativo", estado: "Windows 11, versión 25H2" }
  ]
}
console.log(computadora)