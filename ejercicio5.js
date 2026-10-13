let frutas = ["Manzana", "plátano", "naranja", "fresa", "uva", "limón", "arandano", "piña", "mango", "sandía", "melocotón"]

//Mostrar la lista invertida (ultimo al primero)
for (let i = (frutas.length - 1); i >= 0; i--){
//  console.log(frutas[i])
}

//Verificar si existe un elemento = "Fresa" 
let frutaBuscada = "lima"
const resultado = frutas.find(fruta => fruta == "uva")
const encontrado = frutas.includes(frutaBuscada)
console.log(resultado, encontrado)