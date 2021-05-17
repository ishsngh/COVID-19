function chartline2() {
$.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
    var arrValues = [
        ['Date', 'Confirmed', 'active', 'recovered', 'deaths']
    ];
    var take = 0;
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    month = yyyy + '-' + mm + '-' + dd;
    $.each(coviddata.cases_time_series, function(key, value) {
        if (value.dateymd == month || take == 1) {
            arrValues.push([value.date, parseInt(value.dailyconfirmed), parseInt(value.dailyconfirmed - value.dailyrecovered - value.dailydeceased), parseInt(value.dailyrecovered), parseInt(value.dailydeceased)]);
            take = 1
        }
    });
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(arrValues);

        var width1 = parseInt($(window).width() * 0.9);
        if (width1 > 400 * 16 / 9) {
            width1 = 400 * 16 / 9;
        }

        var h1 = parseInt($(window).height() * 0.9);
        if (h1 > 400) {
            h1 = 400;
        }

        var options = {
            backgroundColor: {
                fill: 'transparent'
            },
            curveType: 'function',
            width: width1,
            height: h1,
            hAxis: {
                textPosition: 'none',
                baseline: 1,
                gridlines: {
                    count: 1
                },
                textStyle: {
                    color: 'gray'
                }
            },
            gridlines: {
                color: 'none'
            },
            vAxis: {
                textStyle: {
                    color: 'gray'
                },
                baseline: 0,
                gridlines: {
                    count: 1
                }
            },
            legend: {
                position: 'bottom',
                textStyle: {
                    color: 'gray'
                }
            },
            tooltip: {
                trigger: 'none'
            },
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        google.visualization.events.addListener(chart, 'select', function() {
            var selection = chart.getSelection();
            $.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
                if (selection.length) {
                    var name = data.getValue(selection[0].row, 0);
                    var value1 = data.getValue(selection[0].row, 1);
                    var dats = '';
                    dats += 'Date: ' + name;
                    dats += '<br>Confirmed: ' + value1;
                    $("#curvetext").addClass('curve');
                    $('#curvetext').empty().append(dats);
                }
            });
        });

        google.visualization.events.addListener(chart, 'onmouseover', function(entry) {
            $.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
                var name = data.getValue(entry.row, 0);
                var value1 = data.getValue(entry.row, 1);
                var value2 = data.getValue(entry.row, 2);
                var value3 = data.getValue(entry.row, 3);
                var value4 = data.getValue(entry.row, 4);
                var dats = '';
                dats += 'Date: ' + name;
                dats += '<br>Confirmed: ' + value1;
                dats += '<br>Active: ' + value2;
                dats += '<br>Recovered: ' + value3;
                dats += '<br>Deaths: ' + value4;
                $("#curvetext").addClass('curve');
                $('#curvetext').empty().append(dats);
            });
        })

        chart.draw(data, options);
    }
});
}

chartline2();