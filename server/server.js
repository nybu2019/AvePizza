const express = require("express");
const app = express();
const route1 = require("./routes/route1.js");

app.use("/route1", route1);


app.get("/", function(req, res) {
    res.send("sdf");
});


const port = 12345;
app.listen(port, function() {
    console.log("localhost:" + port + "\nserver is listening...");
});
