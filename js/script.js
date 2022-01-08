jQuery(document).ready(function($) {
    /* Tabs */
        $('.instructions-wrapper #tabs li a:not(:first)').addClass('inactive');
        $('.instructions-wrapper .hide-tabs').hide();
        $('.instructions-wrapper .hide-tabs:first').show();
        $('.instructions-wrapper #tabs a').click(function(){
            var t = $(this).attr('href');
            $('.instructions-wrapper #tabs a').addClass('inactive');        
            $(this).removeClass('inactive');
            $('.instructions-wrapper .hide-tabs').hide();
            $(t).fadeIn('slow');
            return false;
        })
        $('header .mobile-tabs a:not(:first)').addClass('inactive');
        $('.instructions-wrapper .hide-tabs').hide();
        $('.instructions-wrapper .hide-tabs:first').show();
        $('header .mobile-tabs a').click(function(){
            var t = $(this).attr('href');
            $('header .mobile-tabs a').addClass('inactive');        
            $(this).removeClass('inactive');
            $('.instructions-wrapper .hide-tabs').hide();
            $(t).fadeIn('slow');
            return false;
        })

        if($(this).hasClass('inactive')){  
            $('.instructions-wrapper #tabs li a').addClass('inactive');         
            $(this).removeClass('inactive');
            $('.container').hide();
            $(t).fadeIn('slow');    
        }
    /* Tabs */
    /* Mobile Sidenav Start */
        $('.sidenav').sidenav();
        $('#closenav').click(function(){
            $('.sidenav').sidenav('close');
          });
    /* Mobile Sidebar End */
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
    /* Header instruction Animation End */
    /* Instruction Animation Start */
        var heightBlocks = $('#tabs, .tabs-img, .instructions-title');
        var heightInstruct = heightBlocks.height();
        var leftWidth = $('#left-scroll img').width();
        var rightWidth = $('#right-scroll img').width();
        $(window).scroll(function(){
        if ($(window).scrollTop() >= heightInstruct) {
            $('#left-scroll img').css("left", -leftWidth);
            $('#right-scroll img').css("right", -rightWidth);
        }
        else {
            $('#left-scroll img').css("left", "0px")
            $('#right-scroll img').css("right", "0px") 
        } 
        }); 
    /* Instruction Animation End */
    /* Materialize Gallery Start */
        $('.materialboxed').materialbox();
    /* Materialize Gallery End */
    /* Razors Up Start */
        $('.instructions-wrapper #tabs a').click(function() {
            $(".instructions-wrapper #tabs a").removeClass('active');
            $(this).addClass('active');
        })
        $('header .mobile-tabs a').click(function() {
            $("header .mobile-tabs a").removeClass('active');
            $(this).addClass('active');
        })
        $('.img-left').addClass('up');
        $('.instructions-wrapper  #tabs a:first-child').click(function() {
            $(".tabs-img div").removeClass('up');
            $('.img-left').addClass('up');
            $('header .mobile-tabs a:last-child').removeClass('active');
            $('header .mobile-tabs a:last-child').addClass('inactive');
            $('header .mobile-tabs a:first-child').addClass('active');
            $('header .mobile-tabs a:first-child').removeClass('inactive');
        })
        $('.instructions-wrapper #tabs a:last-child').click(function() {
            $(".tabs-img div").removeClass('up');
            $('.img-right').addClass('up');
            $('header .mobile-tabs a:first-child').removeClass('active');
            $('header .mobile-tabs a:first-child').addClass('inactive');
            $('header .mobile-tabs a:last-child').addClass('active'); 
            $('header .mobile-tabs a:last-child').removeClass('inactive');
        })
        /* *****************/
        $('header .mobile-tabs a:first-child').click(function() {
            $(".tabs-img div").removeClass('up');
            $('.img-left').addClass('up');
        })
        $('header .mobile-tabs a:last-child').click(function() {
            $(".tabs-img div").removeClass('up');
            $('.img-right').addClass('up');
            $(".instructions-wrapper #tabs a:last-child").addClass('active');
            $(".instructions-wrapper #tabs a:last-child").removeClass('inactive');
            $(".instructions-wrapper #tabs a:first-child").addClass('inactive');
    
        })
        $('header .mobile-tabs a:first-child').click(function() {
            $(".tabs-img div").removeClass('up');
            $('.img-left').addClass('up');
            $(".instructions-wrapper #tabs a:first-child").addClass('active');
            $(".instructions-wrapper #tabs a:first-child").removeClass('inactive');
            $(".instructions-wrapper #tabs a:last-child").addClass('inactive');
    
        })
    /* Razors Up End */
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
    /* Slick Instruction Start */
        $('.slick-instr-wrapper').slick({
            arrows: false,
            speed: 400,
            infinite: true,
            cssEase: 'ease-in-out',
            asNavFor: '.imagesnew_dotted',
            draggable: false,
            slidesToScroll: 1,
            infinite: false,
            arrows: true
        });
        $('.imagesnew_dotted').slick({ // настройка навигации
            slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
            asNavFor: '.slick-instr-wrapper', // указываем что это навигация для блока выше
            focusOnSelect: true // указываем что бы слайделось по клику
        });
    /* Slick Instruction End */
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

    /* Slick SLider Start */
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



    /* Checkbox */
    $( ".options-hidden input" ).on( "click", function() {
        $(".activeAnim .kit-descript, .activeItem .kit-descript").html( "red");
        $(".activeAnim .kit-img img, .activeItem .kit-img img").attr('src', 'images/kit2.jpg');
      });
    /* Checkbox */

   
}); //ready
