var degrees = -15;

$(document).ready(function(){

    $('.parallelogram').hover(
        function(){
            $(this).stop().animate({
                skewX: '0deg'
            });
            $(this).children().stop().animate({
                skewX: '0deg'
            });
            $(this).addClass('square');
        },
        function(){
            $(this).stop().animate({
                skewX: degrees + 'deg'
            });
            $(this).children().stop().animate({
                skewX: -degrees + 'deg'
            });
            $(this).removeClass('square');
        }
    );

    $('.parallelogram').click(function(){
        $(this).animate({
//            height: 500
        });
    });

    $('.parallelogram').css(
        {transform: 'skewX(' + degrees + 'deg)'},
        {'-o-transform': 'skewX(' + degrees + 'deg)'},
        {'-moz-transform': 'skewX(' + degrees + 'deg)'},
        {'-webkit-transform': 'skewX(' + degrees + 'deg)'}
    );
    $('.parallelogram').children().css(
        {transform: 'skewX(' + -degrees + 'deg)'},
        {'-o-transform': 'skewX(' + -degrees + 'deg)'},
        {'-moz-transform': 'skewX(' + -degrees + 'deg)'},
        {'-webkit-transform': 'skewX(' + -degrees + 'deg)'}
    );
});
