const http = require("http");

function rqListener(req, res) {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  if(url === '/'){
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>send</button></form></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from node server</h1></body>");
  res.write("</html>");
  res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);
