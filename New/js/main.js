var degrees = -15;
var barsShown = false;

/*	Define Click Event for Mobile */
if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }

$(document).ready(function(){

    $('.projectTech li').each(function () {
        if($(this).html() === "C#") {
            $(this).css('background-color', '#5A25A2');
        }
        else if($(this).html() === "CSS") {
            $(this).css('background-color', '#1F085E');
        }
        else if($(this).html() === "HTML") {
            $(this).css('background-color', '#FF0000');
        }
        else if($(this).html() === "Javascript") {
            $(this).css('background-color', '#F15501');
        }
        else if($(this).html() === "Obj-C") {
            $(this).css('background-color', '#438EFF');
        }
        else if($(this).html() === "Sass") {
            $(this).css('background-color', '#FF0000');
        }
    });
    
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
            
            // Check and trigger section-specific events here
            switch ($(this).children('h3').html()) {
                case "About":
                break;
                case "Code":
                    if(!barsShown) {
                        $('#jsBar').jqbar({ label: 'Javascript', value: 90, barColor: '#F15501', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#jQBar').jqbar({ label: 'jQuery', value: 90, barColor: '#3a89c9', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#htmlBar').jqbar({ label: 'HTML', value: 95, barColor: '#FF0000', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#cssBar').jqbar({ label: 'CSS', value: 90, barColor: '#1F085E', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#sassBar').jqbar({ label: 'SASS', value: 50, barColor: '#FF0000', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#csBar').jqbar({ label: 'C#', value: 70, barColor: '#5A25A2', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#aspNetBar').jqbar({ label: 'ASP.NET', value: 70, barColor: '#D64747', barWidth: 20, barLength: $('body').width()*.25 });
                        $('#objcBar').jqbar({ label: 'Objective-C', value: 50, barColor: '#438EFF', barWidth: 20, barLength: $('body').width()*.25 });
                        barsShown = true;
                    }
                break;
                case "Projects":
                break;
                case "Contact":
                    var links = $('#socialLinks a img');
                    var i = 0;
                    window.setTimeout(function(){
                        (function displayImages() {  
                            links.eq(i++).fadeIn(300, displayImages);  
                        })();
                    }, 600);
                break;
            }
        }
        
        //if ($(".full").length == $(".parallelogram").length)
        //{
        //    $('.toggleButton').html("&minus;");
        //}
        //else if ($(".full").length == 0)
        //{
        //    $('.toggleButton').html("+");
        //}
    });
    
    $('article').click(function (e) { e.stopPropagation(); });
    
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
        if($(this).html() === "+")
        {
            $(this).html("&minus;");
            $('.parallelogram').removeClass('full');
        }
        else
        {
            $(this).html("+");
            $('.parallelogram').addClass('full');
        }
        $('.parallelogram').click();
    });
    
    $('.projectResponsibilitiesHeader').click(function () {
        if($(this).next().is(':visible'))
        {
            $(this).next().hide(200);
        }
        else
        {
            $(this).next().show(200);
        }
    });
    
    $('.projectResponsibilitiesHeader').click(function () {
        var toggle = $(this).find('.projectResponsibilitiesHeaderToggle');
        if(toggle.html() === "+")
        {
            toggle.html("&minus;");
            $(this).next().removeClass('responsibilitiesShow');
        }
        else
        {
            toggle.html("+");
            $(this).next().addClass('responsibilitiesShow');
        }
    });

});
