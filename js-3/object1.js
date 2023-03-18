const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
  estatura: 1.8,
  saluda: function () {
    return "Hola, me llamo " + this.nombre;
  },
};

delete pedro.activo;

for (const propiedad in pedro) {
  console.log(propiedad + ":" + pedro[propiedad]);
}
console.log(pedro.saluda());
