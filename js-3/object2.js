const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Buenos Aires",
  profesion: "Ingeniero",
  hoobies: ["Skateboarding", "Leer", "Cine"],

  presentacion: function (persona) {
    return (
      "Hola me llamo" +
      this.nombre +
      "tengo" +
      this.edad +
      "y soyt de la ciudad" +
      this.ciudad
    );
  },
};
for (let i = 0; i < persona.hoobies.length; i++) {
  console.log(persona.hoobies[i]);
}
// console.log(persona.presentacion());
// const mensaje = persona.presentacion();
// console.log(persona.hoobies[2]);
