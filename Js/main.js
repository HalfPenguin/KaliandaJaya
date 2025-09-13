    /* Hide UI onscroll*/ 
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {uiFunction()};
    function uiFunction() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("user-interface").style.top = "0";
    } else {
        document.getElementById("user-interface").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
    };

    //banner owl carousel
    $("#banner-area .owl-carousel"). owlCarousel({
        dots:false,
        items:1,
        loop:true,
        autoplayTimeout:8000,
        autoplaySpeed:2000,
        fluidSpeed:true,
        autoplay:true,
        autoplayHoverPause:false,
        animateOut: 'fadeOut'
    });


