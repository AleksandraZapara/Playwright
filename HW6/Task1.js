const http = require("http");
http
.createServer(function (request, response) {
 response.setHeader("Content-Type", "text/html");
 if (request.url === "/") {
   response.writeHead(200);
    response.end("<h1>Welcome to the new Server!</h1>");
} else if (request.url === "/about") {
   response.writeHead(200);
    response.end("<h1>This is a simple http Node.js server.</h1>");
} else if (request.url === "/contact") {
    response.writeHead(200);
    response.end("<h1>Contact us at contact@newserver.com.</h1>");
} else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>Page not found!</h1>");
    console.error(`404 Not Found: ${request.url}`);
}
})
.listen(5000);
console.log('Server running at http://127.0.0.1:5000/');
