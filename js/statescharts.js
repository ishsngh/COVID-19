function chartlinestate() {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data1) {
    var jsonArr = [];
	$.each(data1, function(x, y) {
	if (x == stateclass) {
	try {
	var active = parseInt(data1[x].total.confirmed - data1[x].total.recovered - data1[x].total.deceased);
	var recovered = data1[x].total.recovered;
	var deaths = data1[x].total.deceased;
        } catch(e) {
		  console.log("Cannot Load information of " + x)
		}
	}
    $.each(data1[x].districts, function(key, value) {
        if (x == stateclass) {
		try {
			jsonArr.push({
				name: key,
				y: parseInt(data1[x].districts[key].total.confirmed),
				confirmed: parseInt(data1[x].districts[key].total.confirmed),
				active: parseInt(data1[x].districts[key].total.confirmed - data1[x].districts[key].total.deceased - data1[x].districts[key].total.recovered),
				deaths: parseInt(data1[x].districts[key].total.deceased),
				recovered: parseInt(data1[x].districts[key].total.recovered),
			});
        } catch(e) {
		  console.log("Cannot Load information of " + key)
		}
		}
    });
	});

let chart = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covid',
		defaultSeriesType: 'pie',
		backgroundColor: 'transparent',
		height: width1,
		width: width1
	},
	
	title: {
    text: 'Cases by districts',
	fontWeight: 'bold'
	},
	
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false,
			// borderWidth: 0
        }
    },
	
	tooltip: {
        pointFormat: 'Percentage: <b>{point.percentage:.1f}%</b><br>{series.name}: <b>{point.confirmed}</b><br>Active: <b>{point.active}</b><br>Recovered: <b>{point.recovered}</b><br>Deaths: <b>{point.deaths}</b>'
    },

  series: [{
    type: 'pie',
	name: 'Confirmed',
    data: jsonArr,
  }]
  
});

let chart1 = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covid19',
		defaultSeriesType: 'pie',
		backgroundColor: 'transparent',
		height: width1,
		width: width1
	},
	
	title: {
    text: 'Total Cases',
	fontWeight: 'bold'
	},
	 plotOptions: {
      pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false,
        // borderWidth: 0
	 }
	 },
  series: [{
    type: 'pie',
	name: 'Cases',
    data: [{
        name: 'Active Cases',
        y: active,
		color: 'rgba(66,133,244,1)'
      }, {
        name: 'Recovered',
        y: recovered,
		color: 'rgba(219,68,55,1)'
      }, {
        name: 'Deaths',
        y: deaths,
		color: 'rgba(244,160,0,1)'
      }
    ]
  }]
  
});
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
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }
});
}

function chartlinedis(y,x) {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data1) {

let chart = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covid19',
		defaultSeriesType: 'pie',
		backgroundColor: 'transparent',
		height: width1,
		width: width1
	},
	
	title: {
    text: 'Total Cases',
	fontWeight: 'bold'
	},
	
	 plotOptions: {
      pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false,
        // borderWidth: 0
	 }
	 },
  series: [{
    type: 'pie',
	name: 'Cases',
    data: [{
        name: 'Active Cases',
        y: active,
		color: 'rgba(66,133,244,1)'
      }, {
        name: 'Recovered',
        y: recovered,
		color: 'rgba(219,68,55,1)'
      }, {
        name: 'Deaths',
        y: deaths,
		color: 'rgba(244,160,0,1)'
      }
    ]
  }]
  
});
});
}

function chartlinedis1(y,x) {
$.getJSON("https://api.covid19india.org/v4/min/data-all.min.json", function(data2) {
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
    $.each(data2, function(key, value) {
        if (key == month || take == 1) {
		take = 1;
		try {
		arrValues.push([key, parseInt(data2[key][x].districts[y].total.confirmed), parseInt(data2[key][x].districts[y].total.confirmed - data2[key][x].districts[y].total.recovered - data2[key][x].districts[y].total.deceased), parseInt(data2[key][x].districts[y].total.recovered), parseInt(data2[key][x].districts[y].total.deceased)]);
        } catch(e) {
		  console.log("Cannot Load information of " + key)
		}
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
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
    }
});
}

