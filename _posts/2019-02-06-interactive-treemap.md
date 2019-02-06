---
layout: post
title: "Interactive Treemap"
date: 2019-02-06
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



<body>
	<div class="chart-title">Interactive Tree Map</div>
	<svg class="chart"></svg>
	<script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>
            <script src="https://ajander.github.io/js/treemap.js"></script>

</body>