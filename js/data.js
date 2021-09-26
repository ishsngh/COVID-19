function data() {
    $.getJSON("https://data.covid19india.org/v4/min/data.min.json", function(data) {
        var sign = "+";
        var tabledata = '<tr></tr>';
        $.each(data, function(x, y) {
			if (data[x].hasOwnProperty('delta')) {
				if (data[x].delta.deceased == undefined) {
					data[x].delta.deceased=0
				}
				if (data[x].delta.recovered == undefined) {
					data[x].delta.recovered=0
				}
				if (data[x].delta.confirmed == undefined) {
					data[x].delta.confirmed=0
				}
			} else {
				data[x].delta=0
				data[x].delta.deceased=0
				data[x].delta.recovered=0
				data[x].delta.confirmed=0	
			}
			if(x != "TT") {
			if ((data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased) < 0) {
				sign = "";
			} else {
				sign = '+';
			}
            if (data[x].total.confirmed > 0) {
                tabledata += '<tr>';
				tabledata += '<td class="tdgrey click" style="font-weight: 600;" id="' + x + '" onclick="getdata(this)">' + name(x) + '</td>';
				
				if (data[x].delta.confirmed > 0) {
					tabledata += '<td class="tdpur"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].delta.confirmed + '&nbsp;</div><div class="confirm">' + data[x].total.confirmed + '</td>';
				} else {
					tabledata += '<td class="tdpur"><div class="confirm">' + data[x].total.confirmed + '</td>';
				}
				if ((data[x].delta.confirmed - data[x].delta.deceased - data[x].delta.recovered) != 0) {
					tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">' + sign + (data[x].delta.confirmed - data[x].delta.deceased - data[x].delta.recovered) + '&nbsp;</div><div class="confirm">' + (data[x].total.confirmed - data[x].total.deceased - data[x].total.recovered) + '</td>';
				} else {
					tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">' + (data[x].total.confirmed - data[x].total.deceased - data[x].total.recovered) + '</td>';
				}
				if (data[x].delta.recovered > 0) {
					tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].delta.recovered + '&nbsp;</div><div class="confirm">' + data[x].total.recovered + '</td>';
				} else {
					tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">' + data[x].total.recovered + '</td>';
				}
				if (data[x].delta.deceased > 0) {
					tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].delta.deceased + '&nbsp;</div><div class="confirm">' + data[x].total.deceased + '</td>';
				} else {
					tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">' + data[x].total.deceased + '</td>';
				}
				tabledata += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;"><div class="confirm">' + data[x].total.tested + '</td>';
				tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div class="confirm">'+(data[x].total.vaccinated1+data[x].total.vaccinated2)+'</td>';
				tabledata += '</tr>';
            }
			}
        });
        $('#table').append(tabledata);
        sorttable(1);
        var tabledata = '';
		tabledata += '<tr>';
		tabledata += '<td class="tdgrey" style="font-weight: 600;">Total</td>';
		tabledata += '<td class="tdpur">' + data['TT'].total.confirmed + '</td>';
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;">' + (data['TT'].total.confirmed - data['TT'].total.deceased - data['TT'].total.recovered) + '</td>';
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;">' + data['TT'].total.recovered + '</td>';
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;">' + data['TT'].total.deceased + '</td>';
		tabledata += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;"><div class="confirm">' + data['TT'].total.tested + '</td>';
		tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div class="confirm">'+(data['TT'].total.vaccinated1+data['TT'].total.vaccinated2)+'</td>';
		tabledata += '</tr>';
        $('#foot').append(tabledata);
        //var timedata = '';
        // $.each(data.statewise, function(key, value) {
            // if (value.state == "Total") {
                // timedata += 'Last updated: ' + value.lastupdatedtime;
            // }
        // });
        //$('#covid3').append(timedata);
        var sign = "+";
        var totaltest = 0;
        var updata = '';
		if ((data['TT'].delta.confirmed - data['TT'].delta.deceased - data['TT'].delta.recovered) < 0) {
			sign = "";
		} else {
			sign = '+';
		}
		updata += '<div class="info" id="test">';
		updata += '<div style="font-size:28px; font-weight:bold;">INDIA</div>';
		updata += '<div class="cases2"><b>Confirmed<br><div style="font-size:13px;">[+' + parseInt(data['TT'].delta.confirmed).toLocaleString('en-IN') + ']</div>' + parseInt(data['TT'].total.confirmed).toLocaleString('en-IN') + '</b><br></div>';
		updata += '<div class="cases3"><b>Active Cases<br><div style="font-size:13px;">[' + sign + parseInt(data['TT'].delta.confirmed - data['TT'].delta.deceased - data['TT'].delta.recovered).toLocaleString('en-IN') + ']</div>' + parseInt((data['TT'].total.confirmed - data['TT'].total.deceased - data['TT'].total.recovered)).toLocaleString('en-IN') + '</b><br></div>';
		updata += '<div class="cases4"><b>Total Deaths<br><div style="font-size:13px;">[+' + parseInt(data['TT'].delta.deceased).toLocaleString('en-IN') + ']</div>' + parseInt(data['TT'].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
		updata += '<div class="cases5"><b>Recoveries<br><div style="font-size:13px;">[+' + parseInt(data['TT'].delta.recovered).toLocaleString('en-IN') + ']</div>' + parseInt(data['TT'].total.recovered).toLocaleString('en-IN') + '</b><br></div>';

        updata += '<div class="cases6"><b>Total tests<br><div style="font-size:13px;">[--]</div>' + parseInt(data['TT'].total.tested).toLocaleString('en-IN') + '</b><br></div>';
        updata += '<div class="cases7"><b>Vaccination<br><div style="font-size:13px;">[--]</div>' + parseInt(data['TT'].total.vaccinated1+data['TT'].total.vaccinated2).toLocaleString('en-IN') + '</b><br></div>';
        updata += '</div></div>';
        $('#covid4').append(updata);
        var updata = '';
		updata += 'Coronavirus Update (Live): ' + data['TT'].total.confirmed + ' Cases and ' + data['TT'].total.deceased + ' Deaths from COVID-19 Virus Pandemic in India';
        $('#title').empty().append(updata);
        // var world = '';
        // $.each(data.statewise, function(key, value) {
            // if (value.active == 0) {
                // world += '<div class="cases1" style="display:block;">' + value.state + '</b></div>';
            // }
        // });
        // $('#free').append(world);
    });

    $.getJSON("https://corona.lmao.ninja/v2/all", function(data) {
        var world = '';
        $.each(data, function(key, value) {
            if (key == "cases") {
                world += '<div class="cases1">Confirmed<br><div id="worldc" style="font-size:13px;"></div>' + value.toLocaleString('en-IN') + '<br></div>';
            }
            if (key == "active") {
                world += '<div class="cases1">Active Cases<br><div style="font-size:13px;">[--]</div>' + value.toLocaleString('en-IN') + '<br></div>';
            }
            if (key == "recovered") {
                world += '<div class="cases1">Recoveries<br><div style="font-size:13px;">[--]</div>' + value.toLocaleString('en-IN') + '<br></div>';
            }
            if (key == "deaths") {
                world += '<div class="cases1">Total Deaths<br><div id="worldd" style="font-size:13px;"></div>' + value.toLocaleString('en-IN') + '<br></div>';
            }
        });
        $('#world').append(world);
        var world = '';
        $.each(data, function(key, value) {
            if (key == "todayCases") {
                world += '[+' + value + ']';
            }
        });
        $('#worldc').append(world);
        var world = '';
        $.each(data, function(key, value) {
            if (key == "todayDeaths") {
                world += '[+' + value + ']';
            }
        });
        $('#worldd').append(world);
        var world = '';
        $.each(data, function(key, value) {
            if (key == "tests") {
                world += '<div class="cases1">Total Tests<br><div style="font-size:13px;">(Worldometers)</div>' + value.toLocaleString('en-IN') + '<br></div>';
            }
            if (key == "testsPerOneMillion") {
                world += '<div class="cases1">Tests /1M<br><div style="font-size:13px;">(Million)</div>' + value.toLocaleString('en-IN') + '<br></div>';
            }
        });
        $('#tests').append(world);
    });
    var tabletitle = ''
    tabletitle += '<th class="tdgrey2 sticky" onclick="sortTable(0,\'#sort\')">';
    tabletitle += '<div id="sort" class="sticky heading-content">State/UT&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th class="tdpur2 sticky" onclick="sorttable(1,\'#sort1\')">';
    tabletitle += '<div id="sort1" class="sticky heading-content headerSortDown">Confirmed&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th class="tdbl2 sticky" onclick="sorttable(2,\'#sort2\')">';
    tabletitle += '<div id="sort2" class="sticky heading-content">Active&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th class="tdgr2 sticky" onclick="sorttable(3,\'#sort3\')">';
    tabletitle += '<div id="sort3" class="sticky heading-content">Recovered&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th class="tdred2 sticky" onclick="sorttable(4,\'#sort4\')">';
    tabletitle += '<div id="sort4" class="sticky heading-content">Deaths&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th class="tdpk2" onclick="sorttable(5,\'#sort5\')">';
    tabletitle += '<div id="sort5" class="sticky heading-content">Total Tests&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th class="tdyl2" onclick="sorttable(6,\'#sort6\')">';
    tabletitle += '<div id="sort6" class="sticky heading-content">Vaccination&nbsp;&nbsp;</div>';
    tabletitle += '</th>';

    $('#tabletitle').append(tabletitle);
}

data();