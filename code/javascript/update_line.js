/**
 * This script updates a linegraph which data is selected by scatterplot or
 * a datamap
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/

// keep track if there was already 1 click
var click = 0;

// function for making line for the first click the linegraph
function make_click_line(input){

  // assign 1 if there was a click
  click = 1;

  // select right data and push to array
  line_data = [];
  for (let i =0; i < all_data.length; i ++) {
    if (all_data[i]["Entity"] == input || all_data[i]["Code"] == input){
      line_data.push(all_data[i]);
    };
  };

  // make the valueline path
  svg_line.append("path")
      .attr("class", "line_click")
      .attr("d", line_function(line_data))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "white")
      .style("fill-opacity", 0);

// make datapoints
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

// function for updating clicked line
function update_click_line(input){

  // select data
  line_data = [];
  for (let i =0; i < all_data.length; i ++) {
    if (all_data[i]["Entity"] == input || all_data[i]["Code"] == input){
      line_data.push(all_data[i]);
    };
  };

  // select line/path
  var line = svg_line.selectAll(".line_click")
        .data(line_data);

  // update line
  line
  .transition()
  .duration(1000)
  .attr("d", line_function(line_data));

  // select datapoints
  var dots = svg_line.selectAll(".dot_click")
        .data(line_data);


  // update datapoints cy   
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
