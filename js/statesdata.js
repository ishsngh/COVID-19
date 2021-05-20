function states() {
    $.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data) {
		$.each(data, function(x, y) {
            var tabledata = '';
            tabledata += '<tr>';
            tabledata += '</tr>';
            var tabledata1 = '';
            tabledata1 += '<tr>';			
            tabledata1 += '<td class="tdgrey" style="font-weight: 600;">' + name(x) + '</td>';
            tabledata1 += '<td class="tdpur">' + data[x].total.confirmed + '</td>';
            tabledata1 += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;">' + (data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased) + '</td>';
            tabledata1 += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;">' + data[x].total.recovered + '</td>';
            tabledata1 += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;">' + data[x].total.deceased + '</td>';
            tabledata1 += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;">' + data[x].total.tested + '</td>';
            tabledata1 += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;">' + data[x].total.vaccinated + '</td>';
            tabledata1 += '</tr>';
            var updata = '';
            updata += '<div class="info" id="test">';
            updata += '<div style="font-size:28px; font-weight:bold;">' + name(x) + '</div>';
            if (data[x].hasOwnProperty('delta')) {
                if ((data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased) < 0) {
                    sign = "";
                } else {
                    sign = '+';
                }
                if (data[x].delta.confirmed != undefined) {
                    updata += '<div class="cases2"><b>Confirmed<br><div style="font-size:13px;">[+' + parseInt(data[x].delta.confirmed).toLocaleString('en-IN') + ']</div>' + parseInt(data[x].total.confirmed).toLocaleString('en-IN') + '</b><br></div>';
                } else {
                    updata += '<div class="cases2"><b>Confirmed<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].total.confirmed).toLocaleString('en-IN') + '</b><br></div>';
                }
                if (isNaN(data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased) != true) {
                    updata += '<div class="cases3"><b>Active Cases<br><div style="font-size:13px;">[' + sign + parseInt(data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased).toLocaleString('en-IN') + ']</div>' + parseInt(data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
                } else {
                    updata += '<div class="cases3"><b>Active Cases<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
                }
                if (data[x].delta.deceased != undefined) {
                    updata += '<div class="cases4"><b>Total Deaths<br><div style="font-size:13px;">[+' + parseInt(data[x].delta.deceased).toLocaleString('en-IN') + ']</div>' + parseInt(data[x].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
                } else {
                    updata += '<div class="cases4"><b>Total Deaths<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
                }
                if (data[x].delta.recovered != undefined) {
                    updata += '<div class="cases5"><b>Recoveries<br><div style="font-size:13px;">[+' + parseInt(data[x].delta.recovered).toLocaleString('en-IN') + ']</div>' + parseInt(data[x].total.recovered).toLocaleString('en-IN') + '</b><br></div>';
                } else {
                    updata += '<div class="cases5"><b>Recoveries<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].total.recovered).toLocaleString('en-IN') + '</b><br></div>';
                }
                if (data[x].delta.tested != undefined) {
                    updata += '<div class="cases6"><b>Total Tests<br><div style="font-size:13px;">[+' + parseInt(data[x].delta.tested).toLocaleString('en-IN') + ']</div>' + parseInt(data[x].total.tested).toLocaleString('en-IN') + '</b><br></div>';
                } else {
                    updata += '<div class="cases6"><b>Total Tests<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].total.tested).toLocaleString('en-IN') + '</b><br></div>';
                }
                if (data[x].delta.vaccinated != undefined) {
                    updata += '<div class="cases7"><b>Vaccination<br><div style="font-size:13px;">[+' + parseInt(data[x].delta.vaccinated).toLocaleString('en-IN') + ']</div>' + parseInt(data[x].total.vaccinated).toLocaleString('en-IN') + '</b><br></div>';
                } else {
                    updata += '<div class="cases7"><b>Vaccination<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].total.vaccinated).toLocaleString('en-IN') + '</b><br></div>';
                }
                updata += '</div></div>';
            } else {
                updata += '<div class="cases2"><b>Confirmed<br>' + parseInt(data[x].total.confirmed).toLocaleString('en-IN') + '</b><br></div>';
                updata += '<div class="cases3"><b>Active Cases<br>' + parseInt(data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
                updata += '<div class="cases4"><b>Total Deaths<br>' + parseInt(data[x].total.deceased).toLocaleString('en-IN') + '</b><br></div>';
                updata += '<div class="cases5"><b>Recoveries<br>' + parseInt(data[x].total.recovered).toLocaleString('en-IN') + '</b><br></div>';
                updata += '<div class="cases6"><b>Total Tests<br>' + parseInt(data[x].total.tested).toLocaleString('en-IN') + '</b><br></div>';
                updata += '<div class="cases7"><b>Vaccination<br>' + parseInt(data[x].total.vaccinated).toLocaleString('en-IN') + '</b><br></div>';
                updata += '</div></div>';
            }
            var title = '';
            title = name(x) + ' Coronavirus Update (Live): ' + data[x].total.confirmed + ' Cases and ' + data[x].total.deceased + ' Deaths from COVID-19 Virus Pandemic';
            $.each(data[x].districts, function(key, value) {
				var error=0;
				try {
					if (data[x].districts[key].total.hasOwnProperty('confirmed')) {
						error =0;
                    } else {
                        error=0;
                    }
				}
				catch(e) {
				  var error=1;
				  console.log("Cannot Load information of " + key + " of state " + name(x))
				}
                if (data[x].districts[key].hasOwnProperty('delta')) {
					if (error == 0) {
                    if ((data[x].districts[key].delta.confirmed - data[x].districts[key].delta.deceased - data[x].districts[key].delta.recovered) < 0) {
                        sign = "";
                    } else {
                        sign = '+';
                    }
                    tabledata += '<tr>';
                    tabledata += '<td class="tdgrey" style="cursor: pointer;" id="'+key+'" stateid="'+x+'" onclick="districtpage(this)" style="font-weight: 600;">' + key + '</td>';
                    if (data[x].districts[key].delta.confirmed > 0) {
                        tabledata += '<td class="tdpur"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].districts[key].delta.confirmed + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.confirmed + '</td>';
                    } else if (data[x].districts[key].total.hasOwnProperty('confirmed')) {
                        tabledata += '<td class="tdpur"><div class="confirm">' + data[x].districts[key].total.confirmed + '</td>';
                    } else {
                        tabledata += '<td class="tdpur"><div class="confirm">0</td>';
                    }
                    if (isNaN(data[x].districts[key].delta.confirmed - data[x].districts[key].delta.deceased - data[x].districts[key].delta.recovered) != true) {
                        tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">' + sign + (data[x].districts[key].delta.confirmed - data[x].districts[key].delta.deceased - data[x].districts[key].delta.recovered) + '&nbsp;</div><div class="confirm">' + (data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) + '</td>';
                    } else if (isNaN(data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) != true) {
                        tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">' + (data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].delta.recovered > 0) {
                        tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].districts[key].delta.recovered + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.recovered + '</td>';
                    } else if (data[x].districts[key].total.recovered !== undefined) {
                        tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">' + data[x].districts[key].total.recovered + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].delta.deceased > 0) {
                        tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].districts[key].delta.deceased + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.deceased + '</td>';
                    } else if (data[x].districts[key].total.deceased != undefined) {
                        tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">' + data[x].districts[key].total.deceased + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].delta.tested > 0) {
                        tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #fc03e3;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].districts[key].delta.tested + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.tested + '</td>';
                    } else if (data[x].districts[key].total.tested != undefined) {
                        tabledata += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;"><div class="confirm">' + data[x].districts[key].total.tested + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].delta.vaccinated > 0) {
                        tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+' + data[x].districts[key].delta.vaccinated + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.vaccinated + '</td>';
                    } else if (data[x].districts[key].total.vaccinated != undefined) {
                        tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div class="confirm">' + data[x].districts[key].total.vaccinated + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div class="confirm">0</td>';
                    }
                    tabledata += '</tr>';
					}
                } else {
					if (error == 0) {
                    tabledata += '<tr>';
                    tabledata += '<td class="tdgrey" style="cursor: pointer;" id="'+key+'" stateid="'+x+'" onclick="districtpage(this)"  style="font-weight: 600;">' + key + '</td>';
                    if (data[x].districts[key].total.hasOwnProperty('confirmed')) {
                        tabledata += '<td class="tdpur"><div class="confirm">' + data[x].districts[key].total.confirmed + '</td>';
                    } else {
                        tabledata += '<td class="tdpur"><div class="confirm">0</td>';
                    }
                    if (isNaN(data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) != true) {
                        tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">' + (data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].total.recovered != undefined) {
                        tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">' + data[x].districts[key].total.recovered + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].total.deceased != undefined) {
                        tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">' + data[x].districts[key].total.deceased + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].total.tested != undefined) {
                        tabledata += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;"><div class="confirm">' + data[x].districts[key].total.tested + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(252, 3, 227,0.1); color: #fc03e3;"><div class="confirm">0</td>';
                    }
                    if (data[x].districts[key].total.vaccinated != undefined) {
                        tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div class="confirm">' + data[x].districts[key].total.vaccinated + '</td>';
                    } else {
                        tabledata += '<td style="background-color: rgba(252, 194, 3,0.1); color: #fcc203;"><div class="confirm">0</td>';
                    }
                    tabledata += '</tr>';}
			}
            });
            if ($("html").hasClass(x)) {
                $('#covid4').empty().append(updata);
                $('#foot').empty().append(tabledata1);
                $('#table').empty().append(tabledata);
                $('#title').empty().append(title);
                sorttable(1);
                return true;
            }
        });
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

    $('#tabletitle').empty().append(tabletitle);
}

function name(x) {
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

function finddata() {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data) {
	var search=''
	$.each(data, function(x, y) {
		search += '<li class="state" value="'+name(x)+'" onclick="searchdata(this)" id="'+ x +'">'+name(x)+'</li>'
		$.each(data[x].districts, function(key, value) {
			search += '<li class="district" value="'+key+'" state="'+ name(x) +'" stateid="'+ x +'" onclick="searchdata(this)" id="'+ key +'">'+key +', '+ name(x) +'</li>'
		});
	});
	$('#search').append(search);
	ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
	li[i].style.display = "none";
	}
});			
}

finddata();

function searchdata(data) {
	if ($("#"+data.id).hasClass("state")) {
		dataempty1();
		getdata(data);
	} else {
		window.localStorage.setItem('pind', '');
		$("body").removeClass("pin");
		state=data.getAttribute("stateid");
		$("html").addClass(state);
		districtpage(data);
	}
}

function district(y,x) {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data) {
	var updata="";
	var pin ='pin';
	var go1 = localStorage.getItem('pind');
	if (go1 != '' && dispinned == false) {
	pin= 'unpin';
	}
	updata += '<div class="dishead"><div id="disrem" onclick="$(\'#coviddis\').empty(); $(\'#coviddis\').removeClass(\'bor\');" class="disbut" style="float: right; text-align: right;">x</div><div class="disbut" id="disclose" onclick="closedis()" style="float: right; margin-right:5px; margin-left:5px; text-align: right;">ᐃ</div>'+y+'<div id="dispin" onclick="pin(this)" class="dispin" sta="'+x+'" dis="'+y+'" style="float: left; text-align: left;"> 📌'+ pin+'</div></div>'
	if (data[x].hasOwnProperty('delta')) {
		if ((data[x].districts[y].delta.confirmed - data[x].districts[y].delta.recovered - data[x].districts[y].delta.deceased) < 0) {
			sign = "";
		} else {
			sign = '+';
		}
		if (data[x].districts[y].delta.confirmed != undefined) {
			updata += '<div class="data">Confirmed<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.confirmed + ']</div>' + parseInt(data[x].districts[y].total.confirmed).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Confirmed<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.confirmed).toLocaleString('en-IN') + '<br></div>';
		}
		if (isNaN(data[x].districts[y].delta.confirmed - data[x].districts[y].delta.recovered - data[x].districts[y].delta.deceased) != true) {
			updata += '<div class="data">Active Cases<br><div style="font-size:13px;">[' + sign + (data[x].districts[y].delta.confirmed - data[x].districts[y].delta.recovered - data[x].districts[y].delta.deceased) + ']</div>' + parseInt(data[x].districts[y].total.confirmed - data[x].districts[y].total.recovered - data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Active Cases<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.confirmed - data[x].districts[y].total.recovered - data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.deceased != undefined) {
			updata += '<div class="data">Total Deaths<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.deceased + ']</div>' + parseInt(data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Total Deaths<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.recovered != undefined) {
			updata += '<div class="data">Recoveries<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.recovered + ']</div>' + parseInt(data[x].districts[y].total.recovered).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Recoveries<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.recovered).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.tested != undefined) {
			updata += '<div class="data">Total Tests<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.tested + ']</div>' + parseInt(data[x].districts[y].total.tested).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Total Tests<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.tested).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.vaccinated != undefined) {
			updata += '<div class="data">Vaccination<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.vaccinated + ']</div>' + parseInt(data[x].districts[y].total.vaccinated).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Vaccination<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.vaccinated).toLocaleString('en-IN') + '<br></div>';
		}
		updata += '</div></div>';
	} else {
		updata += '<div class="data">Confirmed<br>' + parseInt(data[x].districts[y].total.confirmed).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Active Cases<br>' + parseInt(data[x].districts[y].total.confirmed - data[x].districts[y].total.recovered - data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Total Deaths<br>' + parseInt(data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Recoveries<br>' + parseInt(data[x].districts[y].total.recovered).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Total Tests<br>' + parseInt(data[x].districts[y].total.tested).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Vaccination<br>' + parseInt(data[x].districts[y].total.vaccinated).toLocaleString('en-IN') + '<br></div>';
		updata += '</div></div>';
	}
	$('#coviddis').empty().append(updata);
	$(".dis .data").addClass("disin");
	$('#coviddis').addClass("bor");
	$('#dispin').addClass("disin");
	ul = document.getElementById("search");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
	li[i].style.display = "none";
	}
	document.getElementById("searchbar").value = '';
});
}

function districtinfo(y,x) {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data) {
	var updata="";
	var pin ='pin';
	var go1 = localStorage.getItem('pind');
	if (go1 != '') {
	sp=go1.split(",")
	if (sp[0] == y && sp[1] == x){
		$('#coviddis').addClass('hide');
		$('#coviddis').removeClass('bor');
		dispinned = true;
		pin= 'unpin';
	}
	}
	
	updata += '<div class="dishead">'+y+'&nbsp<div id="dispin1" style="display: inline-block;" onclick="pin1(this)" class="dispin" sta="'+x+'" dis="'+y+'"> 📌'+ pin+'</div></div>'
	if (data[x].hasOwnProperty('delta')) {
		if ((data[x].districts[y].delta.confirmed - data[x].districts[y].delta.recovered - data[x].districts[y].delta.deceased) < 0) {
			sign = "";
		} else {
			sign = '+';
		}
		if (data[x].districts[y].delta.confirmed != undefined) {
			updata += '<div class="data">Confirmed<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.confirmed + ']</div>' + parseInt(data[x].districts[y].total.confirmed).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Confirmed<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.confirmed).toLocaleString('en-IN') + '<br></div>';
		}
		if (isNaN(data[x].districts[y].delta.confirmed - data[x].districts[y].delta.recovered - data[x].districts[y].delta.deceased) != true) {
			updata += '<div class="data">Active Cases<br><div style="font-size:13px;">[' + sign + (data[x].districts[y].delta.confirmed - data[x].districts[y].delta.recovered - data[x].districts[y].delta.deceased) + ']</div>' + parseInt(data[x].districts[y].total.confirmed - data[x].districts[y].total.recovered - data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Active Cases<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.confirmed - data[x].districts[y].total.recovered - data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.deceased != undefined) {
			updata += '<div class="data">Total Deaths<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.deceased + ']</div>' + parseInt(data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Total Deaths<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.recovered != undefined) {
			updata += '<div class="data">Recoveries<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.recovered + ']</div>' + parseInt(data[x].districts[y].total.recovered).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Recoveries<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.recovered).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.tested != undefined) {
			updata += '<div class="data">Total Tests<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.tested + ']</div>' + parseInt(data[x].districts[y].total.tested).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Total Tests<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.tested).toLocaleString('en-IN') + '<br></div>';
		}
		if (data[x].districts[y].delta.vaccinated != undefined) {
			updata += '<div class="data">Vaccination<br><div style="font-size:13px;">[+' + data[x].districts[y].delta.vaccinated + ']</div>' + parseInt(data[x].districts[y].total.vaccinated).toLocaleString('en-IN') + '<br></div>';
		} else {
			updata += '<div class="data">Vaccination<br><div style="font-size:13px;">[--]</div>' + parseInt(data[x].districts[y].total.vaccinated).toLocaleString('en-IN') + '<br></div>';
		}
		updata += '</div></div>';
	} else {
		updata += '<div class="data">Confirmed<br>' + parseInt(data[x].districts[y].total.confirmed).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Active Cases<br>' + parseInt(data[x].districts[y].total.confirmed - data[x].districts[y].total.recovered - data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Total Deaths<br>' + parseInt(data[x].districts[y].total.deceased).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Recoveries<br>' + parseInt(data[x].districts[y].total.recovered).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Total Tests<br>' + parseInt(data[x].districts[y].total.tested).toLocaleString('en-IN') + '<br></div>';
		updata += '<div class="data">Vaccination<br>' + parseInt(data[x].districts[y].total.vaccinated).toLocaleString('en-IN') + '<br></div>';
		updata += '</div></div>';
	}
	$('#coviddis1').empty().append(updata);
	$(".dis .data").addClass("disin");
	$('#dispin').addClass("disin");
});
}

$(document).ready(function(){
var go1 = localStorage.getItem('pind');
if (go1 != '' && go1 !== null) {
	sp=go1.split(",")
	district(sp[0],sp[1]);
	$("body").addClass("pin");
}
});

$(document).click(function (e)
{
    var container = $("#searchbar");

    if (!container.is(e.target))
    {
	ul = document.getElementById("search");
    li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
	li[i].style.display = "none";}
	document.getElementById("searchbar").value = '';
    }
});

function stateid(x,y) {
$.getJSON("https://cdn-api.co-vin.in/api/v2/admin/location/states", function(data) {
$.each(data.states, function(key, value) {
	if (x == value.state_name) {
		districtid(value.state_id,y);
	} 
});
});
}

function districtid(x,y) {
$.getJSON('https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + x, function(data) {
$.each(data.districts, function(key, value) {
	if (y == value.district_name) {
		vacinnation(value.district_id);
	} 
});
});
}

function vacinnation(x) {
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
	dd = '0' + dd;
}

if (mm < 10) {
	mm = '0' + mm;
}
today = dd + '-' + mm + '-' + yyyy;
	var tabledata = '';
	tabledata += '<tr>';
	tabledata += '</tr>';
	var tfoot = '<tr></tr>';
	var found=0;
	var total=2;
    var tabletitle = '';
    tabletitle += '<th style="background-color: rgba(127,127,127,0.1);" onclick="sortTable(0,\'#sort\')">';
    tabletitle += '<div id="sort" class="sticky heading-content">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th style="background-color: rgba(127,127,127,0.1);" onclick="sorttable(1,\'#sort1\')">';
    tabletitle += '<div id="sort1" class="sticky heading-content">Block Name&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th style="background-color: rgba(127,127,127,0.1);" onclick="sorttable(2,\'#sort2\')">';
    tabletitle += '<div id="sort2" class="sticky heading-content">Min Age</div>';
    tabletitle += '</th>';
    tabletitle += '<th style="background-color: rgba(127,127,127,0.1);" onclick="sorttable(3,\'#sort3\')">';
    tabletitle += '<div id="sort3" class="sticky heading-content">Available Vaccines&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th style="background-color: rgba(127,127,127,0.1);" onclick="sorttable(4,\'#sort4\')">';
    tabletitle += '<div id="sort4" class="sticky heading-content">Pin Code&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
    tabletitle += '<th style="background-color: rgba(127,127,127,0.1);">';
    tabletitle += '<div class="sticky heading-content">Timings&nbsp;&nbsp;</div>';
    tabletitle += '</th>';
$.getJSON('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+x+'&date='+today, function(data) {
$.each(data.sessions, function(key, value) {
if (value.available_capacity > 0) {
tabledata += '<tr>';
tabledata += '<td style="background-color: rgba(127,127,127,0.1); font-weight: 600;">' + value.name + '</td>';
tabledata += '<td style="background-color: rgba(127,127,127,0.1); font-weight: 600;">' + value.block_name + '</td>';
tabledata += '<td style="background-color: rgba(127,127,127,0.1); font-weight: 600!important;"><div class="confirm">' + value.min_age_limit + '</td>';
tabledata += '<td style="background-color: rgba(127,127,127,0.1); font-weight: 600!important;"><div class="confirm">' + value.available_capacity + '</td>';
tabledata += '<td style="background-color: rgba(127,127,127,0.1); font-weight: 600!important;"><div class="confirm">' + value.pincode + '</td>';
tabledata += '<td style="background-color: rgba(127,127,127,0.1); font-weight: 600;">' + value.from + '-' + value.to +'</td>';
tabledata += '</tr>';
found=1;
}
});
if (found == 1) {
$('#table').append(tabledata);
$('#tabletitle').append(tabletitle);
$('#tfoot').append(tabletitle);
$("#vacinetext").removeClass('hide');
}
});
}

function districtpage(x) {
	state=x.getAttribute("stateid");
	stateclass = state;
	id=x.id;
	$("#dispage3").removeClass('hide');
	$('#tabletitle').empty();
	dataempty1();
	$("#covid3").addClass('hide');
	$("#world1").addClass('hide');
	$("#tabletext").addClass('hide');
	$("#mainback").removeClass('hide');
	$("#goback1").removeClass('hide');
	$('#table').empty();
	districttitle(id,state);
	districtinfo(id,state);
	stateid(name(state),id);
	chartlinedis(id,state);
	chartlinedis1(id,state);
}

function gostate() {
var stateid = stateclass;
$("#goback1").addClass('hide');
$("#vacinetext").addClass('hide');
$("#tabletext").removeClass('hide');
$("#dispage3").addClass('hide');
if (dispinned == true) {
	$('#coviddis').removeClass('hide');
	$('#coviddis').addClass('bor');
}
dataempty1();
getdataid(stateid);
}

function pin1(x) {
	var district1=x.getAttribute("dis");
	var state=x.getAttribute("sta");
    if (document.getElementById("dispin1").innerHTML == "📌 unpin") {
		dispinned = false;
        window.localStorage.setItem('pind', '');
		//window.localStorage.setitem('pins', '');
		$("body").removeClass("pin");
		document.getElementById("dispin1").innerHTML = "📌 pin";
    } else {
		district(district1,state);
		$('#coviddis').addClass('hide');
		$('#coviddis').removeClass('bor');
		dispinned = true;
        $("body").addClass("pin");
        window.localStorage.setItem('pind', String(district1+','+state));
		//window.localStorage.setitem('pins', String(state));
		document.getElementById("dispin1").innerHTML = "📌 unpin";
    }
}

function districttitle(y,x) {
$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data) {
var title = y + ' Coronavirus Update (Live): ' + data[x].districts[y].total.confirmed + ' Cases from COVID-19 Virus Pandemic';
$('#title').empty().append(title);
});
}