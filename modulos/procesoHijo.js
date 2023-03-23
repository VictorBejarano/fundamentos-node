const { exec, spawn } = require("child_process");

// exec("node consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.err(err);
//     return false;
//   }
//   console.log(stdout);
// });

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function (dato) {
    console.log(dato.toString());
})

proceso.stdout.on('exit', function () {
    console.log('El proceso termino');
})