
/*	Define Click Event for Mobile */
var click = 'click';
if( 'ontouchstart' in window ){ click = 'touchstart'; }


$(document).ready(function(){

    // Equalize spacing between skill bars in graph
    var skillList = $('#skillList');
    skillList.find('li').width( Math.floor(100 / skillList.find('li').length) - 1 + "%" );


    // Create graphs
    $('#expPlot').scatter({ height: 300, width: '100%', xLabel: 'Proficiency', yLabel: 'Passion', rows: 5, columns: 5, subsections: 4, responsive: true });
    $('#artProgramsGraph').scatter({ height: 300, width: '100%', xLabel: 'Program', yLabel: 'Experience', rows: 5, columns: 5, subsections: 4, responsive: true });


    // Set technology colors
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


    // Show code points when graph is visible
    $('#graphContainer').waypoint(function() {
        var i = 0,
            points = $('#graphContainer').find('.point');
        window.setTimeout(function () {
            (function displayPoints() {
                points.eq(i++).fadeIn(300, displayPoints);
            })();
        }, 600);
    }, { offset: 'bottom-in-view' });


    // Show contact icons when section is visible
    $('#contact').waypoint(function() {
        var i = 0,
            links = $('#contactLinks').find('a img');
        window.setTimeout(function () {
            (function displayImages() {
                links.eq(i++).fadeIn(300, displayImages);
            })();
        }, 600);
    }, { offset: 'bottom-in-view' });


    // Scroll to section on nav button click
    $('.linkBio').click(function() {
        $('html, body').animate({
            scrollTop: $("#bio").offset().top - 48
        }, 1000);
    });
    $('.linkCode').click(function() {
        $('html, body').animate({
            scrollTop: $("#code").offset().top - 48
        }, 1000);
    });
    $('.linkArt').click(function() {
        $('html, body').animate({
            scrollTop: $("#art").offset().top - 48
        }, 1000);
    });
    $('.linkContact').click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 48
        }, 1000);
    });

    // Expand project responsibilities
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
