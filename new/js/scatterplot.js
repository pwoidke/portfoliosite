/*********************************************

Scatterplot.js
Version: Custom
Author : Paul Woidke
URL    : http://www.paulwoidke.com

*********************************************/
(function ($) {
    $.fn.extend({
        scatter: function (options) {
            var settings = $.extend({
                height: 300,
                width: 300,
                xLabel: '',
                yLabel: '',
                rows: 1,
                columns: 1,
                subsections: 1,
                color: '#CCC',
                responsive: false,
                xUnits: [],
                yUnits: []
            }, options);

            return this.each(function () {

                var chart = $(this),
                    colWidth, rowHeight,
                    xLabel, yLabel,
                    xUnits, yUnits;

                chart.addClass('scatterplot');

                if (settings.width < 1) {
                    settings.width = 0;
                }
                if (settings.height < 1) {
                    settings.height = 0;
                }
                if (settings.rows < 1) {
                    settings.rows = 1;
                }
                if (settings.columns < 1) {
                    settings.columns = 1;
                }
                if (settings.subsections < 1) {
                    settings.subsections = 1;
                }

                if (settings.responsive) {
                    chart.addClass('responsive');
                    colWidth = (1 / settings.columns) * 100;
                    rowHeight = (1 / settings.rows) * 100;
                } else {
                    colWidth = settings.width / settings.columns;
                    rowHeight = settings.height / settings.rows;
                }

                chart.css({
                    position: 'relative',
                    height: settings.height,
                    width: settings.width,
                    backgroundColor: settings.color,
                    margin: 0,
                    backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
                });

                if (settings.responsive) {
                    chart.css({
                        backgroundSize: colWidth + '% ' + rowHeight + '%,' + colWidth + '% ' + rowHeight + '%,' + (colWidth / settings.subsections) + '% ' + (rowHeight / settings.subsections) + '%,' + (colWidth / settings.subsections) + '% ' + (rowHeight / settings.subsections) + '%'
                    });
                } else {
                    chart.css({
                        backgroundSize: colWidth + 'px ' + rowHeight + 'px,' + colWidth + 'px ' + rowHeight + 'px,' + (colWidth / settings.subsections) + 'px ' + (rowHeight / settings.subsections) + 'px,' + (colWidth / settings.subsections) + 'px ' + (rowHeight / settings.subsections) + 'px'
                    });
                }

                if (settings.xUnits.length > 0) {
                    chart.append('<span class="x-Units"><ul></ul></span>');
                    xUnits = chart.find('.x-Units ul');
                    $(settings.xUnits).each(function () {
                        xUnits.append('<li>' + this + '</li>');
                    });
                    xUnits.find('li').width(1 / (settings.xUnits.length - 1) * 100 + '%');
                    chart.find('.x-Units').css({
                        bottom: -xUnits.height()
                    });
                }
                if (settings.yUnits.length > 0) {
                    chart.append('<span class="y-Units"><ul></ul></span>');
                    yUnits = chart.find('.y-Units ul');
                    $(settings.yUnits).each(function () {
                        yUnits.append('<li>' + this + '</li>');
                    });
                    yUnits.find('li').width(1 / (settings.yUnits.length - 1) * 100 + '%');
                    chart.find('.y-Units').css({
                        width: chart.height(),
                        left: -(chart.height() / 2 - yUnits.height() / 2) - yUnits.height(),
                        bottom: chart.height() / 2 - yUnits.height() / 2
                    });
                }

                if (settings.xLabel.length > 0) {
                    chart.append('<span class="x-Label"></span>');
                    xLabel = chart.find('.x-Label').html(settings.xLabel);
                    xLabel.css({
                        left: '40%',
                        bottom: -20
                    });
                    if (settings.responsive) {
                        xLabel.css({
                            left: '40%'
                        });
                    }
                }
                if (settings.yLabel.length > 0) {
                    chart.append('<span class="y-Label"></span>');
                    yLabel = chart.find('.y-Label').html(settings.yLabel);
                    yLabel.css({
                        left: -(50 + chart.find('.y-Units').height()),
                        bottom: chart.height() / 2 - yLabel.height() / 2
                    });
                    if (settings.responsive) {
                        yLabel.css({
                            bottom: (chart.height() / 2 - yLabel.height() / 2) / chart.height() * 100 + '%'
                        });
                    }
                }

                if (settings.xUnits.length > 0) {
                    chart.css({
                        marginBottom: 0 + chart.find('.x-Units').height()
                    });
                }
                if (settings.yUnits.length > 0) {
                    chart.css({
                        marginLeft: 0 + chart.find('.y-Units').height()
                    });
                }
            });
        }
    });
})(jQuery);