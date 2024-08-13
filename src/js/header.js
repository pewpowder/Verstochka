import $ from "jquery";

$(document).ready(function(){
    $('.link:not([data-dropdown])').click(function (e) {
        e.preventDefault();

        $('.link').removeClass('link_active');
        $(this).addClass('link_active');
    });

    $('.link[data-dropdown]').click(function(e) {
        e.preventDefault();

        $(this).find('.arrow').toggleClass('arrow_open');
    });
});