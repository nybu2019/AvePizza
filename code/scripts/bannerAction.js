let indexBanner = 1;
let bannerInterval = 4000;

window.onload = function() {
    let bannerHandler = setInterval(loopImages, bannerInterval);

    document.getElementById("mainBanner").onmouseover = function() {
        clearInterval(bannerHandler);
    };
    document.getElementById("mainBanner").onmouseleave = function() {
        bannerHandler = setInterval(loopImages, bannerInterval);
    };
}

function loopImages() {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");

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
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");

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

document.getElementById("leftBannerNavi").onclick = function() {
    indexBanner = indexBanner - 1 < 1 ? 3 : indexBanner - 1;

    loopImagesReverse();
}

document.getElementById("rightBannerNavi").onclick = function() {
    loopImages();
}
