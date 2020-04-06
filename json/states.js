google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Stats', 'Covid-19 states'],
  ['Andhra Pradesh',     252],
  ['Delhi',     503],
  ['Gujarat',     128],
  ['Karnataka',     151],
  ['Kerala',     314],
  ['Madhya Pradesh',     193],
  ['Maharashtra',     748],
  ['Rajasthan',     266],
  ['Tamil Nadu',     571],
  ['Telangana',      334],
  ['Uttar Pradesh',  278],
  ['Others',  551]
]);

var options = {
  width:"350",
  height:"350", 
  pieHole: 0.5,
  legend: {position: 'bottom', textStyle: {color: 'gray'}},
  backgroundColor: { fill:'transparent' },
	titlePosition: 'in', axisTitlesPosition: 'in',
	hAxis: {textPosition: 'in'}, vAxis: {textPosition: 'in'},
  options: {
  theme: 'maximized'
},
  chartArea:{
	left:10,
	right:10, // !!! works !!!
	bottom:20,  // !!! works !!!
	top:20,
	width:"100%",
	height:"100%"
  },
  pieSliceTextStyle: {
	color: 'white',
  },
  pieSliceText: 'none',
};

var chart = new google.visualization.PieChart(document.getElementById('covid'));
chart.draw(data, options);
}
