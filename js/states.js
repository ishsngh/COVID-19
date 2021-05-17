$.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
    var arrValues1 = [
        ['Stats', 'Covid-19 states']
    ];
    var arrValues2 = [
        ['Stats', 'Covid-19 states']
    ];
    var arrValues3 = [
        ['Stats', 'Covid-19 states']
    ];
    var arrValues4 = [
        ['Stats', 'Covid-19 states']
    ];
    $.each(coviddata.statewise, function(key, value) {
        if (value.state != "Total") {
            arrValues1.push([value.state, parseInt(value.confirmed)]);
            arrValues2.push([value.state, parseInt(value.active)]);
            arrValues3.push([value.state, parseInt(value.recovered)]);
            arrValues4.push([value.state, parseInt(value.deaths)]);
        }
    });

    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(arrValues1)
        var data1 = google.visualization.arrayToDataTable(arrValues2)
        var data2 = google.visualization.arrayToDataTable(arrValues3)
        var data3 = google.visualization.arrayToDataTable(arrValues4)

        var width1 = parseInt($(window).width() * 0.9);
        if (width1 > 400) {
            width1 = 400
        }

        var options = {
            width: width1,
            titleTextStyle: {
                color: "#ffffff",
                font: 'archia',
                // fontSize: 20,
            },
            title: 'Total Cases Statewise',
            height: width1,
            pieHole: 0.5,
            legend: 'none',
            backgroundColor: {
                fill: 'transparent'
            },
            options: {
                theme: 'maximized'
            },
            chartArea: {
                left: 10,
                right: 10, // !!! works !!!
                bottom: 20, // !!! works !!!
                top: 20,
                width: "100%",
                height: "100%"
            },
            pieSliceTextStyle: {
                color: 'white',
            },
            legend: 'none',

            tooltip: {
                trigger: 'selection'
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById('covid'));
        google.visualization.events.addListener(chart, 'select', function() {
            var selection = chart.getSelection();
            $.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
                if (selection.length) {
                    var name = data.getValue(selection[0].row, 0);
                    var dats = '';
                    $.each(coviddata.statewise, function(key, value) {
                        if (value.state == name) {
                            dats += 'State: ' + name;
                            dats += '<br>Confirmed: ' + parseInt(value.confirmed);
                            dats += '<br>Active: ' + parseInt(value.active);
                            dats += '<br>Recovered: ' + parseInt(value.recovered);
                            dats += '<br>Deaths: ' + parseInt(value.deaths);
                        }
                    });
                    $("#covidcases").addClass('back');
                    $('#covidcases').empty().append(dats);
                }
            });
        });

        google.visualization.events.addListener(chart, 'onmouseover', function(entry) {
            $.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
                var name = data.getValue(entry.row, 0);
                var dats = '';
                $.each(coviddata.statewise, function(key, value) {
                    if (value.state == name) {
                        dats += 'State: ' + name;
                        dats += '<br>Confirmed: ' + parseInt(value.confirmed);
                        dats += '<br>Active: ' + parseInt(value.active);
                        dats += '<br>Recovered: ' + parseInt(value.recovered);
                        dats += '<br>Deaths: ' + parseInt(value.deaths);
                    }
                });
                $("#covidcases").addClass('back');
                $('#covidcases').empty().append(dats);
            });
        });
        chart.draw(data, options);

    }
});