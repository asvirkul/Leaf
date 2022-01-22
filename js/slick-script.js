jQuery(document).ready(function() {
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
/* Product Slider */
$('.product-slider-content').slick({
    arrows: false,
    speed: 400,
    infinite: true,
    cssEase: 'ease-in-out',
    draggable: true,
    slidesToScroll: 1,
    infinite: false,
    arrows: true
});
/* Product Slider */
//ready
});