

// function getStats()
// {
//     var value;
//     fetch('https://api.rootnet.in/covid19-in/stats/latest/')
//     .then((response) => {
//       return response.json();
//     })
//     .then((stats) => {
//       //console.log(stats.data);
//       var table = document.getElementById("dev-table");
//       for (var i=0; i<stats.data.regional.length; i++){
//           var dt = stats.data.regional[i].loc;
//           //console.log(dt);

//           //testing
//           var row = table.insertRow(i+1);
//           var cell1 = row.insertCell(0);
//           var cell2 = row.insertCell(1);
//           var cell3 = row.insertCell(2);
//           var cell4 = row.insertCell(3);

//           cell1.innerHTML = stats.data.regional[i].loc;
//           cell2.innerHTML = stats.data.regional[i].confirmedCasesIndian;
//           cell3.innerHTML = stats.data.regional[i].discharged;
//           cell4.innerHTML = stats.data.regional[i].deaths;

//       }

//     });  
// }

// function overView(){
  
//     fetch('https://api.covid19india.org/data.json')
//     .then((response) => {
//       return response.json();
//     })
//     .then((stats) => {
//       //console.log(stats.data.summary);
//       var table = document.getElementById("ov-table");
//       var tblLength = table.rows.length;
//       //console.log(tblLength);
//       //var row1 = table.insertRow();
//       //var cell1 = row1.insertCell(0);
//       //var cell2 = row1.insertCell(1);
//       //cell2.classList.add("bg-info");

//       //cell1.innerHTML = "<h4>Total</h4>";
//      // cell2.innerHTML = stats.data.summary.total;

//       //confirmed
//       var row2 = table.insertRow();
//       var cell1 = row2.insertCell(0);
//       var cell2 = row2.insertCell(1);
//       cell2.classList.add("bg-info");

//       cell1.innerHTML = "<h4>Confirmed Indian Cases</h4>";
//       cell2.innerHTML = stats.statewise[0].confirmed; 
    

//     //active cases
//       var row2 = table.insertRow();
//       var cell1 = row2.insertCell(0);
//       var cell2 = row2.insertCell(1);
//       cell2.classList.add("bg-warning");

//       cell1.innerHTML = "<h4>Active</h4>";
//       cell2.innerHTML =  stats.statewise[0].active;
    
//     //recovered
//       var row2 = table.insertRow();
//       var cell1 = row2.insertCell(0);
//       var cell2 = row2.insertCell(1);
//       cell2.classList.add("bg-success");

//       cell1.innerHTML = "<h4>Recovered</h4>";
//       cell2.innerHTML =  stats.statewise[0].recovered; 

//     //Deaths
//       var row2 = table.insertRow();
//       var cell1 = row2.insertCell(0);
//       var cell2 = row2.insertCell(1);
//       cell2.classList.add("bg-danger");

//       cell1.innerHTML = "<h4>Deaths</h4>";
//       cell2.innerHTML = stats.statewise[0].deaths;
           

//     });  
// }

// overView();

// function refreshPage()
// {
// setInterval(function(){
//    window.location.reload(1);
// }, 30000);
// }

// refreshPage();


function getStats(){
  var value;

  
  fetch('https://api.covid19india.org/data.json')
  .then((response) => {
    return response.json();
  })
  .then((stats) => {
    //console.log(stats.data);
    var sorted = _.orderBy(stats.statewise, 'parseInt(confirmed)', 'desc');
    var table = document.getElementById("dev-table").getElementsByTagName('tbody')[0];
    for (var i=0; i<sorted.length; i++){
        var dt = stats.statewise[i].state;
        console.log(dt);

        //testing
        var row = table.insertRow(table.rows.length - 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = sorted[i].state;
        cell2.innerHTML = sorted[i].confirmed
        cell2.classList.add("bg-info");

        cell3.innerHTML = sorted[i].active
        cell3.classList.add("bg-warning");

        cell4.innerHTML = sorted[i].recovered;
        cell4.classList.add("bg-success");

        cell5.innerHTML = sorted[i].deaths;
        cell5.classList.add("bg-danger");

    }

  });  

}

function overView(){
  
    fetch('https://api.covid19india.org/data.json')
    .then((response) => {
      return response.json();
    })
    .then((stats) => {
      //console.log(stats.data.summary);

     var p_confirm = document.getElementById("p-confirm");
     p_confirm.innerHTML = stats.statewise[0].confirmed;

     var p_active = document.getElementById("p-active");
     p_active.innerHTML = stats.statewise[0].active;

     var p_discharged = document.getElementById("p-discharged");
     p_discharged.innerHTML = stats.statewise[0].recovered;

     var p_deceased = document.getElementById("p-deceased");
     p_deceased.innerHTML = stats.statewise[0].deaths;
           
    });  
}

overView();
