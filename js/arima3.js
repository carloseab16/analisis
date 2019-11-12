anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set(getData3());

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});

    // map data for the third series, take x from the zero column and value from the third column of data set
    var seriesData_3 = dataSet.mapAs({'x': 0, 'value': 3});

    // create line chart3
    var chart3 = anychart.line();

    // turn on chart3 animation
    chart3.animation(true);

    // set chart3 padding
    chart3.padding([10, 20, 5, 20]);

    // turn on the crosshair
    chart3.crosshair()
            .enabled(true)
            .yLabel(false)
            .yStroke(null);

    // set tooltip mode to point
    chart3.tooltip().positionMode('point');

    // set chart3 title text settings
    chart3.title('Entrenamiento');

    // set yAxis title
    chart3.yAxis().title('Cantidad de ventas');
    chart3.xAxis().labels().padding(5);

    // create first series with mapped data
    var series_1 = chart3.line(seriesData_1);
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
    var series_2 = chart3.line(seriesData_2);
    series_2.name('Anterior Sistema');
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
    var series_3 = chart3.line(seriesData_3);
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
    chart3.legend()
            .enabled(true)
            .fontSize(13)
            .padding([0, 0, 10, 0]);

    // set container id for the chart3
    chart3.container('arima3');
    // initiate chart3 drawing
    chart3.draw();
});

function getData3() {
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
        ['2018-2',,,501.785642,],	
        ['2018-3',,,424.740767,],	
        ['2018-4',,,409.982095,],	
        ['2018-5',,,524.735812,],	
        ['2018-6',,,553.448445,],	
        ['2018-7',,,541.832853,],	
        ['2018-8',,,466.257226,],	
        ['2018-9',,,495.777374,],	
        ['2018-10',,,524.816227,],	
        ['2018-11',,,580.213318,],	
        ['2018-12',,,541.615759,],	
        ['2019-1',,,539.145384,]
    ]
}
