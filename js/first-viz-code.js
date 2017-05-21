// // define input data
// var data = [4, 8, 15, 16, 23, 42];

// // Part I: Using just regular html elements

// var x = d3.scale.linear()
// 	.domain([0, d3.max(data)])
// 	.range([0, 420]);

// d3.select('#example')
//   .selectAll('div')
//     .data(data)
//   .enter().append('div')
//   	.style('width', function(d) { return x(d) + 'px'; })
//   	.text(function(d) { return d; });

var width = 420,
 	barHeight = 20;

var x = d3.scale.linear()
	.range([0, 420]);

var chart = d3.select('#example')
	.attr('width', width)

d3.tsv('https://ajander.github.io/data.tsv', type, function(error, data) {
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
