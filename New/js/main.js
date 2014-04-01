
/*	Define Click Event for Mobile */
var click = 'click';
if( 'ontouchstart' in window ){ click = 'touchstart'; }


$(document).ready(function(){

    var parallelograms = $('.parallelogram'),
        skillList = $('#skillList');

    // Equalize spacing between skill bars in graph
    skillList.find('li').width( Math.floor(100 / skillList.find('li').length) - 1 + "%" );

    $('#expPlot').scatter({ height: 300, width: '100%', xLabel: 'Proficiency', yLabel: 'Passion', rows: 5, columns: 5, subsections: 4, responsive: true });
    $('#artProgramsGraph').scatter({ height: 300, width: '100%', xLabel: 'Program', yLabel: 'Experience', rows: 5, columns: 5, subsections: 4, responsive: true });

    // Set language background colors
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


    parallelograms.click(function(){
        if($(this).hasClass('full'))
        {
            $(this).find('article').hide(200);
            $(this).animate({
                skewX: degrees + 'deg',
                width: '65%'
            }, 200, function(){
                $(this).removeClass('full');
                checkOpen();
            });
            $(this).children().animate({
                skewX: -degrees + 'deg'
            });
        }
        else
        {
            $(this).animate({
                skewX: '0deg',
                width: '100%'
            }, 200, function(){
                $(this).addClass('full');
                checkOpen();
            });
            $(this).children().animate({
                skewX: '0deg'
            });
            $(this).find('article').show(200);

            // Check and trigger section-specific events here
            var i = 0;
            switch ($(this).children('h3').html()) {
                case "About":



                break;
                case "Code":

                    // Show points
                    var points = $('#expPlot').find('.point');
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

                    // Show icons
                    var links = $('#socialLinks').find('a img');
                    window.setTimeout(function(){
                        (function displayImages() {
                            links.eq(i++).fadeIn(300, displayImages);
                        })();
                    }, 600);

                break;
            }
        }
    });


    $('.projectResponsibilitiesHeader').click(function () {
        var toggle = $(this).find('.projectResponsibilitiesHeaderToggle');

        if($(this).next().is(':visible'))
        {
            $(this).next().hide(200);
            toggle.html("+");
            $(this).next().addClass('responsibilitiesShow');
        }
        else
        {
            $(this).next().show(200);
            toggle.html("&minus;");
            $(this).next().removeClass('responsibilitiesShow');
        }
    });

});
