// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
console.log(data);

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((aliensalert) => {
  var row = tbody.append("tr");
  Object.entries(aliensalert).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
