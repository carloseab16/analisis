anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set(getData());

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});

    // map data for the third series, take x from the zero column and value from the third column of data set
    var seriesData_3 = dataSet.mapAs({'x': 0, 'value': 3});

    // create line chart
    var chart = anychart.line();

    // turn on chart animation
    chart.animation(true);

    // set chart padding
    chart.padding([10, 20, 5, 20]);

    // turn on the crosshair
    chart.crosshair()
            .enabled(true)
            .yLabel(false)
            .yStroke(null);

    // set tooltip mode to point
    chart.tooltip().positionMode('point');

    // set chart title text settings
    chart.title('Entrenamiento');

    // set yAxis title
    chart.yAxis().title('Cantidad de ventas');
    chart.xAxis().labels().padding(5);

    // create first series with mapped data
    var series_1 = chart.line(seriesData_1);
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
    var series_2 = chart.line(seriesData_2);
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
    var series_3 = chart.line(seriesData_3);
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
    chart.legend()
            .enabled(true)
            .fontSize(13)
            .padding([0, 0, 10, 0]);

    // set container id for the chart
    chart.container('arima1');
    // initiate chart drawing
    chart.draw();
});

function getData() {
    return [
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
        ['2019-3',,1225,732.779821,],
        ['2019-4',,1043,725.563247,],
        ['2019-5',,942,784.552282,],
        ['2019-6',,882,895.181995,],
        ['2019-7',,1122,997.829561,]     
    ]
}