const express = require("express");
const fs = require("fs");
const app = express();
const mainPage = require("./routes/mainPage.js");
const banner = require("./routes/banner.js");







app.use("/", mainPage);
app.use("/banner", banner);



const port = 12345;
app.listen(port, function() {
    console.log("localhost:" + port + "\nserver is listening...");
});
