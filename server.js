const http = require("http"); //import http

//create WebServer

http
  .createServer((req, res) => {
    res.write("Server is Running Successfully");
    res.end();
  })
  .listen(5000);
