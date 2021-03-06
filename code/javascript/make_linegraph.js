/**
 * This script loads a local .json file of the share of people who smoke
 * everyday in the Netherlands and makes a linegraph
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/



// make general variables for use in update_line file
var all_data = [];
var x_scale;
var y_scale;
var tool_tip_line;
var line_function;
var svg_line;

// louading data
d3v4.json("data/JSON_data/share_smokers_everyday.json", function(data){

  // make variable for decimal place
  decimal = d3.format(",.2f");

  //assign data to general variable
  all_data = data;

  // make empty array for Netherlands
  var dutch_data = [];

  // make empty array for shares
  var share = [];

  // iterate to fill arrays with right data
  for (let i =0; i < all_data.length; i ++) {
    if (data[i]["Entity"] == "Netherlands"){
      dutch_data.push(data[i]);
    };
    share.push(data[i]["Share smokers"]);
  };

    //width and height
    var w = 1050;
    var h = 260;
    var margin = { top: 20, right: 100, bottom: 40, left: 50};

    // make and append svg to right class
    svg_line = d3v4.select("#linegraph")
              .append("svg")
              .attr("class", "svg_line")
              .attr("id", "line_svg")
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

    // make ampty array for the years and iterate to append data
    years = [];

    for (let i =0; i < dutch_data.length; i ++) {
      years.push(dutch_data[i]["Year"]);

    };

    //creating x and y scale
    x_scale = d3v4.scaleLinear()
                  .domain([Math.min(...years), Math.max(...years)])
                  .range([0, w]);

    y_scale = d3v4.scaleLinear()
                  .domain([0, Math.max(...share)])
                  .range([h, 0]);

    //creating variable for x axis
    var x_axis = d3v4.axisBottom()
                  .scale(x_scale)
                  .tickFormat(d3v4.format(1));

    // make sure the x axis has the right labels and ticks
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
                  .scale(y_scale);


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

    // make function for creating path for line
    line_function = d3v4.line()
                        .x(function(d) {
                            return x_scale(d["Year"]);
                          })
                        .y(function(d) {
                            return y_scale(d["Share smokers"])
                          });

    // Add the valueline path.
    svg_line.append("path")
        .attr("class", "line")
        .attr("d", line_function(dutch_data))
        .attr("stroke", "steelblue")
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
        return x_scale(d["Year"]);
      })
      .attr("cy", function(d) {
          return y_scale(d["Share smokers"]);
      })
      .attr("r", 3)
      //defining the style of each datapoint
      .style("fill", "black")
      .on("mouseover", tool_tip_line.show)
      .on("mouseout", tool_tip_line.hide)

    });
