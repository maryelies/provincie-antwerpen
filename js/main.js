var list = document.querySelector(".list-button");

list.addEventListener("click", function(){
    document.querySelector(".absolute-list").style.display="block";
    document.querySelector(".absolute-popup").style.display="none";
    document.querySelector(".absolute-overlay").style.display="none";
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

var closePopup = document.querySelector(".close-popup");

closePopup.addEventListener("click", function(){
    document.querySelector(".absolute-popup").style.display="none";
});

var closeOverlay = document.querySelector(".close-overlay");

closeOverlay.addEventListener("click", function(){
    document.querySelector(".absolute-overlay").style.display="none";
});

var closeList = document.querySelector(".close-list");

closeList.addEventListener("click", function(){
    document.querySelector(".absolute-list").style.display="none";
});



$(document).ready(function(){
    $(".nav-link").hover(function(){ 
        var navLink = $(this).attr("id");
        if($("." + navLink + ":visible").length){;
          $("." + navLink).slideUp();
        } else {
          $(".dropdown").slideUp();
          $("." + navLink).slideDown();  
        }
    });
});