jQuery(document).ready(function() {
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
         $('header .mobile-tabs a:first-child').removeClass('inactive');
        $('header .mobile-tabs a:last-child').removeClass('active');
        $('header .mobile-tabs a:last-child').addClass('inactive');
        $('header .mobile-tabs a:first-child').addClass('active');
       
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
/* Images Scroll Start */
var leftWidth = $('#left-scroll img').width();
var rightWidth = $('#right-scroll img').width();
$(window).scroll(function(){
if ($(window).scrollTop() >= 600) {
    $('#left-scroll img').css("left", -leftWidth);
    $('#right-scroll img').css("right", -rightWidth);
    console.log(heightBlocks)
}
else {
    $('#left-scroll img').css("left", "0px")
    $('#right-scroll img').css("right", "0px") 
} 
}); 
/* Images Scroll End */



    //ready
});