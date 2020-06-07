// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((aliensalert) => {
  var row = tbody.append("tr");
  Object.entries(aliensalert).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");

  var inputElement2 = d3.select("#city");

  var inputElement3 = d3.select("#state");

  var inputElement4 = d3.select("#country");

  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");

  var inputValue2 = inputElement2.property("value");

  var inputValue3 = inputElement3.property("value");

  var inputValue4 = inputElement4.property("value");

  tbody.html("");
    

  console.log(inputValue1, inputValue2, inputValue3, inputValue4);

  var filteredData = tableData.filter(tableData => 
    {if (inputValue1) {
      tableData.datetime === inputValue1
    } && if (inputValue2) {
      tableData.city === inputValue2
    } && if (inputValue3) {
      tableData.state === inputValue3
    } && if (inputValue4) {
      tableData.country === inputValue4
    }
    });

  console.log(filteredData);

  filteredData.forEach((aliensalert) => {
    var row = tbody.append("tr");
    Object.entries(aliensalert).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


