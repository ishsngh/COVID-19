function chartlinestate() {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data1) {
    var arrValues1 = [
        ['Stats', 'Covid-19 states']
    ];
    var arrValues2 = [
        ['Stats', 'Covid-19 states']
    ];
	$.each(data1, function(x, y) {
	if (x == stateclass) {
	try {
	arrValues2.push(['Active Cases', parseInt(data1[x].total.confirmed - data1[x].total.recovered - data1[x].total.deceased)]);
	arrValues2.push(['Recovered', data1[x].total.recovered]);
	arrValues2.push(['Deaths', data1[x].total.deceased]);
        } catch(e) {
		  console.log("Cannot Load information of " + x)
		}
	}
    $.each(data1[x].districts, function(key, value) {
        if (x == stateclass) {
		try {
            arrValues1.push([key, parseInt(data1[x].districts[key].total.confirmed)]);
        } catch(e) {
		  console.log("Cannot Load information of " + key)
		}
		}
    });
	});

    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(arrValues1);

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
            title: 'Total Cases District wise',
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
                trigger: 'none'
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById('covid'));
        google.visualization.events.addListener(chart, 'select', function() {
            var selection = chart.getSelection();
            $.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
                if (selection.length) {
                    var name = data.getValue(selection[0].row, 0);
                 var dats = '';
				$.each(data1, function(x, y) {
				$.each(data1[x].districts, function(key, value) {
                    if (key == name) {
                        dats += 'District: ' + name;
                        dats += '<br>Confirmed: ' + parseInt(data1[x].districts[key].total.confirmed);
						dats += '<br>Recovered: ' + parseInt(data1[x].districts[key].total.recovered);
						dats += '<br>Deaths: ' + parseInt(data1[x].districts[key].total.deceased);
                    }
                });
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
				$.each(data1, function(x, y) {
				$.each(data1[x].districts, function(key, value) {
                    if (key == name) {
                        dats += 'District: ' + name;
                        dats += '<br>Confirmed: ' + parseInt(data1[x].districts[key].total.confirmed);
						dats += '<br>Recovered: ' + parseInt(data1[x].districts[key].total.recovered);
						dats += '<br>Deaths: ' + parseInt(data1[x].districts[key].total.deceased);
                    }
                });
				});
                $("#covidcases").addClass('back');
                $('#covidcases').empty().append(dats);
            });
        });
        chart.draw(data, options);

    }
    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart1);

    function drawChart1() {
        var data = google.visualization.arrayToDataTable(arrValues2);

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

function chartlinestate1() {
$.getJSON("https://api.covid19india.org/v4/min/timeseries.min.json", function(data2) {
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
    $.each(data2, function(x, y) {
		$.each(data2[x].dates, function(key, value) {
		if (x == stateclass) {
        if (key == month || take == 1) {
		take = 1;
		try {
		arrValues.push([key, parseInt(data2[x].dates[key].delta.confirmed), parseInt(data2[x].dates[key].delta.confirmed - data2[x].dates[key].delta.recovered - data2[x].dates[key].delta.deceased), parseInt(data2[x].dates[key].delta.recovered), parseInt(data2[x].dates[key].delta.deceased)]);
        } catch(e) {
		  console.log("Cannot Load information of " + key)
		}
        }
		}
    });
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
        })

        chart.draw(data, options);
    }
});
}