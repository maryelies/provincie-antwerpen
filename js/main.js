$(window).resize(function(){ 
    if ($(window).width() >= 768){	
        // toggle active state navitem
        $('.nav-item').click(function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });

        // close dropdown when hover off navbar
        // remove active state
        $('.navbar').mouseleave(function() {
            $('.nav-item').removeClass('active');
            $('.dropdown').css('display', 'none');
        })
    }
});

$(document).ready(function(){
    if ($(window).width() >= 768){	
        // toggle active state navitem
        $('.nav-item').click(function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });

        // close dropdown when hover off navbar
        // remove active state
        $('.navbar').mouseleave(function() {
            $('.nav-item').removeClass('active');
            $('.dropdown').css('display', 'none');
        })
    }

    $(".nav-link").click(function(){ 
        var navLink = $(this).attr("id");
        if($("." + navLink + ":visible").length){;
        $("." + navLink).slideUp();
        } else {
        $(".dropdown").slideUp();
        $("." + navLink).slideDown();  
        }
    });

    $(".arrow-up").click(function() {
        $('html, body').animate({
            scrollTop: $(".smooth").offset().top
        }, 1000);
    });
    
    $(".chosen-select-top").chosen({
        placeholder_text_single: "Zoek op trefwoord",
        placeholder_text_multiple: "Zoek op trefwoord",
        no_results_text: "Geen resultaten voor"
      });

    $(".chosen-select-location").chosen({
    placeholder_text_single: "Zoek locatie",
    placeholder_text_multiple: "Zoek locatie",
    no_results_text: "Geen resultaten voor"
    });

    $(".chosen-select-organisation").chosen({
    placeholder_text_single: "Zoek organisatie",
    placeholder_text_multiple: "Zoek organisatie",
    no_results_text: "Geen resultaten voor"
    });

    // Hamburger menu
    (function () {
        $('.hamburger-wrapper').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            $('.navbar').toggleClass('visible');
            $('.navbar-nav').toggleClass('visible');
        })
        $('.mobile-menu-overlay > ul > li > a').on('click', function () {
            $('.hamburger-menu').removeClass('animate');
            $('.navbar').removeClass('visible');
            $('.navbar-nav').removeClass('visible');
        })
    })();

    var list = document.querySelector(".list-button");

    list.addEventListener("click", function(){
        document.querySelector(".absolute-list").style.display="block";
        document.querySelector(".absolute-popup").style.display="none";
        document.querySelector(".absolute-overlay").style.display="none";
    });

    var pinpoints = document.querySelector(".pinpoints-button");

    pinpoints.addEventListener("click", function(){
        document.querySelector(".absolute-list").style.display="none";
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

    $('.map-button').click(function(){

        if ($('.popup-img').hasClass('slick-initialized')) {
            $('.popup-img').slick('destroy');
          }      

        $('.popup-img').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });

    })

    $('.popup-more').click(function(){

        if ($('.overlay-img').hasClass('slick-initialized')) {
            $('.overlay-img').slick('destroy');
          }

        $('.overlay-img').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    })
 
});