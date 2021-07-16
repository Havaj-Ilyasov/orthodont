var videoContainer = document.querySelector(".video");
var btnVideo = document.querySelector(".btn-video");
var btnClose = document.querySelector(".btn-close");
var iframe = document.querySelector(".iframe");

btnVideo.addEventListener("click", function() {
    videoContainer.classList.add("show");
});

btnClose.addEventListener("click", function() {
    videoContainer.classList.remove("show");
});