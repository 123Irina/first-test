$(document).ready(function() {
    'use strict';

    $('.slid span').click(function () {

        if (!$(this).hasClass('active')) {
            $('.slid span').removeClass('active');
            $(this).addClass('active');
        }
        spanClassTab();
    });

    function spanClassTab() {
        if ($('span.active').hasClass('two')) {
            $('.slick-slider .one, .slick-slider .three').addClass('hidden');
            $('.slick-slider .two').removeClass('hidden');
        }
        if ($('span.active').hasClass('one')) {
            $('.slick-slider .two, .slick-slider .three').addClass('hidden');
            $('.slick-slider .one').removeClass('hidden');
        }
        if ($('span.active').hasClass('three')) {
            $('.slick-slider .one, .slick-slider .two').addClass('hidden');
            $('.slick-slider .three').removeClass('hidden');
        }
    }
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
});


