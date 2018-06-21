function update_y_scatter(variable){
  if (variable == 0){
    console.log(max_deaths);
    y_scale_scatter = d3v4.scaleLog()
                  .domain([min_deaths, max_deaths])
                  .range([h_scatter, 0]);

    //creating variable for y axis
    y_axis_scatter = d3v4.axisLeft()
                        .scale(y_scale_scatter);

    svg_scatter.select(".y_axis")
              .transition()
              .duration(1500)
              .call(y_axis_scatter);

    svg_scatter.selectAll(".dot_scatter")
              .transition()
              .duration(1500)
              .attr("cy", function(d) {
                return y_scale_scatter(d["Deaths"])
              })

    current_variable = 0;
    }
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
                  .text("Share of cancer death attributed to tobacco (%)")

      svg_scatter.selectAll(".dot_scatter")
                .transition()
                .duration(1500)
                .attr("cy", function(d) {
                  return y_scale_scatter(d["Cancer"])
                })

      current_variable = 1;
  };
  console.log(current_variable);
};
