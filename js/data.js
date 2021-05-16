$.getJSON("https://api.covid19india.org/data.json", function(data){
var sign= "+";
	var tabledata = '';
	$.each(data.statewise, function(key, value){
   if ((value.deltaconfirmed - value.deltadeaths - value.deltarecovered) < 0) { 
   sign= ""; } else {
   sign= '+'; }
		if (value.confirmed > 0) {
		tabledata += '<tr>';
		if (value.state != "Total") {
		tabledata += '<td class="tdgrey" style="font-weight: 600;"><a href="states/'+ value.state+ '.html">' + value.state+'</a></td>';
		if (value.deltaconfirmed > 0) {
		tabledata += '<td class="tdpur"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+'+ value.deltaconfirmed + '&nbsp;</div><div class="confirm">' + value.confirmed+'</td>';}
		else {
			tabledata += '<td class="tdpur"><div class="confirm">' + value.confirmed+'</td>';}
		if (value.deltaconfirmed > 0) {
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">' + sign + (value.deltaconfirmed - value.deltadeaths - value.deltarecovered) + '&nbsp;</div><div class="confirm">' + value.active+'</td>';
		} else {
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;"><div class="confirm">' + value.active+'</td>';	
		}
		if (value.deltarecovered > 0) {
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+'+ value.deltarecovered + '&nbsp;</div><div class="confirm">' + value.recovered+'</td>';}
		else {
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;"><div class="confirm">' + value.recovered+'</td>';}
		if (value.deltadeaths > 0) {
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div style="font-size:12px; display:inline-block; align-text:center; margin-right: .15rem; vertical-align:center; color: #ff073a; font-family: Arial;">+'+ value.deltadeaths + '&nbsp;</div><div class="confirm">' + value.deaths+'</td>';}
		else {
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;"><div class="confirm">' + value.deaths+'</td>';}
		tabledata += '</tr>';
		}}
	});
		$('#table').append(tabledata);
		sorttable(1);
	var tabledata = '';
	$.each(data.statewise, function(key, value){
		if (value.state == "Total") {
		tabledata += '<tr>';
		tabledata += '<td class="tdgrey" style="font-weight: 600;">' + value.state+'</td>';
		tabledata += '<td class="tdpur">' + value.confirmed+'</td>';
		tabledata += '<td style="background-color: rgba(0,123,255,.1); color: #007bff;">' + value.active+'</td>';
		tabledata += '<td style="background-color: rgba(40,167,69,.1); color: #28a745;">' + value.recovered+'</td>';
		tabledata += '<td style="background-color: rgba(255,7,58,0.1); color: #ff073a;">' + value.deaths+'</td>';
		tabledata += '</tr>';
		}			
	});
		$('#foot').append(tabledata);
	var timedata = '';
	$.each(data.statewise, function(key, value){
		if (value.state == "Total") {
		timedata += 'Last updated: ' + value.lastupdatedtime;	}
	});
		$('#covid3').append(timedata);
var sign = "+";
var totaltest= 0;
	var updata = '';
	$.each(data.statewise, function(key, value){
	if ((value.deltaconfirmed - value.deltadeaths - value.deltarecovered) < 0) { 
   sign= ""; } else {
   sign= '+'; }
		if (value.state == "Total") {
		updata += '<div class="info" id="test">';
		updata +='<div style="font-size:28px; font-weight:bold;">INDIA</div>';
		updata += '<div class="cases2"><b>Confirmed<br><div style="font-size:13px;">[+'+ value.deltaconfirmed +']</div>' + parseInt(value.confirmed).toLocaleString('en-IN') + '</b><br></div>';			
		updata += '<div class="cases3"><b>Active Cases<br><div style="font-size:13px;">[' + sign + (value.deltaconfirmed - value.deltadeaths - value.deltarecovered) +']</div>' + parseInt(value.active).toLocaleString('en-IN') + '</b><br></div>';
		updata += '<div class="cases4"><b>Total Deaths<br><div style="font-size:13px;">[+'+ value.deltadeaths +']</div>' + parseInt(value.deaths).toLocaleString('en-IN') + '</b><br></div>';
		updata += '<div class="cases5"><b>Recoveries<br><div style="font-size:13px;">[+'+ value.deltarecovered +']</div>' + parseInt(value.recovered).toLocaleString('en-IN') + '</b><br></div>';
		}
	});

	var today = new Date();
	var dd = today.getDate();

	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	if(dd<10) 
	{
		dd='0'+dd;
	} 

	if(mm<10) 
	{
		mm='0'+mm;
	} 
	today = dd+'/'+mm+'/'+yyyy;

	var date = new Date();
	date.setDate(date.getDate()-1);
	var dd = date.getDate()
	var mm = date.getMonth()+1; 
	var yyyy = date.getFullYear();
	if(dd<10) 
	{
		dd='0'+dd;
	} 

	if(mm<10) 
	{
		mm='0'+mm;
	} 
	var yest = dd+'/'+mm+'/'+yyyy;

	var date = new Date();
	date.setDate(date.getDate()-2);
	var dd = date.getDate()
	var mm = date.getMonth()+1; 
	var yyyy = date.getFullYear();
	if(dd<10) 
	{
		dd='0'+dd;
	} 

	if(mm<10) 
	{
		mm='0'+mm;
	} 
	var yest2 = dd+'/'+mm+'/'+yyyy;
	var todaytests = "0";
	var yestvacine = "0";
	var totalvacine = '0';
	var res= 0;
	$.each(data.tested, function(key, value){
	if (value.updatetimestamp.split(" ")[0] == today) {
	todaytests = value.samplereportedtoday;
	totaltest = value.totalsamplestested;
	totalvacine= value.totaldosesadministered;
	res=1;
	}
	
	if (value.updatetimestamp.split(" ")[0] == yest) {
	yestvacine= value.totaldosesadministered;
	}
	});
	if (res == 0) {
	$.each(data.tested, function(key, value){
	if (value.updatetimestamp.split(" ")[0] == yest) {
	todaytests = value.samplereportedtoday;
	totaltest = value.totalsamplestested;
	totalvacine= value.totaldosesadministered;
	}
	
	if (value.updatetimestamp.split(" ")[0] == yest2) {
	yestvacine= value.totaldosesadministered;
	}
	});
	}
		updata += '<div class="cases6"><b>Total tests<br><div style="font-size:13px;">[+' + todaytests +']</div>' + parseInt(totaltest).toLocaleString('en-IN') + '</b><br></div>';
		updata += '<div class="cases7"><b>Vaccination<br><div style="font-size:13px;">[+' + (totalvacine - yestvacine) +']</div>' + parseInt(totalvacine).toLocaleString('en-IN') + '</b><br></div>';
		updata += '</div></div>';
		$('#covid4').append(updata);
	var updata = '';
	$.each(data.statewise, function(key, value){
		if (value.state == "Total") {
		updata += 'Coronavirus Update (Live): ' + value.confirmed + ' Cases and '+ value.deaths +' Deaths from COVID-19 Virus Pandemic in India';			
		}	
	});
		$('#title').append(updata);
	var world = '';
	$.each(data.statewise, function(key, value){
		if (value.active == 0) {
		world += '<div class="cases1" style="display:block;">' + value.state + '</b></div>';}			
	});
		$('#free').append(world);
});

$.getJSON("https://corona.lmao.ninja/v2/all", function(data){
	var world = '';
	$.each(data, function(key, value){
	if (key == "cases") {
		world += '<div class="cases1"><b>Confirmed<br><div id="worldc" style="font-size:13px;"></div>'+ value.toLocaleString('en-IN') + '</b><br></div>';
	}
	if (key == "active") {
		world += '<div class="cases1"><b>Active Cases<br><div style="font-size:13px;">[--]</div>' + value.toLocaleString('en-IN') + '</b><br></div>';
	}
	if (key == "recovered") {
		world += '<div class="cases1"><b>Recoveries<br><div style="font-size:13px;">[--]</div>' + value.toLocaleString('en-IN') + '</b><br></div>';
	}
	if (key == "deaths") {
		world += '<div class="cases1"><b>Total Deaths<br><div id="worldd" style="font-size:13px;"></div>' + value.toLocaleString('en-IN') + '</b><br></div>';
	}
	});
	$('#world').append(world);
	var world = '';
	$.each(data, function(key, value){
	if (key == "todayCases") {
		world += '[+'+ value + ']';}
	});
		$('#worldc').append(world);
	var world = '';
	$.each(data, function(key, value){
	if (key == "todayDeaths") {
		world += '[+'+ value + ']';}
	});
		$('#worldd').append(world);
	var world = '';
	$.each(data, function(key, value){
		if (key == "tests") {
		world += '<div class="cases1"><b>Total Tests<br><div style="font-size:13px;">(Worldometers)</div>' + value.toLocaleString('en-IN') + '</b><br></div>';
}
		if (key == "testsPerOneMillion") {
		world += '<div class="cases1"><b>Tests /1M<br><div style="font-size:13px;">(Million)</div>' + value.toLocaleString('en-IN') + '</b><br></div>';
}			
	});
		$('#tests').append(world);
});

