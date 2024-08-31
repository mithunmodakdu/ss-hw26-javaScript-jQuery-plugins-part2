$(document).ready(function(){
    $('.slick_container').slick(
        {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
               
                {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      
                    }
                },
                
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
               
            ]
        }
    );

})