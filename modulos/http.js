const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición!");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("hola, que tal");
      res.end();
      break;

    default:
      res.write("Error 404, no se encuentra el recurso");
      res.end();
      break;
  }

  //   res.writeHead(201, {
  //     "Content-Type": "text/plain",
  //   });

  //   res.write("Hola, ya se usar Http de NodeJS");

  //   res.end();
}
