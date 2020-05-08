google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Date', 'Cases'],
  ['24/03',74],
  ['25/03',86],
  ['26/03',78],
  ['27/03',160],
  ['28/03',143],
  ['29/03',110],
  ['30/03',208],
  ['31/03',272],
  ['1/04',379],
  ['2/04',477],
  ['3/04',563],
  ['4/04',566],
  ['5/04',605],
  ['6/04',489],
  ['7/04',573],
  ['8/04',565],
  ['9/04',813],
  ['10/04',869],
  ['11/04',854],
  ['12/04',758],
  ['13/04',1243],
  ['14/04',1035],
  ['15/04',886],
  ['16/04',1061],
  ['17/04',922],
  ['18/04',1371],
  ['19/04',1580],
  ['20/04',1239],
  ['21/04',1537],
  ['22/04',1292],
  ['23/04',1667],
  ['24/04',1408],
  ['25/04',1835],
  ['26/04',1607],
  ['27/04',1568],
  ['28/04',1902],
  ['29/04',1705],
  ['30/04',1801],
  ['1/05',2396],
  ['2/05',2564],
  ['3/05',2952],
  ['4/05',3656],
  ['5/05',2971],
  ['6/05',3602],
  ['7/05',3344],
  
]);

var options = {
  backgroundColor: { fill: 'transparent' },
  curveType: 'function',
  hAxis: {
    textStyle:{color: 'gray'}
},
  vAxis: {
    textStyle:{color: 'gray'}
},
  legend: {position: 'bottom', textStyle: {color: 'gray'}},
};

var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}
