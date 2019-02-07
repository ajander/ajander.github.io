---
layout: post
title: "Computer Science Degrees Awarded to Women (d3.js)"
date: 2017-06-05
---

<head>
<style>

	div.tooltip {	
    position: absolute;			
    text-align: center;			
    width: 80px;					
    height: 45px;					
    padding: 6px;				
    font-size: 10px;
    font-family: Arial;
    color: black;
    font-weight: normal;
    background: white;
    border: 1px solid #c0c0c0;
    box-shadow: 0px 2px 2px #888888;
    pointer-events: none;			
}

</style>
</head>

Sources:
* [Sorting data](https://bl.ocks.org/rcrocker13/66a11b84ff86edc61ffb61b3d99cf02a)
* [Gridlines](https://bl.ocks.org/d3noob/c506ac45617cf9ed39337f99f8511218)
* [Just about everything else](https://bost.ocks.org/mike/bar/3/)

<body>
	<div class="chart-title">Percent of Tertiary Degrees in Computer Science Awarded to Women, By Country (2012)</div>
	<svg class="chart"></svg>
	<div class="caption">OECD 2012: <a href="http://www.oecd.org/gender/data/education/">
	http://www.oecd.org/gender/data/education/</a></div>
	<script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>
	<script src="https://ajander.github.io/js/2017-06-05-vertical-bar-chart-with-axes.js"></script>

</body>