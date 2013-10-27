var degrees = -15;
$(document).ready(function(){

    $('.parallelogram').hover(
        function(){
            if(!$(this).hasClass('full'))
            {
                $(this).stop().animate({
                    skewX: '0deg'
                });
                $(this).children().stop().animate({
                    skewX: '0deg'
                });
                $(this).addClass('square');
            }
        },
        function(){
            if(!$(this).hasClass('full'))
            {
                $(this).stop().animate({
                    skewX: degrees + 'deg'
                });
                $(this).children().stop().animate({
                    skewX: -degrees + 'deg'
                });
                $(this).removeClass('square');
            }
        }
    );

    $('.parallelogram').click(function(){
        if($(this).hasClass('full'))
        {
            $(this).animate({
                skewX: degrees + 'deg',
                width: '13em'
            }, 200, function(){ $(this).removeClass('full'); });
            $(this).children().animate({
                skewX: -degrees + 'deg'
            });
        }
        else
        {
            $(this).animate({
                skewX: '0deg',
                width: '100%'
            });
            $(this).children().animate({
                skewX: '0deg'
            });
            $(this).addClass('full');
        }
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
