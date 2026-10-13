const persona = {
  apellidos: "Briceño Anchante",
  nombres: "Mayeli",
  hablar: function() { return "Hola que tal" },
  location: {
    departamento: "Ica",
    provincia: "Chincha",
    distrito: "Grocio Prado",
    direccion: "Calle San Martin 123",
    mostrar: function() { //"altgr + }" = (``)
      return `${this.departamento} - ${this.provincia} - ${this.distrito} - ${this.departamento} - ${this.direccion} - ${this.apellidos}`
    } 
  }
}

console.log(persona.hablar())
console.log(persona.location["departamento"])
console.log(persona.location.mostrar())