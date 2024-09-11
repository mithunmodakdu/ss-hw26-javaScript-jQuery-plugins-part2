$(document).ready(function(){

  // slick slider start
    $('.slick_container').slick(
        {
            slidesToShow: 3,
            slidesToScroll: 1,
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
  // slick slider end

  // Owl carousel start
  $('.owl-carousel').owlCarousel({
    items: 2,
    margin: 50,
    loop: true,
    responsiveClass: true,
    responsive: {
      1024:{
        items: 2
      },

      991:{
        items: 2
      },

      767: {
        items: 1
      },

      575: {
        items: 1
      }
      
    }
  })
  // Owl carousel end

  // load more start
  $('.some-list').simpleLoadMore({
    item: 'div',
    count: 4,
    counterInBtn: true,
    btnText: 'View More {showing}/{total}',
  })
  // load more end

  // lightbox start
  var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
  // lightbox end

// line graph start
  var songs = {
    "Mon" : 80,
    "Tues": 40,
    "Wed" : 60,
    "Thu" : 80,
    "Fri": 40,
    "Sat" : 60,
};

$('.line_graph_songs').graphiq({
  data: songs,
  colorLine: "#d3a2ef",
  colorDot: "#c3ecf7",
  colorXGrid: "#7f7f7f",
  colorYGrid: "#7f7f7f",
  colorLabels: "#FFFFFF",
  colorUnits: "#FFFFFF",
  colorRange: "#FFFFFF",
  colorFill: "#533c68",
  colorDotStroke: "#FFFFFF",
  dotStrokeWeight: 0,
  fillOpacity: 0.25,
  rangeOpacity: 0.5,
  dotRadius: 3,
  lineWeight: 2,
  yLines: true,
  dots: true,
  xLines: true,
  xLineCount: 5,
  fill: true,
  height: 100,
  fluidParent: null
});
// line graph end
























})