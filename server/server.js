const express = require("express");
const fs = require("fs");
const app = express();
const mainPage = require("./routes/mainPage.js");







app.use("/", mainPage);



const port = 12345;
app.listen(port, function() {
    console.log("localhost:" + port + "\nserver is listening...");
});
