createPizzaItem();

let decCounElement = document.getElementsByClassName("decCount")[0];
let incCountElement = document.getElementsByClassName("incCount")[0];
let priceElement = document.getElementsByClassName("price")[0];
let countElement = document.getElementsByClassName("count")[0];
let toBasketElement = document.getElementsByClassName("toBasket")[0];

let pizzaPrice = 127;

decCounElement.onclick = function() {
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

function createPizzaItem() {
    let table = document.getElementById("tableRoot");
    let row = table.rows[0];
    let cell = row.insertCell(1);


    let pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("pizzaContainer");
        let pizzaImg = document.createElement("div");
        pizzaImg.classList.add("pizzaImg");

        let pizzaInfo = document.createElement("div");
        pizzaInfo.classList.add("pizzaInfo");
            let pizzaConfig = document.createElement("p");
            pizzaConfig.classList.add("pizzaConfig");
            let pizzaPrice = document.createElement("p");
            pizzaPrice.classList.add("pizzaPrice");
            let pizzaTitle = document.createElement("p");
            pizzaTitle.classList.add("pizzaTitle");
            let pizzaDesc = document.createElement("p");
            pizzaDesc.classList.add("pizzaDesc");
        pizzaInfo.appendChild(pizzaConfig);
        pizzaInfo.appendChild(pizzaPrice);
        pizzaInfo.appendChild(pizzaTitle);
        pizzaInfo.appendChild(pizzaDesc);

        let pizzaNavi = document.createElement("div");
        pizzaNavi.classList.add("pizzaNavi");
            let decCount = document.createElement("p");
            decCount.classList.add("naviButton");
            decCount.classList.add("decCount");

            let labelDiv = document.createElement("div");
                let count = document.createElement("label");
                count.classList.add("count");
            labelDiv.appendChild(count);

            let incCount = document.createElement("p");
            incCount.classList.add("naviButton");
            incCount.classList.add("incCount");
            let toBasket = document.createElement("p");
            toBasket.classList.add("naviButton");
            toBasket.classList.add("toBasket");
            let price = document.createElement("p");
            price.classList.add("price");
        pizzaNavi.appendChild(decCount);
        pizzaNavi.appendChild(labelDiv);
        pizzaNavi.appendChild(incCount);
        pizzaNavi.appendChild(toBasket);
        pizzaNavi.appendChild(price);

    pizzaContainer.appendChild(pizzaImg);
    pizzaContainer.appendChild(pizzaInfo);
    pizzaContainer.appendChild(pizzaNavi);


    cell.appendChild(pizzaContainer);

    pizzaConfig.innerHTML = "550g, 35sm";
    pizzaPrice.innerHTML = "127 UAH";
    pizzaTitle.innerHTML = "Neapolitan pizza";
    pizzaDesc.innerHTML = "Try so much and drink whiskey with Korinetska in bathroom";
    decCount.innerHTML = "-";
    count.innerHTML = "1";
    incCount.innerHTML = "+";
    toBasket.innerHTML = "To the basket";
    price.innerHTML = "127 UAH";
}