const http = require('http');
const calc = require("./calc");
const url = require("url");
const querystring = require("querystring");
const hostname = '127.0.0.1';
const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let query = querystring.parse(url.parse(req.url).query);
  //let query = querystring.parse(req.url);
  let result;
  let a = Number(query.a);
  let b = Number(query.b);
  let op = query.operator;
  result = calc.calc(a, b, op);
  console.log("result : " + result);
  res.end("a : " + a + " b : " + b + " op : " + op +"\nresult : " + result);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
