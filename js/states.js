google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Stats', 'Covid-19 states'],
  ['Maharashtra',     52667],
  ['Delhi',     14465],
  ['Tamil Nadu',     17082],
  ['Rajasthan',     7376],
  ['Madhya Pradesh',     6859],
  ['Andhra Pradesh',     2983],
  ['Gujarat',     14468],
  ['Punjab',     1942],
  ['West Bengal',     3816],
  ['Telangana',      1920],
  ['Uttar Pradesh',  6497],
  ['Others',  16133]
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
