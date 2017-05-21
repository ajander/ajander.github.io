// define input data
var data = [4, 8, 15, 16, 23, 42];

// Part I: Using just regular html elements

var x = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, 420]);

d3.select('#example')
  .selectAll('div')
    .data(data)
  .enter().append('div')
  	.style('width', function(d) { return x(d) + 'px'; })
  	.text(function(d) { return d; });