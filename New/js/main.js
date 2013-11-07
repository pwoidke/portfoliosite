var degrees = -15;

/*	Define Click Event for Mobile */
if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }

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
            $(this).find('article').hide(200);
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
            $(this).find('article').show(200);
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
    
    $('.toggleButton').click(function () {
        if($('.toggleButton').html() === "+")
        {
            $('.toggleButton').html("&minus;");
            $('.parallelogram').removeClass('full');
        }
        else
        {
            $('.toggleButton').html("&#43;");
            $('.parallelogram').addClass('full');
        }
        $('.parallelogram').click();
    });
});
