var country=new Array();
var total=new Array();
var death=new Array();
var newconfi=new Array();
var newdeath=new Array();
var datee=new Array();
fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(data => {
 console.log(data)
{
   
total = data.Global.TotalConfirmed
death = data.Global.TotalDeaths
newconfi = data.Global.NewConfirmed
newdeath = data.Global.NewDeaths
datee = data.Global.Date

}
console.log(total)
console.log(death)
console.log(newconfi)
console.log(newdeath)
console.log(datee)
draw1();
})

function draw1(){



Highcharts.chart('container1', {
chart: {
    type: 'column'
},
title: {
    text: 'Covid_19 Global Analysis '
},
xAxis: {
    categories: [
        'The all info',
        'Totalconf',
        'Totaldeath',
        'Date'
    ]
},
yAxis: [{
    min: 0,
    title: {
        text: ''
    }
}, {
    title: {
        text: ''
    },
    opposite: true
}],
legend: {
    shadow: false
},
tooltip: {
    shared: true
},
plotOptions: {
    column: {
        grouping: false,
        shadow: false,
        borderWidth: 0
    }
},
series: [{
    name: 'TotalConfirmed',
    color: 'rgba(165,170,217,1)',
    data: [parseFloat(total, death, newconfi,newdeath,datee)],
    pointPadding: 0.3,
    pointPlacement: -0.2
}, {
    name: 'TotalDeaths',
    color: 'rgba(126,86,134,.9)',
    data: [parseFloat(death, total, newconfi)],
    pointPadding: 0.4,
    pointPlacement: -0.2
}, {
    name: 'NewConfirmed',
    color: 'rgba(248,161,63,1)',
    data: [parseFloat(newconfi, newconfi, newconfi)],
    tooltip: {
        valuePrefix: '$',
        valueSuffix: ' M'
    },
    pointPadding: 0.3,
    pointPlacement: 0.2,
    yAxis: 1
}, {
    name: 'newdeath',
    color: 'rgba(186,60,61,.9)',
    data: [parseFloat(newdeath, newdeath, newdeath)],
    tooltip: {
        valuePrefix: '$',
        valueSuffix: ' M'
    },
    pointPadding: 0.4,
    pointPlacement: 0.2,
    yAxis: 1
},{
    name: 'Date',
    color: '#0B2447',
    data: [Date(datee,datee, datee, newdeath)],
    tooltip: {
        valuePrefix: '$',
        valueSuffix: ' M'
    },
    pointPadding: 0.4,
    pointPlacement: 0.2,
    yAxis: 1
}]
});


Highcharts.chart("container", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "persentage data",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "covid",
        colorByPoint: true,
        data: [
          {
            name: "total",    
            y: newconfi,
            sliced: true,
            selected: true,
          },
          {
            name: "death",
            y: death,
          },
          {
            name: "newconfi",
            y: total,
          },
          {
            name: "newdeath",
            y: newdeath,
          },
          
          
          
          
          
        ],
      },
    ],
  });




};




    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        draw5(data);
    })
    let chartDiv8 = `
    
    <figure class="highcharts-figure">
        <div id="container4"></div>
        <p class="highcharts-description">
            
        </p>
    </figure>`;
    document.getElementById("mychart8").innerHTML = chartDiv8;
    async function draw5(info3){
    Highcharts.chart('container4', {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Number of confirmed COVID-19'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [info3[8].country, info3[90].country, info3[20].country, info3[4].country,info3[9].country,info3[20].country, info3[19].country,
            info3[15].country, info3[28].country, info3[50].country, info3[51].country, info3[30].country],
            title: {
                text: 'country'
            }
        },
        yAxis: {
            title: {
                margin: 20,
                text: 'total cases'
            }
        },
        tooltip: {
            headerFormat: '<b></b><br>'
        },
        plotOptions: {
            series: {
                depth: 28,
                colorByPoint: false
            }
        },
        series: [{
            data: [info3[8].casesPerOneMillion, info3[0].casesPerOneMillion, info3[60].casesPerOneMillion, info3[4].casesPerOneMillion, info3[9].casesPerOneMillion,
            info3[20].casesPerOneMillion,info3[19].casesPerOneMillion,info3[15].casesPerOneMillion, info3[28].casesPerOneMillion],
            name: 'Cases',
            showInLegend: false
        }]
    });
}







  
