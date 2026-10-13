const peliculas = [
  ["El Conjuro", "Hereditary", "Psycho", "It", "Siniestro"],
  ["Toy Story", "Frozen", "El rey león", "Shrek", "Mi villano favorito"],
  ["Supercool", "¿Qué pasó ayer?", "Y dónde está el piloto", "La máscara", "Son como niños"]
]

//Mostrar las 15 peliculas enla console
peliculas.forEach(generoPeliculas => {
  generoPeliculas.forEach(pelicula => {
    console.log(pelicula);
    
  })  
})