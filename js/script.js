jQuery(document).ready(function($) {



    /* Animation Header Start */
    var hHeader = $('header').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= hHeader) {
            $('header').addClass('bg-scroll');
            $('header').css({
                'background': '#fff',
                'border-bottom': '1px solid #DEDEDE'
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
    /* Animation Header End */




    /* Slick Start */
    $('.slick-wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
        arrows: false,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
      });
      $('.eco-wrapper').slick({
        dots: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 400,
        infinite: true,
        cssEase: 'ease-in-out'
      });
    /* Slick End */

    /* Video Start */
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
    /* Video End */

    /* Animation Sale Start */
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
    /* Animation Sale End */

    $('.materialboxed').materialbox();

    

    $(document).ready(function(){
        $('.sidenav').sidenav();
      });
      // Sidenav End

}); //ready
