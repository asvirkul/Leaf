jQuery(document).ready(function($) {
/* Accordion */
$('.product-info-wrapper .product-accordion h3').click(function() {
    $(this).addClass('iconActive');
    $('.iconActive .plus').toggleClass('hide');
    $('.iconActive .minus').toggleClass('show');
    $(this).removeClass('iconActive');
});
$('.product-kits h3').click(function() {
    $(this).addClass('iconActive');
    $('.iconActive .plus').toggleClass('hide');
    $('.iconActive .minus').toggleClass('show');
    $(this).removeClass('iconActive');
});
$( ".accordion" ).accordion({
    active: false,
    collapsible: true
});
$( ".kit-accordion" ).accordion({
    active: false,
    collapsible: true
});
/* Accordion */
/* Stars Hover  */
$('.star-select').hover(function () {
    var prev = $(this).prevAll().addBack().addClass('star-fill');
    $(this).nextAll().removeClass('star-fill'); 
},
function () {
    $(this).prevAll().addBack().removeClass('star-fill');
}
);
/* Stars Hover  */
$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
});
}); //ready