var degrees = 15;

/*	Define Click Event for Mobile */
if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }

$(document).ready(function(){
    var items = document.getElementsByTagName('article')
    for(i = 0, l = items.length; i < l; i++){
        new Maskew(items[i], degrees, { touch: false, anchor: 'bottom', showElement: 'inline-block' });
    }
    //new Maskew (document.getElementById('navButton'), degrees, { touch: false, anchor: 'bottom', showElement: 'inline-block' });
    
    $('article').hover(
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,0deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '-' + (degrees * 1.65) + 'px, -' + (degrees * 4.8) + 'px',
                rotate3d: '0,0,1,0deg'
            });
            $(this).children('.alt').stop().animate({
                bottom: parseInt($('.alt').parent().css('height'),10) - parseInt($('.maskew').css('height'),10) + 'px'
            });
            $(this).addClass('square');
        },
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,-' + degrees + 'deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '-' + (degrees * 1.65) + 'px, -' + (degrees * 4.8) + 'px',
                rotate3d: '0,0,1,' + degrees + 'deg'
            });
            $(this).children('.alt').stop().animate({
                bottom: '0px'
            });
            $(this).removeClass('square');
        }
    );
    
    $('article').trigger('mouseleave');
    
    $('#navButton').click(function(){
        if ($('nav').hasClass('closed'))
        {
            $('nav').animate({
                height: "100px"
            });
            $('#content').animate({
                marginTop: '100px',
            });
            $('#container').animate({
                border: '50px solid red',
            });
            $('nav').removeClass('closed');
            $('nav').addClass('open');
        }
        else if ($('nav').hasClass('open'))
        {
            $('nav').animate({
                height: "0"
            });
            $('#content').animate({
                marginTop: '0'
            });
            $('#container').animate({
                border: '0',
            });
            $('nav').removeClass('open');
            $('nav').addClass('closed');
        }
    });
    
});