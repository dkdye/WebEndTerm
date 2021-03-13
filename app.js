console.log("The localhost server is running on port 3000. CTRL+C to terminate session...");

var http = require("http");
var fS = require("fs");
function serveStaticFile(res, path, contentType, responseCode) {
    responseCode = 200;
    fS.readFile(__dirname + path, function (issue, data) {
        if (issue) {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("error.html");
        }
        else {
            res.writeHead(responseCode, { "Content-Type": contentType });
            res.end(data);
        };


    });
}
http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    if (path == "")
            serveStaticFile(res, "/index.html", "text/html"); 
        else if (path == "/about") 
            serveStaticFile(res, "/about.html", "text/html");

        else if (path == "/graduation")
            serveStaticFile(res, "/graduation.html", "text/html");

        else if (path == "/study") 
            serveStaticFile(res, "/study.html", "text/html");

        else if (path == "/video")
            serveStaticFile(res, "/memes.html", "text/html");

        else 
            serveStaticFile(res, "error.html", "text/html");
}).listen(3000);