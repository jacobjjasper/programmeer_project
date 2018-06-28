/**
 * This script updates a scatterplot which data is selected by html button which
 * selects the year
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/

// update function scatterplot year
function update_scatter(value_button){

  // select datapoints
  var dots = svg_scatter.selectAll(".dot_scatter")
        .data(all_data_scatter[value_button]);

        // update cy and cx of datapoints
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
        });

        // call right tooltip and check if there was a click already
        dots
        .on("mouseover", tool_tip_scatter.show)
        .on("mouseout", tool_tip_scatter.hide)
        .on("click", function(d){
          if (click == 0) {
            make_click_line(d["Entity"]);
          }
          else if (click == 1){
            update_click_line(d["Entity"])
          };
        });
};
