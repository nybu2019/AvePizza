let indexBanner = 1;
let bannerInterval = 4000;

document.body.onload = function() {
    setStartImagesPosition();
    let bannerHandler = setInterval(loopImages, bannerInterval);
    
    document.getElementById("mainBanner").onmouseover = function() {
        clearInterval(bannerHandler);
    };
    document.getElementById("mainBanner").onmouseleave = function() {
        bannerHandler = setInterval(loopImages, bannerInterval);
    };
}

function setStartImagesPosition() {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3"); 

    img2.style.opacity = "0";

    setTimeout(function() {
        img1.style.top = "400px";
        img3.style.top = "0px";
        img2.style.top = "-400px";
    }, 500);

    setTimeout(function() {
        img2.style.opacity = "1";
    }, 1000);
}

function loopImages() {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");

    if (indexBanner === 1) {
        img1.style.opacity = "0";

        setTimeout(function() {
            img3.style.top = "400px";
            img2.style.top = "0px";
            img1.style.top = "-400px";
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
            img2.style.top = "400px";
            img1.style.top = "0px";
            img3.style.top = "-400px";
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
            img1.style.top = "400px";
            img3.style.top = "0px";
            img2.style.top = "-400px";
        }, 500);

        setTimeout(function() {
            img2.style.opacity = "1";
        }, 1000);

        indexBanner = 1;
    }
}

function addListenersOnImages() {
    let listImages = document.getElementsByClassName("imgBanner");

    [].forEach.call(listImages, function(element) {
        element.addEventListener("mouseover", function( event ) {
            bannerInterval = 0;
        });
        element.addEventListener("mouseleave", function( event ) {
            bannerInterval = 1000;
        });
    });
}