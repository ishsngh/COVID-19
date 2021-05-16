$.getJSON("https://api.covid19india.org/v4/min/data.min.json", function(data){
	var name="";
	$.each(data, function(x, y){
	var tabledata = '';
	tabledata += '<tr>';
	tabledata += '</tr>';
	    var tabledata1 = '';
		tabledata1 += '<tr>';
		if (x == "AN") {
		name="Andaman and Nicobar Islands";}
		else if (x == "AP") {
		name="Andhra Pradesh";}
		else if (x == "AR") {
		name="Arunachal Pradesh";}
		else if (x == "AS") {
		name="Assam";}
		else if (x == "BR") {
		name="Bihar";}
		else if (x == "CH") {
		name="Chandigarh";}
		else if (x == "CT") {
		name="Chhattisgarh";}
		else if (x == "DN") {
		name="Dadra and Nagar Haveli and Daman and Diu";}
		else if (x == "DL") {
		name="Delhi";}
		else if (x == "GA") {
		name="Goa";}
		else if (x == "GJ") {
		name="Gujarat";}
		else if (x == "HR") {
		name="Haryana";}
		else if (x == "HP") {
		name="Himachal Pradesh";}
		else if (x == "JK") {
		name="Jammu and Kashmir";}
		else if (x == "JH") {
		name="Jharkhand";}
		else if (x == "KA") {
		name="Karnataka";}
		else if (x == "KL") {
		name="Kerala";}
		else if (x == "LA") {
		name="Ladakh";}
		else if (x == "LD") {
		name="Lakshadweep";}
		else if (x == "MP") {
		name="Madhya Pradesh";}
		else if (x == "MH") {
		name="Maharashtra";}
		else if (x == "MN") {
		name="Manipur";}
		else if (x == "ML") {
		name="Meghalaya";}
		else if (x == "MZ") {
		name="Mizoram";}
		else if (x == "NL") {
		name="Nagaland";}
		else if (x == "OR") {
		name="Odisha";}
		else if (x == "PY") {
		name="Puducherry";}
		else if (x == "PB") {
		name="Punjab";}
		else if (x == "RJ") {
		name="Rajasthan";}
		else if (x == "SK") {
		name="Sikkim";}
		else if (x == "UN") {
		name="State Unassigned";}
		else if (x == "TN") {
		name="Tamil Nadu";}
		else if (x == "TG") {
		name="Telangana";}
		else if (x == "TR") {
		name="Tripura";}
		else if (x == "UP") {
		name="Uttar Pradesh";}
		else if (x == "UT") {
		name="Uttarakhand";}
		else if (x == "WB") {
		name="West Bengal";}
		tabledata1 += '<td class="tdgrey" style="font-weight: 600;">' + name +'</td>';
		tabledata1 += '<td class="tdpur">' + data[x].total.confirmed +'</td>';
		tabledata1 += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;">' + ( data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased) +'</td>';
		tabledata1 += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;">' + data[x].total.recovered +'</td>';
		tabledata1 += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;">' + data[x].total.deceased +'</td>';
		tabledata1 += '</tr>';
		var updata = '';
		updata += '<div class="info" id="test">';
		updata +='<div style="font-size:28px; font-weight:bold;">'+ name +'</div>';
		if ((data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased) < 0) {
		sign= ""; } else {
		sign= '+'; }
		if (data[x].delta.confirmed != undefined) {
		updata += '<div class="cases2"><b>Confirmed<br><div style="font-size:13px;">[+'+ data[x].delta.confirmed +']</div>' + data[x].total.confirmed + '</b><br></div>';			
		} else {
		updata += '<div class="cases2"><b>Confirmed<br><div style="font-size:13px;">[--]</div>' + data[x].total.confirmed + '</b><br></div>';	
		}
		if (isNaN(data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased) != true) {
		updata += '<div class="cases3"><b>Active Cases<br><div style="font-size:13px;">[' + sign + (data[x].delta.confirmed - data[x].delta.recovered - data[x].delta.deceased) +']</div>' + (data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased) + '</b><br></div>';
		} else {
		updata += '<div class="cases3"><b>Active Cases<br><div style="font-size:13px;">[--]</div>' + (data[x].total.confirmed - data[x].total.recovered - data[x].total.deceased) + '</b><br></div>';
		}
		if (data[x].delta.deceased != undefined) {
		updata += '<div class="cases4"><b>Total Deaths<br><div style="font-size:13px;">[+'+ data[x].delta.deceased +']</div>' + data[x].total.deceased + '</b><br></div>';
		} else {
		updata += '<div class="cases4"><b>Total Deaths<br><div style="font-size:13px;">[--]</div>' + data[x].total.deceased + '</b><br></div>';	
		}
		if (data[x].delta.recovered != undefined) {
		updata += '<div class="cases5"><b>Recoveries<br><div style="font-size:13px;">[+'+ data[x].delta.recovered +']</div>' + data[x].total.recovered + '</b><br></div>';
		} else {
		updata += '<div class="cases5"><b>Recoveries<br><div style="font-size:13px;">[--]</div>' + data[x].total.recovered + '</b><br></div>';
		}
		updata += '</div></div>';
		var title='';
		title = name + ' Coronavirus Update (Live): ' + data[x].total.confirmed + ' Cases and '+ data[x].total.deceased +' Deaths from COVID-19 Virus Pandemic';
	$.each(data[x].districts, function(key, value){
	if (key != 'Other State' && key != 'Foreign Evacuees' && key != 'Capital Complex' && key != 'BSF Camp' && key != 'Evacuees' && key != 'Italians' && key != 'Airport Quarantine' && key != 'Railway Quarantine') {
    if ((data[x].districts[key].delta.confirmed - data[x].districts[key].delta.deceased - data[x].districts[key].delta.recovered) < 0) { 
    sign= ""; } else {
    sign= '+'; }
		tabledata += '<tr>';
		tabledata += '<td class="tdgrey" style="font-weight: 600;">' + key +'</td>';
		if (data[x].districts[key].delta.confirmed > 0) {
		 tabledata += '<td class="tdpur"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+'+ data[x].districts[key].delta.confirmed + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.confirmed+'</td>';}
		else if (data[x].districts[key].total.confirmed != undefined) {
			tabledata += '<td class="tdpur"><div class="confirm">' + data[x].districts[key].total.confirmed+'</td>';
		} else {
		tabledata += '<td class="tdpur"><div class="confirm">0</td>';	
		}
		 if (data[x].districts[key].delta.confirmed > 0 && isNaN(data[x].districts[key].delta.confirmed - data[x].districts[key].delta.deceased - data[x].districts[key].delta.recovered) != true ) {
		 tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">' + sign + (data[x].districts[key].delta.confirmed - data[x].districts[key].delta.deceased - data[x].districts[key].delta.recovered) + '&nbsp;</div><div class="confirm">' + (data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) +'</td>';
		 } else if ( isNaN(data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) != true ) {
		 tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">' + (data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) +'</td>';	
		 } else {
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">0</td>';
		} 
		 if (data[x].districts[key].delta.recovered > 0) {
		 tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+'+ data[x].districts[key].delta.recovered + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.recovered +'</td>';}
		 else if (data[x].districts[key].total.recovered != undefined) {
		 tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">' + data[x].districts[key].total.recovered +'</td>';
		 } else {
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">0</td>';
		}
		 if (data[x].districts[key].delta.deceased > 0) {
		 tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+'+ data[x].districts[key].delta.deceased + '&nbsp;</div><div class="confirm">' + data[x].districts[key].total.deceased +'</td>';}
		 else if (data[x].districts[key].total.deceased != undefined) {
		 tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">' + data[x].districts[key].total.deceased +'</td>';
		 } else {
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">0</td>';
		}		
		tabledata += '</tr>';
	} else {
		tabledata += '<tr>';
		tabledata += '<td class="tdgrey" style="font-weight: 600;">' + key +'</td>';
		if (data[x].districts[key].total.confirmed != undefined) {
		tabledata += '<td class="tdpur"><div class="confirm">' + data[x].districts[key].total.confirmed+'</td>';
		} else {
		tabledata += '<td class="tdpur"><div class="confirm">0</td>';
		}
		if ( isNaN(data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) != true ) {
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">' + (data[x].districts[key].total.confirmed - data[x].districts[key].total.deceased - data[x].districts[key].total.recovered) +'</td>';
		} else {
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">0</td>';
		}
		if (data[x].districts[key].total.recovered != undefined) {
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">' + data[x].districts[key].total.recovered +'</td>';
		} else {
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">0</td>';
		}
		if (data[x].districts[key].total.deceased != undefined) {
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">' + data[x].districts[key].total.deceased +'</td>';
		} else {
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">0</td>';
		}
		tabledata += '</tr>';
	}
	});
	if( $( "html" ).hasClass(x)) {
		$('#covid4').append(updata);
		$('#foot').append(tabledata1);
		$('#table').append(tabledata);
		$('#title').append(title);
		sorttable(1);
	}
	});
});

