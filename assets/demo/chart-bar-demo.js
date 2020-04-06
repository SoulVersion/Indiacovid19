
var slabels = [];
var sdata = [];



function overView(){
  
  fetch('https://api.covid19india.org/data.json')
  .then((response) => {
    return response.json();
  })
  .then((stats) => {
    //  vlabels.push(stats.cases_time_series[0].date);
    //  console.log(vlabels[0]); 
    
    for(i=0; i<stats.cases_time_series.length; i++){
      slabels.push(stats.cases_time_series[i].date);
      sdata.push(parseInt(stats.cases_time_series[i].dailyconfirmed))

    }



// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    //labels: ["January", "February", "March", "April", "May", "June"],
    labels: slabels,
    datasets: [{
      label: "Cases",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: sdata,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: true
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 800,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


});

}

overView();
