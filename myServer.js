const http = require("http");
const port = 5005;

const serverHandel = (request, response) => {
  console.log(request.url);
  response.end("Server Running Successfully");
};

const server = http.createServer(serverHandel);

server.listen(port, (error) => {
  if (error) {
    return console.log("something went Worng", error);
  }

  console.log(`Server is Listen ${port}`);
});
