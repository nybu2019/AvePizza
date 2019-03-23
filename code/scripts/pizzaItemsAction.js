let desCounElementt = document.getElementsByClassName("decCount")[0];
let incCountElement = document.getElementsByClassName("incCount")[0];
let priceElement = document.getElementsByClassName("price")[0];
let countElement = document.getElementsByClassName("count")[0];
let toBasketElement = document.getElementsByClassName("toBasket")[0];

let pizzaPrice = 127;

desCounElementt.onclick = function() {
    let count = parseInt(countElement.innerHTML);

    countElement.innerHTML = count - 1 < 1 ? 1 : count - 1;
    recountElementPrice();
    recountLeftMarginCountPizza();
};

incCountElement.onclick = function() {
    let count = parseInt(countElement.innerHTML);

    countElement.innerHTML = count + 1 === 100 ? 99 : count + 1;
    recountElementPrice();
    recountLeftMarginCountPizza();
};

toBasketElement.onclick = function() {
    console.log("send to server");
};

function recountElementPrice() {
    priceElement.innerHTML = parseInt(countElement.innerHTML) * pizzaPrice + " UAH";    
}

function recountLeftMarginCountPizza() {
    let count = parseInt(countElement.innerHTML);
    if (count < 10) {
        countElement.style.left = "7px";
    } else {
        countElement.style.left = "0px";
    }
}