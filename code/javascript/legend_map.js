/**
 * source: http://bl.ocks.org/darrenjaworski/5397362
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/


d3v4.json("data/JSON_data/share_smokers_everyday.json", function(data){

  var w = 40, h = 400;

    var key = d3v4.select("#legendcontainer")
                  .append("svg").attr("width", w)
                  .attr("height", h);

    var legend = key.append("defs")
                    .append("svg:linearGradient")
                    .attr("id", "gradient")
                    .attr("x1", "100%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "100%")
                    .attr("spreadMethod", "pad");

    legend.append("stop")
          .attr("offset", "0%")
          .attr("stop-color", "#f03b20")
          .attr("stop-opacity", 1);

    legend.append("stop")
          .attr("offset", "100%")
          .attr("stop-color", "#ffeda0")
          .attr("stop-opacity", 1);

    key.append("rect")
        .attr("width", w - 20)
        .attr("height", h - 100)
        .style("fill", "url(#gradient)")
        .attr("transform", "translate(-25,61)");

    var y = d3v4.scaleLinear()
                .range([350, 50])
                .domain([min_value, max_value]);

    var y_axis = d3v4.axisLeft()
                    .scale(y);
    key.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(-25,10)")
        .call(y_axis).append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 30).attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("axis title");

});
