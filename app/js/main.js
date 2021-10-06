// import Swiper  from 'swiper/bundle';
// import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper.use([Navigation, Pagination]);

// const swiper = new Swiper('.news__container', {
//     autoplay: 1000,
//     observer: true,
//     observeParents: true,
//     loop: true,
//     slidesPerView: 5,
//     pagination: {
//         el: '.swiper-pagination',
//         loop: true,
//     },
// }); 

$(function() {

    let screenWidth = $(window).width();
    const select = $('.header__catalog');
    let flagSelect = 0;  
    // const swiper = new Swiper(...);
    

    select.on('click blur', function(event) {
        flagSelect = flagSelect + 1;
        let widthCatalog = select[0].clientWidth;
        console.dir(widthCatalog);

        $('.header__choice').css({'width': widthCatalog});

        if (event.type == 'click' && flagSelect == 1) {
            $(this).css({'border-radius': '6px 6px 0 0'});
            $('.header__list').fadeIn();
            $('.header__list').show();
            $(this).css({
                'background-image': "url('../images/header/nav_icon.svg'), url('../images/header/select-arrow-up.svg')"
            });
        }

        if (event.type == 'blur' || flagSelect != 1) {
            $(this).css({'border-radius': '6px'});
            $('.header__list').fadeOut();
            $('.header__list').hide();
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

    // $(".news__item").on("mouseover", function(){
    //     $(".news__massage").css({
    //         "color": "$green-900",
    //     });
    // });
    
    // $('.news__brands').slick({
    //     dots: false,
    //     arrows: false
    // });

    if (screenWidth - 240 > 1370) {
        $('.slick-prev').css({ 'top': '50%' });
        $('.slick-next').css({ 'top': '50%' });
    } else {
        $('.slick-prev').css({ 'top': '85%' });
        $('.slick-next').css({ 'top': '85%' });
    }

    const mixContainer1 = mixitup('.products__list');

});