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


let countGoods = 0;
let goodsPrice = 0;

function addGoodsPrice(price) {
    let basketPrice = document.getElementsByClassName("basketPrice")[0];
    goodsPrice += price;
    basketPrice.innerHTML = goodsPrice + "$";
}

function increaseGoodsCount(count) {
    let basketCount = document.getElementsByClassName("basketCount")[0];
    countGoods += count;
    basketCount.innerHTML = countGoods;
    basketCount.style.width = (15 + ((((countGoods) + "").length % 10 - 1)) * 7) + "px";
}
