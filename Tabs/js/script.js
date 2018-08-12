$(document).ready(function () {

    $('.button-group button').click(function () {
        $('.hidden').removeClass("hidden");
    });
       //переключение Табов

    $('nav .tabs').click(function () {
        if (!$(this).hasClass('is-checked')) {
            $('.tabs.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        }
    });

//filter with isotope

    var $isotopeGrid = $('.grid');

    $isotopeGrid.isotope({
        itemSelector: '.element-item',
        percentPosition: true
    });
    $('.filters button').click(function () {
        var filterValue = $(this).data('filter');
        console.log(filterValue);
        $isotopeGrid.isotope({
            filter: filterValue
        });
    });

});
