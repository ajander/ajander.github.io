var treemap = d3.select("#vis").append("svg")

            .chart("treemap")

              .value("size")
              .sortable("_DESC_")
              //.zoomable()
              .collapsible()
              //.duration()
              //.colors(['#FF0000', '#00FF00', '#0000FF'])
              ;

          treemap.draw(json);