(function(){
    let $slider = $('.slider');
    $slider.slick({
        dots:false,
        arrows:false,
        fade:true
    });

    $(".slider-prev").on('click', function(e){
        e.prevent
        $slider.slick('slickPrev');
    });
    $(".slider-next").on('click', function(){
        $slider.slick('slickNext');
    });

    $(".toggle-menu").on('click',function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('menu-showed');
    })

    $('.slider__pagination-lnk').on('click',function(){
        let idx = $(this).data('slick-idx');
        console.log(idx)
        $slider.slick('slickGoTo',idx,false)
    })

    new WOW().init();
})()