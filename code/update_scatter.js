function update_scatter(value_button){

  // d3v4.selectAll(".dot_scatter").remove();
  console.log('DATASET YEAR:', value_button);

  var dots = svg_scatter.selectAll(".dot_scatter")
        .data(all_data_scatter[value_button]);



        dots
        .transition()
        .duration(1000)
        .attr("cx", function(d, i) {
          return x_scale_scatter(d["Cigarets"]);
        })
        .attr("cy", function(d) {
          if (current_variable == 0) {
            return y_scale_scatter(d["Deaths"])
          }
            else if (current_variable == 1) {
              return y_scale_scatter(d["Cancer"])
            }
        })
        .attr("r", 3)
        .style("fill", "red")
        .style("stroke-width", 1)
        .style("stroke", "black")

        dots
        .on("mouseover", tool_tip.show)
        .on("mouseout", tool_tip.hide)
        .on("click", function(d){
          d3v4.selectAll(".line_click")
            .remove();
          d3v4.selectAll(".dot_click")
              .remove();

          return update_line(d["Entity"]);
        });
};
