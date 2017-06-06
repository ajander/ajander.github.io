// Resources:
// http://www.oecd.org/gender/data/percentageoftertiaryqualificationsawardedtowomenbyfieldofeducation.htm (for data)
// https://bl.ocks.org/rcrocker13/66a11b84ff86edc61ffb61b3d99cf02a (for sorting)
// https://bl.ocks.org/d3noob/c506ac45617cf9ed39337f99f8511218 (for gridlines)
// https://bost.ocks.org/mike/bar/3/ (for everything else)

var margin = {top: 20, right: 30, bottom: 100, left: 30},
	width = 960 - margin.right - margin.left,
 	height = 500 - margin.top - margin.bottom;

// append g means elements added to chart will inherit margins
var chart = d3.select('.chart')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
	y = d3.scaleLinear().range([height, 0]);

var g = chart.append('g')
  	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// tooltips
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

function mousemove() {
  div.style("left", (d3.event.pageX + 10) + "px")
      .style("top", (d3.event.pageY - 38) + "px");
}

function mouseout() {
  div.style("opacity", 0);
}

d3.csv('https://ajander.github.io/data/data-CS-degrees.csv', row, function(error, data) {

	data.sort(function(a, b) { return b.Percent - a.Percent; });	// sort descending

	x.domain(data.map(function(d) { return d.Country; }));
	y.domain([0, d3.max(data, function(d) { return d.Percent; })]);

	var xAxis = d3.axisBottom(x).tickSize(0),
		yAxis = d3.axisLeft(y).ticks(5, '%');

	// add the Y gridlines
  	g.append("g")			
		.attr("class", "grid")
		.call(d3.axisLeft(y)
		  .tickSize(-width)
		  .tickFormat("")
		)

	// add X axis
	g.append('g')
      .attr("class", "axis")
      .attr("transform", "translate(0," + (height + 2) + ")")
      .call(xAxis)
      .selectAll('text')
      	.attr("transform", "rotate(-90)")
      	.attr('y', -x.bandwidth()/4);

    // add Y axis
    g.append("g")
      .attr("class", "axis")
      .call(yAxis);

	function customYAxis(g) {
		g.call(yAxis);
		g.select(".domain").remove();
		g.selectAll(".tick line").attr("stroke", "#777").attr("stroke-dasharray", "2,2");
		g.selectAll(".tick text").attr("x", 4).attr("dy", -4);
	}

	var bar = g.selectAll('.bar')
		.data(data)
	  .enter().append('g')
	  	.attr('class', 'bar')
	  	.on("mouseover", function(d, i) {
		  	div.style("opacity", 1)
		  		.html('<strong><span style="font-size:11px">' + d.Country + 
		  			"</strong></span><br/>Women earned <strong><font color=#ff9900>"  
		  			+ Math.round(100*d.Percent) + '%</strong></font> of CS degrees');
		})
	    .on("mousemove", mousemove)
	    .on("mouseout", mouseout);

	bar.append('rect')
	  	.attr('height', function(d) { return height - y(d.Percent); })
	 	.attr('width', x.bandwidth())
	 	.attr('x', function(d) { return x(d.Country); })
	 	.attr('y', function(d) { return y(d.Percent); });

	bar.append('text')
	  	.attr('x', function(d) { return x(d.Country) + x.bandwidth(); })
	 	.attr('y', function(d) { return y(d.Percent); })
	 	.attr('dy', '1em')	
	 	.text(function(d) { return String(Math.round(100*d.Percent)) + '%'; });

	// add chart title
	chart.append("text")
		.attr('class', 'caption')
        .attr("x", margin.left)             
        .attr("y", margin.top + height)
        .style('color', 'black')
        .style("font-size", "10px") 
        .text("This is my caption");

})

// row conversion function
function row(d) {
	d.Percent = Math.round(d.Percent)/100; 
	return d;
}