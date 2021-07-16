var itemFirst = document.querySelector(".steps__item--first");
var itemSecond = document.querySelector(".steps__item--second");
var itemThird = document.querySelector(".steps__item--third");

var arrowFirst = document.querySelector(".arrow--first");
var arrowSecond = document.querySelector(".arrow--second");

var diagnoImageWrap = document.querySelectorAll(".diagno-image-wrap");
var diagnoImage = document.querySelectorAll(".diagno-image");

var imageAlginate = document.querySelector(".diagno-image--alginate");

var pano = document.querySelector(".pano");
var trg = document.querySelector(".trg");
var photo = document.querySelector(".photo");
var models = document.querySelector(".models");

window.addEventListener("click", function() {
    itemFirst.classList.add("opacity");
});

itemFirst.addEventListener("click", function() {
    arrowFirst.style.animationName = "widthAnimation";
    itemSecond.style.animationName = "itemAnimation";
});

itemSecond.addEventListener("click", function() {
    arrowSecond.style.animationName = "widthAnimation";
    itemThird.style.animationName = "itemAnimation";
});

arrowFirst.addEventListener("click", function() {
    for (var i = 0; i < diagnoImageWrap.length; i++) {
        diagnoImageWrap[i].style.animationName = "imageAnimation";
    }
});

imageAlginate.addEventListener("click", function() {
    models.style.order = 0;
    photo.style.order = 1;
    pano.style.order = 2;
    trg.style.order = 3;
});