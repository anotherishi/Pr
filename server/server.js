const http = require("http");
const ws = require("ws");

const server = http.createServer(function (req, res) {
  res.write("Hello World!"); 
  res.end(); 
});

const wss = new ws.WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
  ws.send("something");
});

server.listen(3000);
