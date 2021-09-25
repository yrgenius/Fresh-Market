$(function() {

    let screenWidth = $(window).width();

    $('.slider__wrapper').slick({
        dots: false,
        arrows: true
    });

    if (screenWidth - 240 > 1370) {
        $('.slick-prev').css({ 'top': '50%' });
        $('.slick-next').css({ 'top': '50%' });
    } else {
        $('.slick-prev').css({ 'top': '85%' });
        $('.slick-next').css({ 'top': '85%' });
    }

});