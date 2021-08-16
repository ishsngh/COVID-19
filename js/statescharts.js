function chartlinestate() {
$.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(data1) {
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
$.getJSON("https://data.covid19india.org/v4/min/timeseries.min.json", function(data2) {
    var arrValues = [];
    var arrValues1 = [];
    var arrValues2 = [];
    var arrValues3 = [];
    $.each(data2, function(x, y) {
		$.each(data2[x].dates, function(key, value) {
		if (x == stateclass) {
		try {
		arrValues.push([Date.parse(key), parseInt(data2[x].dates[key].delta.confirmed)]);
		arrValues1.push([Date.parse(key), parseInt(data2[x].dates[key].delta.confirmed - data2[x].dates[key].delta.recovered - data2[x].dates[key].delta.deceased)]);
		arrValues2.push([Date.parse(key), parseInt(data2[x].dates[key].delta.recovered)]);
		arrValues3.push([Date.parse(key), parseInt(data2[x].dates[key].delta.deceased)]);
        } catch(e) {
		  console.log("Cannot Load information of " + key)
		}
        }
    });
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
            data: arrValues1,
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
            data: arrValues2,
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
            data: arrValues3,
        }]
    });
	

});
}

function chartlinedis(y,x) {
$.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(data1) {

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
$.getJSON("https://data.covid19india.org/v4/min/data-all.min.json", function(data2) {
    var arrValues = [];
    var arrValues1 = [];
    var arrValues2 = [];
    var arrValues3 = [];
    $.each(data2, function(key, value) {
		try {
		arrValues.push([Date.parse(key), parseInt(data2[key][x].districts[y].total.confirmed)]);
		arrValues1.push([Date.parse(key), parseInt(data2[key][x].districts[y].total.confirmed - data2[key][x].districts[y].total.recovered - data2[key][x].districts[y].total.deceased)]);
		arrValues2.push([Date.parse(key), parseInt(data2[key][x].districts[y].total.recovered)]);
		arrValues3.push([Date.parse(key), parseInt(data2[key][x].districts[y].total.deceased)]);
        } catch(e) {
		  console.log("Cannot Load information of " + key)
		}
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
            data: arrValues1,
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
            data: arrValues2,
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
            data: arrValues3,
        }]
    });
});
}

