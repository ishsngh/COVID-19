var width1 = parseInt($(window).width() * 0.9);
if (width1 > 400) {
	width1 = 400
}

var width2 = parseInt($(window).width() * 0.9);
if (width2 > 450) {
	width2 = 450
}

function covidpie() {
$.getJSON("https://data.covid19india.org/data.json", function(coviddata) {
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
$.getJSON("https://data.covid19india.org/data.json", function(coviddata) {
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

function chartstates5(){ 
$.getJSON("https://data.covid19india.org/data.json", function(coviddata) {
	var name = [];
	var confirmed = [];
	var recovered = [];
	var active = [];
	var deaths = [];
    $.each(coviddata.statewise, function(key, value) {
        if (value.state != "Total") {
			name.push(value.state);
			confirmed.push(parseInt(value.confirmed));
			active.push(parseInt(value.active));
			recovered.push(parseInt(value.recovered));
			deaths.push(parseInt(value.deaths));
        }
    });

let chart1 = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covidcol1',
		type: 'column',
		backgroundColor: 'transparent',
		height: width2,
		width: width2,
	},
	
	title: {
    text: 'Confirmed',
	fontWeight: 'bold'
	},
	
	xAxis: {
        categories: name
    },
	
    yAxis: {
        min: 0,
        title: {
            text: '',
        },
	},
	
      legend: {
        enabled:false
      },

    series: [{
        name: 'Confirmed',
        data: confirmed
    }]
});

let chart2 = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covidcol2',
		type: 'column',
		backgroundColor: 'transparent',
		height: width2,
		width: width2,
	},
	
	title: {
    text: 'Deaths',
	fontWeight: 'bold'
	},
	
	xAxis: {
        categories: name
    },
	
    yAxis: {
        min: 0,
        title: {
            text: ' '
        },
	},

      legend: {
        enabled:false
      },

    series: [{
        name: 'Deaths',
        data: deaths
    }]
});
let chart3 = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covidcol3',
		type: 'column',
		backgroundColor: 'transparent',
		height: width2,
		width: width2,
	},
	
      legend: {
        enabled:false
      },
	title: {
    text: 'Recovered',
	fontWeight: 'bold'
	},
	
	xAxis: {
        categories: name
    },
	
    yAxis: {
        min: 0,
        title: {
            text: ' '
        },
	},

    series: [{
        name: 'Recovered',
        data: recovered
    }]
});
let chart4 = new Highcharts.Chart({
	
	chart: {
		renderTo: 'covidcol4',
		type: 'column',
		backgroundColor: 'transparent',
		height: width2,
		width: width2,
	},
	
      legend: {
        enabled:false
      },
	title: {
    text: 'Active',
	fontWeight: 'bold'
	},
	
	xAxis: {
        categories: name
    },
	
    yAxis: {
        min: 0,
        title: {
            text: ' '
        },
		},

    series: [{
        name: 'Active',
        data: active
    }]
});
});
}

function chartline2() {
$.getJSON("https://data.covid19india.org/data.json", function(coviddata) {
var width2 = parseInt($(window).width() * 0.9);
if (width2 > 450) {
	width2 = 450
}
    var arrValues = [];
    var arrValues1 = [];
    var arrValues2 = [];
    var arrValues3 = [];
    $.each(coviddata.cases_time_series, function(key, value) {
		arrValues.push([Date.parse(value.dateymd), parseInt(value.dailyconfirmed)]);
		arrValues2.push([Date.parse(value.dateymd), parseInt(value.dailyconfirmed - value.dailyrecovered - value.dailydeceased)]);
		arrValues3.push([Date.parse(value.dateymd), parseInt(value.dailyrecovered)]);
		arrValues1.push([Date.parse(value.dateymd), parseInt(value.dailydeceased)]);
    });
	
    Highcharts.stockChart({

		chart: {
			renderTo: 'curve_chart',
			backgroundColor: 'transparent',
			height: width2,
			width: width2,
		},

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Confirmed'
        },
		
		xAxis: {
		  type: 'datetime',
		},

        series: [{
            name: 'Confirmed',
            data: arrValues,
        }]
    });

    Highcharts.stockChart({

		chart: {
			renderTo: 'curve_chart1',
			backgroundColor: 'transparent',
			height: width2,
			width: width2,
		},

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Active'
        },
		
		xAxis: {
		  type: 'datetime',
		},

        series: [{
            name: 'Active',
            data: arrValues2,
        }]
    });

    Highcharts.stockChart({

		chart: {
			renderTo: 'curve_chart2',
			backgroundColor: 'transparent',
			height: width2,
			width: width2,
		},

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Recovered'
        },
		
		xAxis: {
		  type: 'datetime',
		},

        series: [{
            name: 'Recovered',
            data: arrValues3,
        }]
    });

    Highcharts.stockChart({

		chart: {
			renderTo: 'curve_chart3',
			backgroundColor: 'transparent',
			height: width2,
			width: width2,
		},

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'Deaths'
        },
		
		xAxis: {
		  type: 'datetime',
		},

        series: [{
            name: 'Deaths',
            data: arrValues1,
        }]
    });
});
}

chartline2();
covidpie();
chartstates();
chartstates5();