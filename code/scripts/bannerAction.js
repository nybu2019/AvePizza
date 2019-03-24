let indexBanner = 1;
let bannerInterval = 4000;
let mutex = 0;

let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];
let img3 = document.getElementsByClassName("img3")[0];

let bannerHandler = setInterval(loopImages, bannerInterval);

document.getElementsByClassName("mainBanner")[0].onmouseover = function() {
    clearInterval(bannerHandler);
};
document.getElementsByClassName("mainBanner")[0].onmouseleave = function() {
    bannerHandler = setInterval(loopImages, bannerInterval);
};

document.getElementsByClassName("leftBannerNavi")[0].onclick = function() {
    if (mutex === 0) {
        mutex = 1;
        indexBanner = indexBanner - 1 < 1 ? 3 : indexBanner - 1;
        loopImagesReverse();
        setTimeout(function() {
            mutex = 0;
        }, 1000);
    }
};
document.getElementsByClassName("rightBannerNavi")[0].onclick = function() {
    if (mutex === 0) {
        mutex = 1;
        loopImages();
        setTimeout(function() {
            mutex = 0;
        }, 1000);
    }
};


function loopImages() {
    if (indexBanner === 1) {
        img1.style.opacity = "0";

        setTimeout(function() {
            img3.style.right = "800px";
            img2.style.right = "0px";
            img1.style.right = "-800px";
        }, 500);

        setTimeout(function() {
            img1.style.opacity = "1";
        }, 1000);

        indexBanner = 2;
    }
    else
    if (indexBanner === 2) {
        img3.style.opacity = "0";

        setTimeout(function() {
            img2.style.right = "800px";
            img1.style.right = "0px";
            img3.style.right = "-800px";
        }, 500);

        setTimeout(function() {
            img3.style.opacity = "1";
        }, 1000);

        indexBanner = 3;
    }
    else
    if (indexBanner === 3) {
        img2.style.opacity = "0";

        setTimeout(function() {
            img1.style.right = "800px";
            img3.style.right = "0px";
            img2.style.right = "-800px";
        }, 500);

        setTimeout(function() {
            img2.style.opacity = "1";
        }, 1000);

        indexBanner = 1;
    }
}

function loopImagesReverse() {
    if (indexBanner === 3) {
        img2.style.opacity = "0";

        setTimeout(function() {
            img3.style.right = "-800px";
            img2.style.right = "800px";
            img1.style.right = "0px";
        }, 500);

        setTimeout(function() {
            img2.style.opacity = "1";
        }, 1000);
    }
    else
    if (indexBanner === 2) {
        img3.style.opacity = "0";

        setTimeout(function() {
            img2.style.right = "0px";
            img1.style.right = "-800px";
            img3.style.right = "800px";
        }, 500);

        setTimeout(function() {
            img3.style.opacity = "1";
        }, 1000);
    }
    else
    if (indexBanner === 1) {
        img1.style.opacity = "0";

        setTimeout(function() {
            img1.style.right = "800px";
            img3.style.right = "0px";
            img2.style.right = "-800px";
        }, 500);

        setTimeout(function() {
            img1.style.opacity = "1";
        }, 1000);
    }
}


