/**
 * This script loads a local .json files of the consumption cigarets per smoker,
 * number of deaths of smoking and the share of cancer deaths attributed to
 * smoking.
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/

var all_data_scatter = [];
var tool_tip_scatter;
var svg_scatter;
var x_scale_scatter;
var y_scale_scatter;

// function makeScatter(valueButton){
d3v4.json("JSON_data/scatter_data.json", function(data){

  decimal = d3v4.format(",.1f");
  value_button = 0;
  all_data_scatter = data;

  //width and height
  var w = 400;
  var h = 300;
  var margin = { top: 50, right: 150, bottom: 50, left: 100};

  //create svg_scatter element
  svg_scatter = d3v4.select("#scatter")
            .append("svg_scatter")
            .attr("class", "scattersvg_scatter")
            .attr("width", (w + margin.left + margin.right))
            .attr("height", (h + margin.top + margin.bottom))
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top +
            ")");

  // creating tip box to show data
  tool_tip_scatter = d3v4.tip()
              .attr('class', 'd3v4-tip')
              .offset([-20, 0])
              .html(function(d) {
                console.log(d);
                return  "<strong>Country:</strong> <strong>" + d["Entity"]
            + "</strong>" + "<br>" + "Daily consumption cigarets per smoker: "
            + decimal(d["Cigarets"]) + "<br>" + "Deaths smoking: " +
            decimal(d["Deaths"]) + "<br>" + "Share of cancer deaths attributed \
            to tobacco (%):"  + decimal(d["Cancer"])})
              .style("background-color", "white");

  //call tip box
  svg_scatter.call(tool_tip_scatter);

  var consumption = [];
  var deaths = [];
  var cancer = [];
  var min_cancer = 0;

  for (let i =0; i < all_data_scatter.length; i ++) {
    for (let j = 0; j < all_data_scatter[i].length; j ++){
      deaths.push(Number(all_data_scatter[i][j]["Deaths"]));
      consumption.push(Number(all_data_scatter[i][j]["Cigarets"]));
      cancer.push(Number(all_data_scatter[i][j]["Cancer"]));
    }
  };


  for (let i =0; i < all_data_scatter[value_button].length; i ++) {
    consumption.push(Number(all_data_scatter[value_button][i]["Cigarets"]));
    cancer.push(Number(all_data_scatter[value_button][i]["Cancer"]));

  };
  var max_cancer = Math.max(...cancer);

  //creating scale for 2015
  x_scale_scatter = d3v4.scaleLinear()
                .domain([Math.min(...consumption), Math.max(...consumption)])
                .range([0, w])
                .nice();

  y_scale_scatter = d3v4.scaleLog()
                .domain([Math.min(...deaths), Math.max(...deaths)])
                .range([h, 0]);

  //creating variable for x axis
  var x_axis = d3v4.axisBottom()
                .scale(x_scale_scatter);


  //append x axis to canvas and class
  svg_scatter.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h) + ")")
    .call(x_axis);

    //append label for x axis
    svg_scatter.append("text")
      .attr("class", "label")
      .attr("transform", "translate(0," + (h) + ")")
      .attr("x", w)
      .attr("y", 40)
      .style("text-anchor", "end")
      .text("Number of cigarets consumed per smoker");

  //creating variable for y axis
  var y_axis = d3v4.axisLeft()
                .scale(y_scale_scatter);


  //append y axis to canvas and class
  svg_scatter.append("g")
    .attr("class", "y axis")
    .call(y_axis);

    //append label for y axis
    svg_scatter.append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -70)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of deaths from tobacco smoking");



  //make a circle for each data point
  var dot =  svg_scatter.selectAll("circle")
               .data(all_data_scatter[value_button])
               .enter();

    //make scatterplot datapoints
     dot.append("circle")
     .attr("class", "dot_scatter")


     //specifying the circle attributes of cx, cy, r
     .attr("cx", function(d) {
        return x_scale_scatter(d["Cigarets"]);
      })
      .attr("cy", function(d) {
          return y_scale_scatter(d["Deaths"]);
      })
      .attr("r", 3)
      // function(d){
      //     return r_scale(d["Cancer"])
      // })
      //defining the style of each datapoint
      .style("fill", "red")
      .style("stroke-width", 1)
      .style("stroke", "black")
      .on("mouseover", tool_tip_scatter.show)
      .on("mouseout", tool_tip_scatter.hide)
      .on("click", function(d){
        d3v4.selectAll(".line_click")
          .remove();
        d3v4.selectAll(".dot_click")
            .remove();

        return update_line(d["Entity"]);
      });

    //append title to scatterplot
    svg_scatter.append("text")
      .attr("class", "scatter_title")
      .attr("x", -200)
      .attr("y", -50)
      .text("Scatterplot of the number of cigarets consumed per smoker, number \
       of deaths from tobacco/ share of cancer deaths attributed to tobacco of \
       the world")
      .style("text-anchor", "end")
      .style("text-decoration", "underline")
      .style("font-weight", "bold");
});

function update_scatter(value_button){

  // d3v4.selectAll(".dot_scatter").remove();
  console.log('UPDATE SCATTER:', value_button);

  var dots = svg_scatter.selectAll(".dot_scatter")
        .data(all_data_scatter[value_button])



        dots
        .transition()
        .duration(1000)
        .attr("cx", function(d, i) {
          return x_scale_scatter(d["Cigarets"]);
        })
        .attr("cy", function(d) {
          return y_scale_scatter(d["Deaths"])
        })
        .attr("r", 3)
        .style("fill", "red")
        .style("stroke-width", 1)
        .style("stroke", "black")

        dots
        .on("mouseover", tool_tip_scatter.show)
        .on("mouseout", tool_tip_scatter.hide)
        .on("click", function(d){
          d3v4.selectAll(".line_click")
            .remove();
          d3v4.selectAll(".dot_click")
              .remove();

          return update_line(d["Entity"]);
        });
};
