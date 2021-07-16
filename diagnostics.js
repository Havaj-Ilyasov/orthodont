var btnSwitch = document.querySelector(".pano-child");
var imgPano = document.querySelector(".xray-image--pano");
var xrayLink = document.querySelector(".xray-pano-link");

btnSwitch.addEventListener("click", function() {
    if (imgPano.getAttribute("src") === "img/Pano.jpg") {
        imgPano.setAttribute("src", "img/Pano--child.jpg");
        xrayLink.setAttribute("href", "img/Pano--child.jpg");

    } else if (imgPano.getAttribute("src") === "img/Pano--child.jpg") {
        imgPano.setAttribute("src", "img/Pano.jpg");
        xrayLink.setAttribute("href", "img/Pano.jpg");
    }
})