function covidpie() {
$.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
    $.each(coviddata.statewise, function(key, value) {
        if (value.state == "Total") {
            active = parseInt(value.active);
            recovered = parseInt(value.recovered);
            deaths = parseInt(value.deaths);
        }
    });

    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Stats', 'Covid-19', {
                role: 'style'
            }],
            ["Active cases", active, "opacity: 0.5"],
            ['Recovered', recovered, 'opacity: 0.5'],
            ['Deaths', deaths, 'opacity: 0.5']
        ]);

        var width1 = parseInt($(window).width() * 0.9);
        if (width1 > 400) {
            width1 = 400
        }
        var options = {
            width: width1,
            height: width1,
            title: 'Total Cases',
            titleTextStyle: {
                color: "#ffffff",
                font: 'archia',
                // fontSize: 20,
            },
            pieHole: 0.5,
            backgroundColor: {
                fill: 'transparent'
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
            legend: {
                position: 'bottom',
                textStyle: {
                    color: 'gray'
                }
            },

            pieSliceText: 'label',
        };

        var chart = new google.visualization.PieChart(document.getElementById('covid19'));
        chart.draw(data, options);
    }
});
}

function chartstates(){ 
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
}

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
                if (selection.length) {
                    var name = data.getValue(selection[0].row, 0);
                    var value1 = data.getValue(selection[0].row, 1);
					var value2 = data.getValue(selection[0].row, 2);
					var value3 = data.getValue(selection[0].row, 3);
					var value4 = data.getValue(selection[0].row, 4);
                    var dats = '';
                dats += 'Date: ' + name;
                dats += '<br>Confirmed: ' + value1;
                dats += '<br>Active: ' + value2;
                dats += '<br>Recovered: ' + value3;
                dats += '<br>Deaths: ' + value4;
                    $("#curvetext").addClass('curve');
                    $('#curvetext').empty().append(dats);
                }
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
covidpie();
chartstates();

