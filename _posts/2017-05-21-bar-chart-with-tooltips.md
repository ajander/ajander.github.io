---
layout: post
title: "Basic Bar Chart with Tooltips (d3.js)"
date: 2017-05-21
---

<head>
<style>

	div.tooltip {	
	    position: absolute;			
	    text-align: center;			
	    width: 80px;					
	    height: 40px;					
	    padding: 6px;				
	    font: 12px "Arial";		
	    background: white;
	    border: 1px solid #c0c0c0;
	    box-shadow: 0px 2px 2px #888888;
	    pointer-events: none;			
	}

</style>
</head>

Sources:
* Mike Bostock's [Absolute-Positioned Tooltip](https://bl.ocks.org/mbostock/1087001)
* d3noob's [Simple d3.js tooltips](http://bl.ocks.org/d3noob/a22c42db65eb00d4e369)

<body>
	<svg id="bar-chart"></svg>
	<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	<script src="https://ajander.github.io/js/2017-05-21-bar-chart-with-tooltips.js"></script>

</body>