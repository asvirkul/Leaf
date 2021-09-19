jQuery(document).ready(function($) {

    var myVideo = document.getElementById("video-main"); 
    $('.video-wrapper .play-vid').hide();
    $('.video-control').click(function () {
    if ( $('.video-wrapper .play-vid').is(':hidden') ) {
        $('.video-wrapper .pause-vid').hide();
        $('.video-wrapper .play-vid').show();
    }
    else {
        $('.video-wrapper .play-vid').hide();
        $('.video-wrapper .pause-vid').show();
    }
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause(); 
    } 
) 
    var sale = $('.sale-anim');
    sale.hover(function () {
        $(this).animate({
            top: '-10px'
        }, 10)
    }, function() {
        $(this).animate({
            top: '0px'
        }, 10);
    });

    /* Slider Start */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, 
        autoplay: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
      });
      /* Slider End */

      $('.materialboxed').materialbox();

      var hHeader = $('header').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= hHeader) {
            $('header').addClass('bg-scroll');
            $('header').css({
                'background': '#fff'
            })
            $('#logo-pic').attr('src', 'images/razor.png')
            $('header .menu li a').css({
                'color': '#797979'
            })
            $('.sidenav-trigger').css({
                'color': '#797979'
            })
            $('header i').css({
                'color': '#000',
            })
            $('header .line-logo').css({
                'background': '#000'
            })
        }
        else {
            $('header').removeClass('bg-scroll');
            $('#logo-pic').attr('src', 'images/razor-white.png')
            $('header .menu li a').css({
                'color': '#fff'
            })
            $('.sidenav-trigger').css({
                'color': '#fff'
            })
            $('header').css({
                'background': 'transparent',
                'border': 'none'
            })
            $('header i').css({
                'color': 'white',
            })
            $('header .line-logo').css({
                'background': 'white'
            })
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    } 
    //header

}); //ready
