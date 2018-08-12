$(document).ready(function(){
    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        centerPadding: '50px',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<img class="prev" src="img/prev.png">',
        nextArrow:'<img class="next" src="img/next.png">',
        variableWidth: true,
        lazyLoad: 'ondemand'
    });
});