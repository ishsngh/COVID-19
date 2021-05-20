var width1 = parseInt($(window).width() * 0.9);
if (width1 > 400) {
	width1 = 400
}

function covidpie() {
$.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
    $.each(coviddata.statewise, function(key, value) {
        if (value.state == "Total") {
            active = parseInt(value.active);
            recovered = parseInt(value.recovered);
            deaths = parseInt(value.deaths);
        }
    });

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
        color: 'rgba(66,133,244,1)' //opacity 0.3
      }, {
        name: 'Recovered',
        y: recovered,
        color: 'rgba(219,68,55,1)' //opacity 0.2
      }, {
        name: 'Deaths',
        y: deaths,
        color: 'rgba(244,160,0,1)' //opacity 0.3
      }
    ]
  }]
  
});
});
}

function chartstates(){ 
$.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
	var jsonArr = [];
    $.each(coviddata.statewise, function(key, value) {
        if (value.state != "Total") {
			jsonArr.push({
				name: value.state,
				y: parseInt(value.confirmed),
				confirmed: parseInt(value.confirmed),
				active: parseInt(value.active),
				deaths: parseInt(value.deaths),
				recovered: parseInt(value.recovered),
			});
        }
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
    text: 'Cases by states',
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
			//borderWidth: 0
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
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, options);
		
    }
});
}

chartline2();
covidpie();
chartstates();

