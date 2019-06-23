/* testobject(later will be received from backEnd) */
const obj = {
    title: "Palermo",
    description: "potatoes, tomatoes",
    price: 132,
    count: 2,
    picturePath: "../../resources/pizzaItems/pizza1.jpg"
};

window.onload = function() {
    addPizzaToList(obj);
    addPizzaToList(obj);
};

document.getElementById("makeOrderButton").onclick = function() {
    addPizzaToList(obj);
};

/** 
 * @param {object} pizzaObj 
 * @param {string} pizzaObj.title
 * @param {string} pizzaObj.description
 * @param {number} pizzaObj.price 
 * @param {number} pizzaObj.count
 * @param {string} pizzaObj.picturePath  
 */
function addPizzaToList(pizzaObj) {
    //to create full copy of the object(not reference)
    const pizzaLi = Object.assign({}, pizzaObj);

    const list = document.getElementById("basketItemList");

    const listItem = document.createElement("li");    
        const pizzaItem = document.createElement("div");
        pizzaItem.classList.add("pizzaItem");
            const pizzaImage = document.createElement("img");
            pizzaImage.classList.add("pizzaImage");
            pizzaImage.src = pizzaLi.picturePath;

            const editInfoItem = document.createElement("div");
            editInfoItem.classList.add("editInfoItem");
                const pizzaItemTitle = document.createElement("span");
                pizzaItemTitle.classList.add("pizzaItemTitle");
                pizzaItemTitle.innerText = pizzaLi.title;
                
                const pizzaItemPrice = document.createElement("span");
                pizzaItemPrice.classList.add("pizzaItemPrice");
                pizzaItemPrice.innerText = (pizzaLi.price * pizzaLi.count) + "$";
                
                const ingredients = document.createElement("span");
                ingredients.classList.add("ingredients");
                ingredients.innerText = pizzaLi.description;
                
                const deleteItem = document.createElement("span");
                deleteItem.classList.add("deleteItem");
                deleteItem.innerText = "Delete";
                deleteItem.onclick = function(){
                    list.removeChild(listItem);
                };
                

            editInfoItem.append(pizzaItemTitle);
            editInfoItem.append(pizzaItemPrice);
            editInfoItem.append(ingredients);
            editInfoItem.append(deleteItem);

            const divCount = document.createElement("div");
            divCount.classList.add("divCount");
                const decCount = document.createElement("div");
                decCount.classList.add("decCount");
                decCount.innerText = "-";
                decCount.onclick = function(){
                    pizzaLi.count = pizzaLi.count - 1 > 0 ? pizzaLi.count - 1 : 1;
                    pizzaItemPrice.innerText = (pizzaLi.count * pizzaLi.price) + "$"; 
                    numbCount.innerText = pizzaLi.count;
                };


                const numbCount = document.createElement("div");
                numbCount.classList.add("numbCount");
                numbCount.innerText = pizzaLi.count;
                
                const incCount = document.createElement("div");
                incCount.classList.add("incCount");
                incCount.innerText = "+";
                incCount.onclick = function(){
                    pizzaLi.count++;
                    pizzaItemPrice.innerText = (pizzaLi.count * pizzaLi.price) + "$"; 
                    numbCount.innerText = pizzaLi.count;
                };

            divCount.append(decCount);
            divCount.append(numbCount);
            divCount.append(incCount);

        pizzaItem.append(pizzaImage);
        pizzaItem.append(editInfoItem);
        pizzaItem.append(divCount);

    listItem.append(pizzaItem);

    list.append(listItem);
}