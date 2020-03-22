var list = document.querySelector(".list-button");

list.addEventListener("click", function(){
    document.querySelector(".absolute-list").style.display="block";
});

var map = document.querySelector(".map-button");

map.addEventListener("click", function(){
    document.querySelector(".absolute-popup").style.display="block";
});

var popup = document.querySelector(".popup-more");

popup.addEventListener("click", function(){
    document.querySelector(".absolute-popup").style.display="none";
    document.querySelector(".absolute-overlay").style.display="block";
});