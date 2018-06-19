/**
 * This script loads a local .json file of the share of people who smoke
 * everyday
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/




var all_data_line = [];
var x_scale_line;
var y_scale_line;
var tool_tip_line;
var line_function;
var svg_line;

  // function makeScatter(valueButton){
  d3v4.json("JSON_data/share_smokers_everyday.json", function(data){

  decimal = d3v4.format(",.2f");
  all_data_line = data;
  var dutch_data = [];
  var share = [];

  for (let i =0; i < all_data_line.length; i ++) {
    if (data[i]["Entity"] == "Netherlands"){
      dutch_data.push(data[i]);
    };
    share.push(data[i]["Share smokers"]);
  };

    //width and height
    var w = 1100;
    var h = 260;
    var margin = { top: 20, right: 100, bottom: 40, left: 150};


    svg_line = d3v4.select("body")
              .append("svg_line")
              .attr("class", "svg_line")
              .attr("id", "line_svg_line")
              .attr("width", w + margin.left + margin.right)
              .attr("height", h + margin.top + margin.bottom)
              .append("g")
              .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    // creating tip box to show data
    tool_tip_line = d3v4.tip()
                  .attr('class', 'line-tip')
                  .offset([-20, 0])

                  .html(function(d) {
                    console.log(d);
                    return  "<strong>" + d["Entity"]
                    + "</strong>" + "<br>" + "Year: " + d["Year"] + "<br>" +
                    "Share of people who smoke everyday: " + decimal(d["Share smokers"]) +
                    "%"})
                  .style("background-color", "white");


                //call tip box
                svg_line.call(tool_tip_line);

    years = [];

    for (let i =0; i < dutch_data.length; i ++) {
      years.push(dutch_data[i]["Year"]);

    };

    //creating scale for 2015
    x_scale_line = d3v4.scaleLinear()
                  .domain([Math.min(...years), Math.max(...years)])
                  .range([0, w]);

    y_scale_line = d3v4.scaleLinear()
                  .domain([0, Math.max(...share)])
                  .range([h, 0]);

    //creating variable for x axis
    var x_axis = d3v4.axisBottom()
                  .scale(x_scale_line)
                  .tickFormat(d3v4.format(1));


    x_axis.tickValues(d3v4.range(Math.min(...years), Math.max(...years)+1, 1));

    //append x axis to canvas and class
    svg_line.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (h) + ")")
      .call(x_axis);

      //append label for x axis
      svg_line.append("text")
        .attr("class", "label")
        .attr("transform", "translate(0," + (h) + ")")
        .attr("x", w)
        .attr("y", 40)
        .style("text-anchor", "end")
        .text("Year");

    //creating variable for y axis
    var y_axis = d3v4.axisLeft()
                  .scale(y_scale_line);


    //append y axis to canvas and class
    svg_line.append("g")
      .attr("class", "y axis")
      .call(y_axis);

    //append label for y axis
    svg_line.append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -50)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Share of people who smoke everyday (%)");

    line_function = d3v4.line()
                        .x(function(d) {
                            return x_scale_line(d["Year"]);
                          })
                        .y(function(d) {
                            return y_scale_line(d["Share smokers"])
                          });

    // Add the valueline path.
    svg_line.append("path")
        .attr("class", "line")
        .attr("d", line_function(dutch_data))
        .attr("stroke", "green")
        .attr("stroke-width", 2)
        .attr("fill", "white");

    //make a circle for each data point
    var dot =  svg_line.selectAll("circle")
               .data(dutch_data)
               .enter();

    //make scatterplot datapoints
     dot.append("circle")
     .attr("class", "dot_line")

     //specifying the circle attributes of cx, cy, r
     .attr("cx", function(d) {
        return x_scale_line(d["Year"]);
      })
      .attr("cy", function(d) {
          return y_scale_line(d["Share smokers"]);
      })
      .attr("r", 3)
      //defining the style of each datapoint
      .style("fill", "black")
      .on("mouseover", tool_tip_line.show)
      .on("mouseout", tool_tip_line.hide);

    });



function update_line(input){

  line_data = [];
  for (let i =0; i < all_data_line.length; i ++) {
    if (all_data_line[i]["Entity"] == input || all_data_line[i]["Code"] == input){
      line_data.push(all_data_line[i]);
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
      return x_scale_line(d["Year"]);
    })
    .attr("cy", function(d) {
        return y_scale_line(d["Share smokers"]);
    })
    .attr("r", 3)
    //defining the style of each datapoint
    .style("fill", "black")
    .on("mouseover", tool_tip_line.show)
    .on("mouseout", tool_tip_line.hide);
};
