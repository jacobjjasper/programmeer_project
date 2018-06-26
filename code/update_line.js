var click = 0;

function make_click_line(input){

  click = 1;
  // d3v4.selectAll(".line_click")
  //   .remove();
  // d3v4.selectAll(".dot_click")
  //     .remove();

  line_data = [];
  for (let i =0; i < all_data.length; i ++) {
    if (all_data[i]["Entity"] == input || all_data[i]["Code"] == input){
      line_data.push(all_data[i]);
    };
  };

  // Add the valueline path.
  svg_line.append("path")
      .attr("class", "line_click")
      .attr("d", line_function(line_data))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "white")
      .style("fill-opacity", 0);

// <circle>
  var dot_click =  svg_line.selectAll(".dot_click")
                       .data(line_data)
                       .enter();

  //make scatterplot datapoints
   dot_click.append("circle")
   .attr("class", "dot_click")

   //specifying the circle attributes of cx, cy, r
   .attr("cx", function(d) {
      return x_scale(d["Year"]);
    })
    .attr("cy", function(d) {
        return y_scale(d["Share smokers"]);
    })
    .attr("r", 3)
    //defining the style of each datapoint
    .style("fill", "black")
    .on("mouseover", tool_tip_line.show)
    .on("mouseout", tool_tip_line.hide);

};

function update_click_line(input){

  line_data = [];
  for (let i =0; i < all_data.length; i ++) {
    if (all_data[i]["Entity"] == input || all_data[i]["Code"] == input){
      line_data.push(all_data[i]);
    };
  };

  var line = svg_line.selectAll(".line_click")
        .data(line_data);

  line
  .transition()
  .duration(1000)
  .attr("d", line_function(line_data));

  var dots = svg_line.selectAll(".dot_click")
        .data(line_data);



        dots
        .transition()
        .duration(1000)
        .attr("cy", function(d) {
          return y_scale(d["Share smokers"]);
        });

        dots
        .on("mouseover", tool_tip_line.show)
        .on("mouseout", tool_tip_line.hide);
};
