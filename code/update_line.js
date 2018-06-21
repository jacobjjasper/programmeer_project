function update_line(input){

  d3v4.selectAll(".line_click")
    .remove();
  d3v4.selectAll(".dot_click")
      .remove();
      
  line_data = [];
  for (let i =0; i < all_data.length; i ++) {
    if (all_data[i]["Entity"] == input || all_data[i]["Code"] == input){
      line_data.push(all_data[i]);
    };
  };

  // Add the valueline path.
  svg.append("path")
      .attr("class", "line_click")
      .attr("d", line_function(line_data))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "white")
      .style("fill-opacity", 0);

// <circle>
  var dot_click =  svg.selectAll(".dot_click")
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
    .on("mouseover", tool_tip.show)
    .on("mouseout", tool_tip.hide)
};
