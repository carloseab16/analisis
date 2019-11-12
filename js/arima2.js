anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set(getData2());

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});

    // map data for the third series, take x from the zero column and value from the third column of data set
    var seriesData_3 = dataSet.mapAs({'x': 0, 'value': 3});

    // create line chart2
    var chart2 = anychart.line();

    // turn on chart2 animation
    chart2.animation(true);

    // set chart2 padding
    chart2.padding([10, 20, 5, 20]);

    // turn on the crosshair
    chart2.crosshair()
            .enabled(true)
            .yLabel(false)
            .yStroke(null);

    // set tooltip mode to point
    chart2.tooltip().positionMode('point');

    // set chart2 title text settings
    chart2.title('Predicción Mensual');

    // set yAxis title
    chart2.yAxis().title('Cantidad de ventas');
    chart2.xAxis().labels().padding(5);

    // create first series with mapped data
    var series_1 = chart2.line(seriesData_1);
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
    var series_2 = chart2.line(seriesData_2);
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
    var series_3 = chart2.line(seriesData_3);
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

    // turn the legend on
    chart2.legend()
            .enabled(true)
            .fontSize(13)
            .padding([0, 0, 10, 0]);

    // set container id for the chart2
    chart2.container('arima2');
    // initiate chart2 drawing
    chart2.draw();
});

function getData2() {
    return [
     ['2018-1',,,,],
['2018-2',15,,,],
['2018-3',35,,,],
['2018-4',40,,,],
['2018-5',447,,,],
['2018-6',649,,,],
['2018-7',1008,,,],
['2018-8',953,,,],
['2018-9',595,,,],
['2018-10',880,,,],
['2018-11',802,,,],
['2018-12',895,,,],
['2019-1',925,,,],
['2019-2',763,,,],
['2019-3',1225,,,],
['2019-4',1043,,,],
['2019-5',942,,,],
['2019-6',882,,,],
['2019-7',1122,,,],
['2019-8',,,1359.791701,],
['2019-9',,,1586.782803,],
['2019-10',,,1770.865411,],
['2019-11',,,2039.352294,],
['2019-12',,,2004.601425,],
['2020-1',,,1759.459201,],
['2020-2',,,2013.407716,],
['2020-3',,,2009.726396,],
['2020-4',,,2064.194737,],
['2020-5',,,2173.03666,],
['2020-6',,,2352.521733,],
['2020-7',,,2560.728157,],
['2020-8',,,2544.312545,],
 
    ]
}