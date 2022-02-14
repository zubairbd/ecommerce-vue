$(window).on("load", function(){
    /*------------ Preloader ----------------- */
    $(".preloader").fadeOut("slow");
});

$(document).ready(function(){
    /*------------ Navbar Shrink ----------------- */
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink"); 
        }
    });
    /*---------------- Video Popup--------------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src") == ''){
                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /*------------- Features Carousel -----------------*/
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        lazyLoad: true,
        autoplayTimeout:2000,
        center:true,
        // nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:1,
            }
        }
    });

    /*------------- Product Item Carousel -----------------*/
    $('.product-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    });

    
    /*------------- Page Scrolling - ScrollIt -----------------*/
    $.scrollIt({
        topOffset: -50
    });

    


    $('.carousel').carousel({
        interval: 200
      })







});