$(function() {

    let screenWidth = $(window).width();
    const select = $('.form__catalog');
    let flagSelect = 0;

    select.on('click blur', function(event) {
        flagSelect = flagSelect + 1;
        if (event.type == 'click' && flagSelect == 1) {
            $(this).css({
                'background-image': "url('../images/header/nav_icon.svg'), url('../images/header/select-arrow-up.svg')"
            });
        }

        if (event.type == 'blur' || flagSelect != 1) {
            $(this).css({
                'background-image': "url('../images/header/nav_icon.svg'), url('../images/header/select-arrow-down.svg')"
            });
            flagSelect = 0;
        }

    });


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