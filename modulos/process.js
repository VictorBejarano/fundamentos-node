// const p = require('process')

process.on("beforeExit", () => {
  console.log("Va a terminar");
});

process.on("exit", () => {
  console.log("Se cerro");
});

process.on("uncaughtException", (err, origin) => {
  console.error("Se olvido capturar error");
  console.error(err);
});

noexite()