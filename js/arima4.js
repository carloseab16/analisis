anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set(getData4());

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});

    // map data for the third series, take x from the zero column and value from the third column of data set
    var seriesData_3 = dataSet.mapAs({'x': 0, 'value': 3});

    var seriesData_4 = dataSet.mapAs({'x': 0, 'value': 4});
    // create line chart4
    var chart4 = anychart.line();

    // turn on chart4 animation
    chart4.animation(true);

    // set chart4 padding
    chart4.padding([10, 20, 5, 20]);

    // turn on the crosshair
    chart4.crosshair()
            .enabled(true)
            .yLabel(false)
            .yStroke(null);

    // set tooltip mode to point
    chart4.tooltip().positionMode('point');

    // set chart4 title text settings
    chart4.title('Entrenamiento');

    // set yAxis title
    chart4.yAxis().title('Cantidad de ventas');
    chart4.xAxis().labels().padding(5);

    // create first series with mapped data
    var series_1 = chart4.line(seriesData_1);
    series_1.name('Nuevo Sistema');
    series_1.hovered().markers()
            .enabled(true)
            .type('circle')
            .size(4);
    series_1.tooltip()
            .position('right')
            .anchor('left-center')
            .offsetX(5)
            .offsetY(5);

    // create second series with mapped data
    var series_2 = chart4.line(seriesData_2);
    series_2.name('Datos de entrenamiento');
    series_2.hovered().markers()
            .enabled(true)
            .type('circle')
            .size(4);
    series_2.tooltip()
            .position('right')
            .anchor('left-center')
            .offsetX(5)
            .offsetY(5);

    // create third series with mapped data
    var series_3 = chart4.line(seriesData_3);
    series_3.name('Predicción');
    series_3.hovered().markers()
            .enabled(true)
            .type('circle')
            .size(4);
    series_3.tooltip()
            .position('right')
            .anchor('left-center')
            .offsetX(5)
            .offsetY(5);

    var series_4 = chart4.line(seriesData_4);
    series_4.name('Predicción');
    series_4.hovered().markers()
            .enabled(true)
            .type('circle')
            .size(4);
    series_4.tooltip()
            .position('right')
            .anchor('left-center')
            .offsetX(5)
            .offsetY(5);
        

    // turn the legend on
    chart4.legend()
            .enabled(true)
            .fontSize(13)
            .padding([0, 0, 10, 0]);

    // set container id for the chart4
    chart4.container('arima4');
    // initiate chart4 drawing
    chart4.draw();
});

function getData4() {
    return [
        ['2017-1',,331,,],
        ['2017-2',,425,,],
        ['2017-3',,525,,],
        ['2017-4',,410,,],
        ['2017-5',,302,,],
        ['2017-6',,298,,],
        ['2017-7',,652,,],
        ['2017-8',,715,,],
        ['2017-9',,443,,],
        ['2017-10',,279,,],
        ['2017-11',,352,,],
        ['2017-12',,489,,],
        ['2018-1',,,596.918919,],
        ['2018-2',15,,501.785642,],
        ['2018-3',35,,424.740767,],
        ['2018-4',40,,409.982095,],
        ['2018-5',447,,524.735812,],
        ['2018-6',649,,553.448445,],
        ['2018-7',1008,,541.832853,],
        ['2018-8',953,,466.257226,],
        ['2018-9',595,,495.777374,],
        ['2018-10',880,,524.816227,],
        ['2018-11',802,,580.213318,],
        ['2018-12',895,,541.615759,],
        ['2019-1',925,,539.145384,],
        ['2019-2',763,,,],
        ['2019-3',1225,,,],
        ['2019-4',1043,,,],
        ['2019-5',942,,,],
        ['2019-6',882,,,],
        ['2019-7',1122,,,],
        ['2019-8',,,,1359.791701],
        ['2019-9',,,,1586.782803],
        ['2019-10',,,,1770.865411],
        ['2019-11',,,,2039.352294],
        ['2019-12',,,,2004.601425],
        ['2020-1',,,,1759.459201],
        ['2020-2',,,,2013.407716],
        ['2020-3',,,,2009.726396],
        ['2020-4',,,,2064.194737],
        ['2020-5',,,,2173.03666],
        ['2020-6',,,,2352.521733],
        ['2020-7',,,,2560.728157],
        ['2020-8',,,,2544.312545],
        
        
    ]
}