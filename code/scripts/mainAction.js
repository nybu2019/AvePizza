document.getElementById("testButton").onclick = function() {
    addGoodsPrice(127);
    increaseGoodsCount(1);
};

let lastScrollTop = 0;
window.onscroll = function() { 
    let st = window.pageYOffset || document.documentElement.scrollTop;     
    const headerNav = document.getElementsByClassName("headerNav")[0];
    
    if (st > lastScrollTop) {
        headerNav.style.top = "-100px";
    } else {
        headerNav.style.top = "0px";
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling    
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
