$(document).ready(function(){
    $('#slider1').owlCarousel({
        loop:true,
        margin:10,
        
        smartSpeed:5000,
        autoplay:true,
        autoplayTimeout:5000,
        animateIn:'animate__fadeInLeft',
        animateOut:'animate__fadeOutRight',
        
       
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }}
   
    })


    $('#slider2').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }}
   
    })

    var owl = $('#slider1');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function(event) {
        new WOW().init();
    })
    new WOW().init();
    $('#slider2').owlCarousel({
        loop:true,
        margin:10,
       
        dotsEach:true,     
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }}
    })
    $('#slider3').owlCarousel({
        loop:true,
        margin:10,
        dotsEach:2,
        center:true, 

        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }}
    })
    $('#slider4').owlCarousel({
       
        margin:10,
        
        dots:false,
        
          
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }}
    })
    $('#slider5').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('#slider6').owlCarousel({
        loop:true,
        margin:10,
        dotsEach:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

     // start header

     $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 120) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});


    // start top to bottom section

    $(function(){

        //Scroll event
        $(window).scroll(function(){
          var scrolled = $(window).scrollTop();
          if (scrolled > 200) $('.go-top').fadeIn('slow');
          if (scrolled < 200) $('.go-top').fadeOut('slow');
        });
        
        //Click event
        $('.go-top').click(function () {
          $("html, body").animate({ scrollTop: "0" },  500);
        });
    })

     // accordian section

     $('.headeing').click(function(e) {
        e.preventDefault();
    
      let $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('.accordian-parag').removeClass('show');
          $this.parent().parent().find('.accordian-parag').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });

    $('.url >a').click(function () {
        $('.url >a').removeClass('active');
        $(this).addClass('active');
    })

    //  loader
$(document).ready(function(){
    setTimeout(function(){
        $('.pre-loader').fadeOut();
    },2000);
})