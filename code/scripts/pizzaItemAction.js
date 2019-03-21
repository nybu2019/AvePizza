let pizzaPrice = 127;

document.getElementById("decCount").onclick = function() {
    let countPizza = document.getElementById("countPizza");
    let count = parseInt(countPizza.innerHTML);

    countPizza.innerHTML = count - 1 < 1 ? 1 : count - 1;
    recountPizzaPrice();
    recountLeftMarginCountPizza();
};

document.getElementById("incCount").onclick = function() {
    let countPizza = document.getElementById("countPizza");
    let count = parseInt(countPizza.innerHTML);

    countPizza.innerHTML = count + 1 === 100 ? 99 : count + 1;
    recountPizzaPrice();
    recountLeftMarginCountPizza();
};

function recountPizzaPrice() {
    document.getElementById("countPrice").innerHTML = parseInt(document.getElementById("countPizza").innerHTML) * pizzaPrice + " UAH";    
}

function recountLeftMarginCountPizza() {
    let countPizza = document.getElementById("countPizza");
    let count = parseInt(countPizza.innerHTML);
    if (count < 10) {
        countPizza.style.left = "7px";
    } else {
        countPizza.style.left = "0px";
    }
}