$(".carousel_logos").owlCarousel ({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 2,
            nav: false
        },
        300:{
            items: 2,
            nav: false
        },
        600:{
            items: 3,
            nav: false
        },
        900:{
            items: 5,
            nav: false
        },
        1140:{
            items: 7,
            nav: false
        },
        1340:{
            items: 7,
            nav: false
        },
        
    }        
});