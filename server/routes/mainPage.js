const fs = require("fs");
const express = require("express");
const router = express.Router();

function readFile(fileName) {
    return fs.readFileSync(__dirname + "/../../code/main/" + fileName, 'utf8');
}
function readImage(fileName) {
    return fs.readFileSync(__dirname + "/../../resources/" + fileName);
}




router.get("/", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(readFile("index.html"));
    res.end();
});
router.get("/mainAction.js", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.write(readFile("mainAction.js"));
    res.end();
});
router.get("/mainStyles.css", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    res.write(readFile("mainStyles.css"));
    res.end();
});

router.get("/imagesIndex/pizza-Icon.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("imagesIndex/pizza-Icon.png"));
    res.end();
});


router.get("/imagesIndex/logoImg.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("imagesIndex/logoImg.jpg"));
    res.end();
});
router.get("/sideIcons/pizza-slice.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("sideIcons/pizza-slice.png"));
    res.end();
});
router.get("/sideIcons/infusion.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("sideIcons/infusion.png"));
    res.end();
});
router.get("/sideIcons/salad.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("sideIcons/salad.png"));
    res.end();
});
router.get("/sideIcons/gift-box.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("sideIcons/gift-box.png"));
    res.end();
});
router.get("/sideIcons/pizza.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("sideIcons/pizza.png"));
    res.end();
});


router.get("/ourTeam/shef.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("ourTeam/shef.jpg"));
    res.end();
});
router.get("/footer/award.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("footer/award.png"));
    res.end();
});

router.get("/footer/instagram-photo1.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("footer/instagram-photo1.jpg"));
    res.end();
});
router.get("/footer/instagram-photo2.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("footer/instagram-photo2.jpg"));
    res.end();
});
router.get("/footer/instagram-photo3.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("footer/instagram-photo3.jpg"));
    res.end();
});
router.get("/footer/instagram-photo4.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("footer/instagram-photo4.jpg"));
    res.end();
});
router.get("/footer/instagram-photo5.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("footer/instagram-photo5.jpg"));
    res.end();
});
router.get("/footer/instagram-photo6.jpg", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/jpeg"});
    res.write(readImage("footer/instagram-photo6.jpg"));
    res.end();
});

router.get("/footer/payMethod/mastercard1.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("footer/payMethod/mastercard1.png"));
    res.end();
});
router.get("/footer/payMethod/mastercard2.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("footer/payMethod/mastercard2.png"));
    res.end();
});
router.get("/footer/payMethod/visa.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("footer/payMethod/visa.png"));
    res.end();
});
router.get("/footer/payMethod/paypal.png", function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.write(readImage("footer/payMethod/paypal.png"));
    res.end();
});


module.exports = router;
