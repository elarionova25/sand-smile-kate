$(document).ready(function() {
    console.log('script work!');


    // делаем переключение по ссылкам в команде
    $('.command_list a').on('click', function(e) {
        e.preventDefault();

        let index = $(this).index('.command_list a');
        console.log(index);

        $('.command_list a').removeClass('active');
        $(this).addClass('active');

        $('.command_about').removeClass('command_about_visible');
        $('.command_about').eq(index).addClass('command_about_visible');
    });

    // Делаем карусель в секции photos
    $('.js-slider-wrap').each(function(index, sliderWrap) {
        let slider = $(sliderWrap).find('.js-slider');
        let btnPrev = $(sliderWrap).find('.js-btn-prev');
        let btnNext = $(sliderWrap).find('.js-btn-next');

        $(slider).slick({
            // autoplay: true,
            dots: true,
            prevArrow: btnPrev,
            nextArrow: btnNext,
        });

        console.log(index);
        console.log(sliderWrap);
    });


});
