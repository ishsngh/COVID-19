$.getJSON("https://api.covid19india.org/data.json", function(coviddata) {
    $.each(coviddata.statewise, function(key, value) {
        if (value.state == "Total") {
            active = parseInt(value.active);
            recovered = parseInt(value.recovered);
            deaths = parseInt(value.deaths);
        }
    });

    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Stats', 'Covid-19', {
                role: 'style'
            }],
            ["Active cases", active, "opacity: 0.5"],
            ['Recovered', recovered, 'opacity: 0.5'],
            ['Deaths', deaths, 'opacity: 0.5']
        ]);

        var width1 = parseInt($(window).width() * 0.9);
        if (width1 > 400) {
            width1 = 400
        }
        var options = {
            width: width1,
            height: width1,
            title: 'Total Cases',
            titleTextStyle: {
                color: "#ffffff",
                font: 'archia',
                // fontSize: 20,
            },
            pieHole: 0.5,
            backgroundColor: {
                fill: 'transparent'
            },
            chartArea: {
                left: 10,
                right: 10, // !!! works !!!
                bottom: 20, // !!! works !!!
                top: 20,
                width: "100%",
                height: "100%"
            },
            pieSliceTextStyle: {
                color: 'white',
            },
            legend: {
                position: 'bottom',
                textStyle: {
                    color: 'gray'
                }
            },

            pieSliceText: 'label',
        };

        var chart = new google.visualization.PieChart(document.getElementById('covid19'));
        chart.draw(data, options);
    }
});