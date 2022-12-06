const hamburger = document.querySelector(".hamburger");
const icon_hamburger = document.getElementById("icon-hamburger");
const icon_x = document.getElementById("icon-x");
const mobile_navigation = document.querySelector(".mobile-navigation");

hamburger.addEventListener("click", function(event) {
    icon_hamburger.classList.toggle("hidden");
    icon_x.classList.toggle("hidden");
    mobile_navigation.classList.toggle("is-open");
});

var onresize = function() {
    var width = document.body.clientWidth;
    if(width >= 880) {
        mobile_navigation.classList.remove("is-open");
        icon_hamburger.classList.remove("hidden");
        icon_x.classList.add("hidden");
    }
}
window.addEventListener("resize", onresize);