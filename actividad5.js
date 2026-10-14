//crear una funcion autoejecutable, que imprima cuantas horas , minutos y segundos 
// faltan para terminar el dia
(function(){
    let ahora = new Date(),  finDelDia = new Date()

    finDelDia.setHours(24, 0, 0, 0)

    let tiemRestant = finDelDia - ahora

    let horas = Math.floor(tiemRestant / (1000 * 60 * 60))
    let minutos = Math.floor((tiemRestant % (1000 * 60 * 60)) / (1000 * 60))
    let segundos = Math.floor((tiemRestant % (1000 * 60)) / 1000)

    console.log("Faltan", horas, "horas,", minutos, "minutos y", segundos, "segundos para que termine el dia")
}
)();


//crear una funcion autoejecutable que solicite un numero(expresado en segundos ) y nos 
//devuelvo un  saludo, despues del tiempo indicado