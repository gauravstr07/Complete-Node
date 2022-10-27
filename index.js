let http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello from node server");
    res.end();
  })
  .listen(5000);
