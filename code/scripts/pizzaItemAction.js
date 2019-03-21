let pizzaPrice = 127;

document.getElementById("decCount").onclick = function() {
    let countPizza = document.getElementById("countPizza");
    let count = parseInt(countPizza.innerHTML);

    countPizza.innerHTML = count - 1 < 1 ? 1 : count - 1;

    recountpizzaPrice();
};

document.getElementById("incCount").onclick = function() {
    let countPizza = document.getElementById("countPizza");
    let count = parseInt(countPizza.innerHTML);

    countPizza.innerHTML = parseInt(countPizza.innerHTML) + 1;
    recountpizzaPrice();
};

function recountpizzaPrice() {
    document.getElementById("countPrice").innerHTML = parseInt(document.getElementById("countPizza").innerHTML) * pizzaPrice + " UAH";
    
}