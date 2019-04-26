document.getElementById("testButton").onclick = function() {
    addGoodsPrice(127);
    increaseGoodsCount(1);
};

window.onwheel = function(event) {
    const headerNav = document.getElementsByClassName("headerNav")[0];

    if (event.deltaY > 0) {
        headerNav.style.top = "0px";
    } else {

        headerNav.style.top = "-100px";
    }

    console.log(event);
};

function addGoodsPrice(price) {
    let basketPrice = document.getElementsByClassName("basketPrice")[0];
    let currentPrice = parseInt(basketPrice.innerHTML.slice(0, basketPrice.innerHTML.length - 1));
    basketPrice.innerHTML = (currentPrice + price) + "$";
}

function increaseGoodsCount(count) {
    let basketCount = document.getElementsByClassName("basketCount")[0];
    let currentCount = parseInt(basketCount.innerHTML);
    basketCount.innerHTML = (currentCount + count);
    basketCount.style.width = (15 + ((((currentCount + count) + "").length % 10 - 1)) * 7) + "px";
}
