google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Stats', 'Covid-19 states'],
  ['Maharashtra',     17974],
  ['Delhi',     5980],
  ['Tamil Nadu',     5409],
  ['Rajasthan',     3427],
  ['Madhya Pradesh',     3252],
  ['Andhra Pradesh',     1833],
  ['Gujarat',     7013],
  ['Punjab',     1644],
  ['West Bengal',     1548],
  ['Telangana',      1122],
  ['Uttar Pradesh',  3071],
  ['Others',  4150]
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
