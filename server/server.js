const express = require("express");
const fs = require("fs");
const app = express();
const mainPage = require("./routes/mainPage.js");
const banner = require("./routes/banner.js");
const pizzaItems = require("./routes/pizzaItems.js");







app.use("/", mainPage);
app.use("/banner", banner);
app.use("/pizzaItems", pizzaItems);



const port = 57128;
app.listen(port, function() {
    console.log("localhost:" + port + "\nserver is listening...");
});
