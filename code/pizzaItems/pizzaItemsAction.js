let pizzas = null;
getPizzasByType("all");

function getPizzasByType(type) {
    fetch("/pizzaItems/pizzas/" + type, {
        method: "GET"
    })
    .then(response => response.json())
    .then(response => {
        pizzas = response;
        reloadPizzaItems();
    });
}

const sideBarWidth = 170;

const minRow = 1;
const maxRow = 3;
const maxSize = (screen.width - sideBarWidth) / maxRow;
const minSize = maxSize * 0.7;



window.onload = function() {
    document.getElementsByClassName("pizzaFilter")[0].onclick = function() {
        getPizzasByType("all");
    };
    document.getElementsByClassName("pizzaFilter")[1].onclick = function() {
        getPizzasByType("meat");
    };
    document.getElementsByClassName("pizzaFilter")[2].onclick = function() {
        getPizzasByType("cheese");
    };
    document.getElementsByClassName("pizzaFilter")[3].onclick = function() {
        getPizzasByType("vegetarian");
    };
    document.getElementsByClassName("pizzaFilter")[4].onclick = function() {
        getPizzasByType("fish");
    };
};

window.onresize = function() {
    reloadPizzaItems();
};

function reloadPizzaItems() {
    let table = document.getElementById("tableRoot");

    for(let i = table.rows.length - 1; i >= 0; i--)
    {
        table.deleteRow(i);
    }

    createAll();
}

function createAll() {
    const windowSize = window.innerWidth - 100 - sideBarWidth;
    let tempSize = 0;
    let countElement = 0;
    for (let i = maxRow; i >= 1; --i) {
        let found = false;
        tempSize = maxSize;

        while (true) {
            if (tempSize < minSize) {
                break;
            }

            if (i * tempSize <= windowSize) {
                found = true;
                countElement = i;
                break;
            }

            tempSize--;
        }

        if (found) {
            break;
        }
    }

    // let countElement = Math.trunc((window.innerWidth) / tempSize);
    countElement = countElement === 0 ? 1 : countElement;

    // console.log();
    createItems(countElement, tempSize);
}

function createItems(rowSize, size) {
    let x = 0;
    let y = 0;

    pizzas.forEach(function(element) {
        createPizzaItem(element, x, y, size);
        y++;
        if (y === rowSize) {
            y = 0;
            x++;
        }
    });
}


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

function createPizzaItem(pizzaData, x, y, size) {
    let table = document.getElementById("tableRoot");
    let row = table.rows[x] === undefined ? table.insertRow(x) : table.rows[x];

    let cell = row.insertCell(y);


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

    pizzaContainer.style.width = size + "px";
    pizzaContainer.style.height = size + "px";


    cell.appendChild(pizzaContainer);

    pizzaImg.style.backgroundImage = "url(" + pizzaData.imagePath + ")";

    pizzaConfig.innerHTML = pizzaData.config;
    pizzaPrice.innerHTML = pizzaData.price + " UAH";
    pizzaTitle.innerHTML = pizzaData.title;
    pizzaDesc.innerHTML = pizzaData.description;
    decCount.innerHTML = "-";
    count.innerHTML = "1";
    incCount.innerHTML = "+";
    toBasket.innerHTML = "To the basket";
    price.innerHTML = pizzaData.price + " UAH";

    decCount.onclick = function() {
        let countPizza = parseInt(count.innerHTML) - 1 < 1 ? 1 : parseInt(count.innerHTML) - 1;
        count.innerHTML = countPizza;
        price.innerHTML = countPizza * pizzaData.price + " UAH";

        count.style.left = parseInt(count.textContent) > 9 ? "0px" : "7px";
    };

    incCount.onclick = function() {
        let countPizza = parseInt(count.innerHTML) + 1 > 99 ? 99 : parseInt(count.innerHTML) + 1;
        count.innerHTML = countPizza;
        price.innerHTML = countPizza * pizzaData.price + " UAH";

        count.style.left = parseInt(count.textContent) > 9 ? "0px" : "7px";
    };

    toBasket.onclick = function() {
        console.log("send to the server");
    };
}
