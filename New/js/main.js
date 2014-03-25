var degrees = -15;

/*	Define Click Event for Mobile */
if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }

$(document).ready(function(){

    $('#skillList').find('li').width( Math.floor(100 / $('#skillList').find('li').length) - 1 + "%" );

    $('#expPlot').scatter({ height: 300, width: '100%', xLabel: 'Proficiency', yLabel: 'Passion', rows: 5, columns: 5, subsections: 4, responsive: true });
    $('#artProgramsGraph').scatter({ height: 300, width: '100%', xLabel: 'Program', yLabel: 'Experience', rows: 5, columns: 5, subsections: 4, responsive: true });

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
                width: '65%'
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
                    var points = $('#expPlot').find('.point');
                    var i = 0;
                    window.setTimeout(function(){
                        (function displayPoints() {
                            points.eq(i++).fadeIn(300, displayPoints);
                        })();
                    }, 600);
                    break;
                case "Art &amp; Design":
                break;
                case "Projects":
                    break;
                case "Contact":
                    var links = $('#socialLinks').find('a img');
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
        var toggle = $(this).find('.projectResponsibilitiesHeaderToggle');

        if($(this).next().is(':visible'))
        {
            $(this).next().hide(200);
        }
        else
        {
            $(this).next().show(200);
        }

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


    /* GALLERY */
    $('.galRow').each(function (row) {
        $(this).css({ top: ((row + 1) * -100) });
    });

    $('.galHCell').click(function () {
        var galleryContainer = $('#galleryContainer');

        //Color header cell
        if($(this).hasClass('selected')) {
            $(this).removeClass('selected');

            //Unstack rows
            galleryContainer.stop(true, true).animate({ height: 120 }).removeClass('expanded');
            $('.galRow').each(function(row) { $(this).animate({ top: ((row + 1) * -100) }, 500); });
        }
        else {
            $('.galHCell').removeClass('selected');
            $(this).addClass('selected');

            //Stack rows
            if(!galleryContainer.hasClass('expanded')) {
                galleryContainer.stop(true, true).animate({ height: '+=' + $( ".galRow").length * 100 }).addClass('expanded');
            }
            $( '.galRow').each(function() { $(this).stop(true, true).animate({ top: 0 }, 500); });

            //Load images
        }
    });

});
