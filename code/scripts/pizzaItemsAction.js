let pizzas = [
    {
        config: "550g, 35sm",
        price: "127",
        title: "Neapolitan pizza",
        description: "Try so much and drink whiskey with Korinetska in bathroom",
        imagePath: "../../resources/pizzaItems/pizza1.jpg"
    },
    {
        config: "550g, 35sm",
        price: "127",
        title: "Neapolitan pizza",
        description: "Try so much and drink whiskey with Korinetska in bathroom",
        imagePath: "../../resources/pizzaItems/pizza2.jpg"
    },
    {
        config: "550g, 35sm",
        price: "127",
        title: "Neapolitan pizza",
        description: "Try so much and drink whiskey with Korinetska in bathroom",
        imagePath: "../../resources/pizzaItems/pizza3.jpg"
    },
    {
        config: "550g, 35sm",
        price: "127",
        title: "Neapolitan pizza",
        description: "Try so much and drink whiskey with Korinetska in bathroom",
        imagePath: "../../resources/pizzaItems/pizza4.jpg"
    },
    {
        config: "550g, 35sm",
        price: "127",
        title: "Neapolitan pizza",
        description: "Try so much and drink whiskey with Korinetska in bathroom",
        imagePath: "../../resources/pizzaItems/pizza5.jpg"
    }
];

createItems();


// decCounElement.onclick = function() {
//     let count = parseInt(countElement.innerHTML);

//     countElement.innerHTML = count - 1 < 1 ? 1 : count - 1;
//     recountElementPrice();
//     recountLeftMarginCountPizza();
// };

// incCountElement.onclick = function() {
//     let count = parseInt(countElement.innerHTML);

//     countElement.innerHTML = count + 1 === 100 ? 99 : count + 1;
//     recountElementPrice();
//     recountLeftMarginCountPizza();
// };

// toBasketElement.onclick = function() {
//     console.log("send to server");
// };

function createItems() {
    let x = 0;
    let y = 0;

    pizzas.forEach(function(element) {
        createPizzaItem(element, x, y);
        y++;
        if (y === 3) {
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

function createPizzaItem(pizzaData, x, y) {
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