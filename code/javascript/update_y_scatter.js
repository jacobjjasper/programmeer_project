/**
 * This script updates a scatterplot which data is selected by html button which
 * selects the y axis variable
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/

// function for updating the y axis
function update_y_scatter(variable){

  // check which variable is selected
  if (variable == 0){

    // make log y scale
    y_scale_scatter = d3v4.scaleLog()
                  .domain([min_deaths, max_deaths])
                  .range([h_scatter, 0]);

    //creating variable for y axis
    y_axis_scatter = d3v4.axisLeft()
                        .scale(y_scale_scatter);

    // update y axis
    svg_scatter.select(".y_axis")
              .transition()
              .duration(1500)
              .call(y_axis_scatter);

    // update datapoints cy
    svg_scatter.selectAll(".dot_scatter")
              .transition()
              .duration(1500)
              .attr("cy", function(d) {
                return y_scale_scatter(d["Deaths"])
              })

    current_variable = 0;
    }

    // check which variable is selected
    else if (variable == 1){
      y_scale_scatter = d3v4.scaleLinear()
                  .domain([0, max_cancer])
                  .range([h_scatter, 0]);

      //creating variable for y axis
      y_axis_scatter = d3v4.axisLeft()
                          .scale(y_scale_scatter);

      svg_scatter.select(".y_axis")
                .transition()
                .duration(1500)
                .call(y_axis_scatter);

      svg_scatter.select("#y_label")
                  .transition()
                  .text("Share of cancer deaths attributed to tobacco (%)")

      svg_scatter.selectAll(".dot_scatter")
                .transition()
                .duration(1500)
                .attr("cy", function(d) {
                  return y_scale_scatter(d["Cancer"])
                });


      current_variable = 1;
  };
};
