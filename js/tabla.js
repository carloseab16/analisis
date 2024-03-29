var dataSet1 = [  
    ["2017-01-01","","331","",""],
    ["2017-02-01","","425","",""],
    ["2017-03-01","","525","",""],
    ["2017-04-01","","410","",""],
    ["2017-05-01","","302","",""],
    ["2017-06-01","","298","",""],
    ["2017-07-01","","652","",""],
    ["2017-08-01","","715","",""],
    ["2017-09-01","","443","",""],
    ["2017-10-01","","279","",""],
    ["2017-11-01","","352","",""],
    ["2017-12-01","","489","",""],
    ["2018-01-01","","","596.918919",""],
    ["2018-02-01","15","","501.785642",""],
    ["2018-03-01","35","","424.740767",""],
    ["2018-04-01","40","","409.982095",""],
    ["2018-05-01","447","","524.735812",""],
    ["2018-06-01","649","","553.448445",""],
    ["2018-07-01","1008","","541.832853",""],
    ["2018-08-01","953","","466.257226",""],
    ["2018-09-01","595","","495.777374",""],
    ["2018-10-01","880","","524.816227",""],
    ["2018-11-01","802","","580.213318",""],
    ["2018-12-01","895","","541.615759",""],
    ["2019-01-01","925","","539.145384",""],
    ["2019-02-01","763","","",""],
    ["2019-03-01","1225","","",""],
    ["2019-04-01","1043","","",""],
    ["2019-05-01","942","","",""],
    ["2019-06-01","882","","",""],
    ["2019-07-01","1122","","",""],
    ["2019-08-01","","","","1359.791701"],
    ["2019-09-01","","","","1586.782803"],
    ["2019-10-01","","","","1770.865411"],
    ["2019-11-01","","","","2039.352294"],
    ["2019-12-01","","","","2004.601425"],
    ["2020-01-01","","","","1759.459201"],
    ["2020-02-01","","","","2013.407716"],
    ["2020-03-01","","","","2009.726396"],
    ["2020-04-01","","","","2064.194737"],
    ["2020-05-01","","","","2173.03666"],
    ["2020-06-01","","","","2352.521733"],
    ["2020-07-01","","","","2560.728157"],
    ["2020-08-01","","","","2544.312545"]    
    ];

$(document).ready(function() {
 
    $('#example').DataTable( {
        data: dataSet1,
        columns: [
            { title: "Fecha" },
            { title: "Nuevo Sistema" },
            { title: "Anterior Sistema" },
            { title: "Predicción del Anterior Sistema" },
            { title: "Predicción del Nuevo Sistema" }
        ]
    } );
} );
