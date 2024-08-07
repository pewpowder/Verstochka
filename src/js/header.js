import $ from "jquery";

$(document).ready(function(){
    $('.link:not([data-dropdown])').click(function (e) {
        e.preventDefault();

        $('.link').removeClass('active');
        $(this).addClass('active');
    });

    $('.link[data-dropdown]').click(function(e) {
        e.preventDefault();

        $(this).find('.arrow').toggleClass('open');
    });
});