jQuery(document).ready(function($) {

    /* Animation Header Start */
    var hHeader = $('.main').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= hHeader) {
            $('.main').addClass('bg-scroll');
            $('.main').css({
                'background': '#fff',
                'border-bottom': '1px solid #DEDEDE'
            })
            $('.main #logo-pic').attr('src', 'images/razor.png')
            $('.main .menu li a').css({
                'color': '#797979'
            })
            $('.sidenav-trigger').css({
                'color': '#797979'
            })
            $('.main i').css({
                'color': '#000',
            })
            $('.main .line-logo').css({
                'background': '#000'
            })
        }
        else {
            $('.main').removeClass('bg-scroll');
            $('.main #logo-pic').attr('src', 'images/razor-white.png')
            $('.main .menu li a').css({
                'color': '#fff'
            })
            $('.sidenav-trigger').css({
                'color': '#fff'
            })
            $('.main').css({
                'background': 'transparent',
                'border': 'none'
            })
            $('.main i').css({
                'color': 'white'
            })
            $('.main .line-logo').css({
                'background': '#fff',
                'color': 'white'
            })
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    } 
    /* Animation Header End */
    
    /* Scrollspy  */
    $('.scrollspy-shop-wrapper a:first-child').addClass('active')
    $('.scrollspy-shop-wrapper a').click(function(e) {
        e.preventDefault();
        $(".scrollspy-shop-wrapper a").removeClass('active');
        $(this).addClass('active');
    });
    var posTabs = $('.scrollspy-shop-wrapper').offset().top;
    $(window).scroll(function() {
        var scrollWindow = $(window).scrollTop();
        if (scrollWindow > posTabs) {
            $('.scrollspy-shop-wrapper').addClass('fixed')
        }
        else {
            $('.scrollspy-shop-wrapper').removeClass('fixed')
        }
    });
    /* Scrollspy  */

      /* Slidenav close */
      $('#closenav').click(function(){
        $('.sidenav').sidenav('close');
      });
      /* Slidenav close */
    
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
    var hideText = $('.options-hidden').height() + 20;
    $('.options-hidden', this).css('margin-bottom', - + hideText )
    $('.razors-shop-wrapper .row-kit-items .kit-item').hover(function() {
        $('.options-hidden', this).css('margin-bottom', "0px")
    }, function() {
        $('.options-hidden').css("margin-bottom", - + hideText);
    });

    /* Animation Sale End */

    $('.materialboxed').materialbox();

    

    $( "#tabs" ).tabs();

    $(document).ready(function(){
        $('.sidenav').sidenav();
      });
      // Sidenav End

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
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3,
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3,
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '20px',
                slidesToShow: 3,
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1
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
}); //ready
