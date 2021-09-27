var width1 = parseInt($(window).width() * 0.9);
if (width1 > 400) {
	width1 = 400
}

var width2 = parseInt($(window).width() * 0.9);
if (width2 > 450) {
	width2 = 450
}

function name_state(x) {
if (x == "AN") {
	return "Andaman and Nicobar Islands";
} else if (x == "AP") {
	return "Andhra Pradesh";
} else if (x == "AR") {
	return "Arunachal Pradesh";
} else if (x == "AS") {
	return "Assam";
} else if (x == "BR") {
	return "Bihar";
} else if (x == "CH") {
	return "Chandigarh";
} else if (x == "CT") {
	return "Chhattisgarh";
} else if (x == "DN") {
	return "Dadra and Nagar Haveli and Daman and Diu";
} else if (x == "DL") {
	return "Delhi";
} else if (x == "GA") {
	return "Goa";
} else if (x == "GJ") {
	return "Gujarat";
} else if (x == "HR") {
	return "Haryana";
} else if (x == "HP") {
	return "Himachal Pradesh";
} else if (x == "JK") {
	return "Jammu and Kashmir";
} else if (x == "JH") {
	return "Jharkhand";
} else if (x == "KA") {
	return "Karnataka";
} else if (x == "KL") {
	return "Kerala";
} else if (x == "LA") {
	return "Ladakh";
} else if (x == "LD") {
	return "Lakshadweep";
} else if (x == "MP") {
	return "Madhya Pradesh";
} else if (x == "MH") {
	return "Maharashtra";
} else if (x == "MN") {
	return "Manipur";
} else if (x == "ML") {
	return "Meghalaya";
} else if (x == "MZ") {
	return "Mizoram";
} else if (x == "NL") {
	return "Nagaland";
} else if (x == "OR") {
	return "Odisha";
} else if (x == "PY") {
	return "Puducherry";
} else if (x == "PB") {
	return "Punjab";
} else if (x == "RJ") {
	return "Rajasthan";
} else if (x == "SK") {
	return "Sikkim";
} else if (x == "UN") {
	return "State Unassigned";
} else if (x == "TN") {
	return "Tamil Nadu";
} else if (x == "TG") {
	return "Telangana";
} else if (x == "TR") {
	return "Tripura";
} else if (x == "UP") {
	return "Uttar Pradesh";
} else if (x == "UT") {
	return "Uttarakhand";
} else if (x == "WB") {
	return "West Bengal";
}
}

function covidpie() {
$.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(coviddata) {
    $.each(coviddata, function(x, y) {
		active = parseInt(coviddata['TT'].total.confirmed - coviddata['TT'].total.deceased - coviddata['TT'].total.recovered);
		recovered = parseInt(coviddata['TT'].total.recovered);
		deaths = parseInt(coviddata['TT'].total.deceased);
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
$.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(coviddata) {
	var jsonArr = [];
    $.each(coviddata, function(x, y) {
        if (x != "TT") {
			jsonArr.push({
				name: name_state(x),
				y: parseInt(coviddata[x].total.confirmed),
				confirmed: parseInt(coviddata[x].total.confirmed),
				active: parseInt((coviddata[x].total.confirmed - coviddata[x].total.deceased - coviddata[x].total.recovered)),
				deaths: parseInt(coviddata[x].total.deceased),
				recovered: parseInt(coviddata[x].total.recovered),
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
$.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(coviddata) {
	var name = [];
	var confirmed = [];
	var recovered = [];
	var active = [];
	var deaths = [];
    $.each(coviddata, function(x, y) {
        if (x != "TT") {
			name.push(name_state(x));
			confirmed.push(parseInt(coviddata[x].total.confirmed));
			active.push(parseInt(coviddata[x].total.confirmed - coviddata[x].total.deceased - coviddata[x].total.recovered));
			recovered.push(parseInt(coviddata[x].total.recovered));
			deaths.push(parseInt(coviddata[x].total.deceased));
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
$.getJSON("https://data.covid19india.org/v4/min/timeseries.min.json", function(coviddata) {
var width2 = parseInt($(window).width() * 0.9);
if (width2 > 450) {
	width2 = 450
}
    var arrValues = [];
    var arrValues1 = [];
    var arrValues2 = [];
    var arrValues3 = [];
    $.each(coviddata['TT'].dates, function(key, value) {
		try {
		arrValues.push([Date.parse(key), parseInt(coviddata['TT'].dates[key].delta.confirmed)]);
		arrValues2.push([Date.parse(key), parseInt(coviddata['TT'].dates[key].delta.confirmed - coviddata['TT'].dates[key].delta.recovered - coviddata['TT'].dates[key].delta.deceased)]);
		arrValues3.push([Date.parse(key), parseInt(coviddata['TT'].dates[key].delta.recovered)]);
		arrValues1.push([Date.parse(key), parseInt(coviddata['TT'].dates[key].delta.deceased)]);
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