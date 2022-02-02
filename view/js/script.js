jQuery(document).ready(function($) {
    /* Bag */
    var bagWidth = $('.bag-sidenav-wrapper').width();
    $('header .menu-right .bag-header').click(function(e) {
        e.preventDefault();
        $('.dark').fadeIn();
        $('.bag-sidenav-wrapper').animate({
            right: 0
        }, 300)
    });
    $('.close-bag').click(function () { 
        $('.dark').fadeOut();
        $('.bag-sidenav-wrapper').animate({
            right: '-30vw'
        }, 300)
     });
    /* Bag */
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
                $('.main #logo-pic').attr('src', 'http://leaf.loc/view/images/razor.png')
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
                $('.main #logo-pic').attr('src', 'http://leaf.loc/view/images/razor-white.png')
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
        /* Checkbox */
        
        var imgChange = $('.kit-img img:first-child').attr('src');  
        $( ".options-hidden input" ).on( "click", function() {
            /* $(".activeAnim .kit-descript, .activeItem .kit-descript").html( "red"); */
            $(".main-change").attr('src', imgChange);
          });
          $('.color-wrapper input[type="checkbox"]').click(function() {
            $(this).addClass('box');
          });
          $('div.product-right-info-wrapper.col.s12.l5 > form > div.color-wrapper > div.product-color > p:nth-child(1) input').attr('checked', 'true');
        /* Checkbox */
    /* Mobile Sidenav Start */
    $('.sidenav').sidenav();
    $('#closenav').click(function(){
        $('.sidenav').sidenav('close');
      });
/* Mobile Sidebar End */
/* Materialize Gallery Start */
    $('.materialboxed').materialbox();
/* Materialize Gallery End */
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
$('.scrollspy').scrollSpy();
/* Scrollspy */

    /* Header instruction Animation Start */
        $('.mobile-tabs').hide();
        $('.shave-us').hide();
        $(window).scroll(function() {
        if ($(window).scrollTop() >= 600){  
            $('.shave-us').fadeIn();
            $('.instruction-header .logo, .instruction-header .menu-left li:not(.shave-us), .instruction-header .menu-right .menu, .mobile-bag .menu').fadeOut();
            $('.mobile-tabs').fadeIn();
        }
        else {
            $('.shave-us').fadeOut();
            $('.instruction-header .logo, .instruction-header .menu-left li:not(.shave-us), .instruction-header .menu-right .menu, .mobile-bag .menu').fadeIn();
            $('.mobile-tabs').fadeOut();
        } 
        });
        var hideText = $('.options-hidden').innerHeight();
        $('.options-hidden', this).css("margin-bottom", - + hideText);
        $('.options-hidden').css('margin-bottom', '-' + hideText + 'px');
        $('.razors-shop-wrapper .row-kit-items .kit-item').hover(function() {
            $('.options-hidden', this).css('margin-bottom', "0px")
        }, function() {
            $('.options-hidden', this).css("margin-bottom", - + hideText);
        });  


    


        


    

    

    /* Animation Line */
    $('.tabs-all-links-wrapper .tabs a').click(function(e){
        e.preventDefault();
          $('.anim-line').removeAttr('style');
          $('.anim-line').css('left', 'unset');
         $('.anim-line').animate({
            
             'width': '100%'
  
         }, 400).animate({
  
             'right': '-100%'
  
         }, 400);
  
      }); // click
  
    /* Animation Line */





        

}); //ready
