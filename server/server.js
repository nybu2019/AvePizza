const express = require("express");
const fs = require("fs");
const app = express();
const route1 = require("./routes/route1.js");



function readFile(fileName) {
    return fs.readFileSync(__dirname + "/testPage/" + fileName, 'utf8');
}



app.use("/route1", route1);

app.get("/", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(readFile("page.html"));
    res.end();
});
app.get("/script.js", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.write(readFile("script.js"));
    res.end();
});

const port = 12345;
app.listen(port, function() {
    console.log("localhost:" + port + "\nserver is listening...");
});
