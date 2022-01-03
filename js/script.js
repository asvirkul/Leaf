jQuery(document).ready(function($) {
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
    /* Slick Instruction Start */
    $('.slick-instr-wrapper').slick({
        dots: true,
        arrows: false,
        dots: true,
        speed: 400,
        infinite: true,
        cssEase: 'ease-in-out'
    });
    /* Slick Instruction End */
        $('.sidenav').sidenav();
        $('#closenav').click(function(){
            $('.sidenav').sidenav('close');
          });
    $('.materialboxed').materialbox();
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
    
    /* Tabs */
    $('#tabs li a:not(:first)').addClass('inactive');
    $('.hide-tabs').hide();
    $('.hide-tabs:first').show();
    $('#tabs a').click(function(){
        var t = $(this).attr('href');
        $('#tabs a').addClass('inactive');        
        $(this).removeClass('inactive');
        $('.hide-tabs').hide();
        $(t).fadeIn('slow');
        return false;
    })

if($(this).hasClass('inactive')){ //this is the start of our condition 
    $('#tabs li a').addClass('inactive');         
    $(this).removeClass('inactive');
    $('.container').hide();
    $(t).fadeIn('slow');    
}
    /* Tabs */

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
      
      /* Slidenav close */
    
    /* Video Start */
    
    /* Video End */
    $('.scrollspy').scrollSpy();
    /* Animation Sale Start */
    var sale = $('.sale-anim');
    sale.hover(function () {
        $(this).addClass('activeAnim');
        $(this).animate({
            top: '-10px'
        }, 10)
    }, function() {
        $(this).removeClass('activeAnim');
        $(this).animate({
            top: '0px'
        }, 10);
    });
    var acces = $(".accessories-wrapper .kit-item");
    acces.hover(function() {
        $(this).addClass('activeItem');
    }, function() {
        $(this).removeClass('activeItem');
    })
         var hideText = $('.options-hidden').innerHeight();
        $('.options-hidden', this).css("margin-bottom", - + hideText);
        $('.options-hidden').css('margin-bottom', '-' + hideText + 'px');
        $('.razors-shop-wrapper .row-kit-items .kit-item').hover(function() {
            $('.options-hidden', this).css('margin-bottom', "0px")
        }, function() {
            $('.options-hidden', this).css("margin-bottom", - + hideText);
        });   

    /* Animation Sale End */

    /* Checkbox */
    $( ".options-hidden input" ).on( "click", function() {
        $(".activeAnim .kit-descript, .activeItem .kit-descript").html( "red");
        $(".activeAnim .kit-img img, .activeItem .kit-img img").attr('src', 'images/kit2.jpg');
      });
    /* Checkbox */

    

    
      // Sidenav End

    /* Slick Start */
   
}); //ready
