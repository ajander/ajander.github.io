var width = 420,
 	barHeight = 20;

var x = d3.scale.linear()
	.range([0, 420]);

var chart = d3.select('.chart')
	.attr('width', width)

d3.tsv('https://ajander.github.io/data/cereal-detailed.csv', type, function(error, data) {
	x.domain([0, d3.max(data, function(d) { return d.value; })]);

	chart.attr('height', barHeight * data.length);

	var bar = chart.selectAll('g')
		.data(data)
	  .enter().append('g')
	  	.attr('transform', function(d, i) { return 'translate(0,' + i * barHeight + ')'; });

	bar.append('rect')
	 	.attr('width', function(d) { return x(d.value); })
	 	.attr('height', barHeight - 1);

	bar.append('text')
	 	.attr('x', function(d) { return x(d.value) - 3; })		// x position of text
	 	.attr('y', barHeight / 2)						// y position of text, relative to g
	 	.attr('dy', '.35em')							// center the text vertically
	 	.text(function(d) { return d.value; });
})

function type(d) {
	d.value = +d.value;	// coerce to number type
	return d;
}


// var fileName = "https://ajander.github.io/data/cereal-detailed.csv";
// var nutritionFields = ["calories", "protein", "fat", "sodium", "fiber",
//                        "carbs", "sugars", "potassium", "vitamins"];

// d3.csv(fileName, function(error, data) {
//     var cerealMap = {};
//     data.forEach(function(d) {
//         var cereal = d.cereal;
//         cerealMap[cereal] = [];

//         // { cerealName: [ bar1Val, bar2Val, ... ] }
//         nutritionFields.forEach(function(field) {
//             cerealMap[cereal].push( +d[field] );
//         });
//     });
//     makeVis(cerealMap);
// });

// var makeVis = function(cerealMap) {
//     // Define dimensions of vis
//     var margin = { top: 30, right: 50, bottom: 30, left: 50 },
//         width  = 550 - margin.left - margin.right,
//         height = 250 - margin.top  - margin.bottom;

//     // Make x scale
//     var xScale = d3.scale.ordinal()
//         .domain(nutritionFields)
//         .rangeRoundBands([0, width], 0.1);

//     // Make y scale, the domain will be defined on bar update
//     var yScale = d3.scale.linear()
//         .range([height, 0]);

//     // Create canvas
//     var canvas = d3.select(".chart")
//       .append("svg")
//         .attr("width",  width  + margin.left + margin.right)
//         .attr("height", height + margin.top  + margin.bottom)
//       .append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     // Make x-axis and add to canvas
//     var xAxis = d3.svg.axis()
//         .scale(xScale)
//         .orient("bottom");

//     canvas.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(xAxis);

//     // Make y-axis and add to canvas
//     var yAxis = d3.svg.axis()
//         .scale(yScale)
//         .orient("left");

//     var yAxisHandleForUpdate = canvas.append("g")
//         .attr("class", "y axis")
//         .call(yAxis);

//     yAxisHandleForUpdate.append("text")
//         .attr("transform", "rotate(-90)")
//         .attr("y", 6)
//         .attr("dy", ".71em")
//         .style("text-anchor", "end")
//         .text("Value");

//     var updateBars = function(data) {
//         // First update the y-axis domain to match data
//         yScale.domain( d3.extent(data) );
//         yAxisHandleForUpdate.call(yAxis);

//         var bars = canvas.selectAll(".bar").data(data);

//         // Add bars for new data
//         bars.enter()
//           .append("rect")
//             .attr("class", "bar")
//             .attr("x", function(d,i) { return xScale( nutritionFields[i] ); })
//             .attr("width", xScale.rangeBand())
//             .attr("y", function(d,i) { return yScale(d); })
//             .attr("height", function(d,i) { return height - yScale(d); });

//         // Update old ones, already have x / width from before
//         bars
//             .transition().duration(250)
//             .attr("y", function(d,i) { return yScale(d); })
//             .attr("height", function(d,i) { return height - yScale(d); });

//         // Remove old ones
//         bars.exit().remove();
//     };

//     // Handler for dropdown value change
//     var dropdownChange = function() {
//         var newCereal = d3.select(this).property('value'),
//             newData   = cerealMap[newCereal];

//         updateBars(newData);
//     };

//     // Get names of cereals, for dropdown
//     var cereals = Object.keys(cerealMap).sort();

//     var dropdown = d3.select("#vis-container")
//         .insert("select", "svg")
//         .on("change", dropdownChange);

//     dropdown.selectAll("option")
//         .data(cereals)
//       .enter().append("option")
//         .attr("value", function (d) { return d; })
//         .text(function (d) {
//             return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
//         });

//     var initialData = cerealMap[ cereals[0] ];
//     updateBars(initialData);
// };