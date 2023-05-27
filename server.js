const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const port = 300;
const server = http.createServer((req, res) => {
  // lodashconst
  const num = _.random(10, 20);
  console.log(num);
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  //a switch case through the pages
  switch (req.url) {
    case "/":
      path = path + "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = path + "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path = path + "/404.html";
      res.statusCode = 404;
      break;
  }
  // sned an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data)
      res.end(data);
    }
  });
});

server.listen(port, "localhost", (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`listening on port ${port}`);
});
