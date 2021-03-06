
/*	Define Click Event for Mobile */
var click = 'click';
if( 'ontouchstart' in window ){ click = 'touchstart'; }


$(document).ready(function(){

    // Initialize Javascript
    $('.more').show();
    $('.projectResponsibilities').hide();
    $('.showMore').hide();

    // Equalize spacing between skill bars in graph
    var skillList = $('#skillList');
    skillList.find('li').width( Math.floor(100 / skillList.find('li').length) - 1 + "%" );


    // Create graphs
    $('#expPlot').scatter({ height: 300, width: '100%', xLabel: 'Proficiency', yLabel: 'Passion', rows: 5, columns: 5, subsections: 4, responsive: true });
    $('#artProgramsGraph').scatter({ height: 300, width: '100%', xLabel: 'Program', yLabel: 'Experience', rows: 5, columns: 5, subsections: 4, responsive: true });


    // Set technology colors
    $('.projectTech').find('li').each(function () {
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
    $('#code').find('.graphContainer').waypoint(function() {
        var i = 0,
            points = $('.graphContainer').find('.point');
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
            $(this).next().slideUp(200);
            toggle.html("+");
        }
        else
        {
            $(this).next().slideDown(200);
            toggle.html("&minus;");
        }
    });

    // Expand sections
    $('.more').click(function () {

        var showMore = $(this).prev('.showMore');

        if(showMore.is(':visible'))
        {
            $(this).find('h3').text('More');
            showMore.slideUp();
        }
        else
        {
            $(this).find('h3').text('Less');
            showMore.slideDown();
        }
    });

    // Lightbox
    $('.lightbox').imageLightbox({
        selector:       'id="imagelightbox"',   // string;
        allowedTypes:   'png|jpg|jpeg|gif',     // string;
        animationSpeed: 250,                    // integer;
        preloadNext:    true,                   // bool;            silently preload the next image
        enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
        quitOnEnd:      false,                  // bool;            quit after viewing the last image
        quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
        quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
        onStart:        false,                  // function/bool;   calls function when the lightbox starts
        onEnd:          false,                  // function/bool;   calls function when the lightbox quits
        onLoadStart:    function() {$('#loading').fadeIn();},                  // function/bool;   calls function when the image load begins
        onLoadEnd:      function() {$('#loading').fadeOut();}                   // function/bool;   calls function when the image finishes loading
    });

});
