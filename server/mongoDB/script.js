const mongoDBApi = require("./mongoDBApi.js");



mongoDBApi.getPizzasFormDatabase()
.then(function(pizzas) {
    console.log(pizzas);
});
