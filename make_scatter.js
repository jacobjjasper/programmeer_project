/**
 * This script loads a local .json files of the consumption cigarets per smoker,
 * number of deaths of smoking and the share of cancer deaths attributed to
 * smoking.
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/

var allData;

// d3.json("JSON_data/scatter_data.json", function(data){
// allData = data;
// });

// function makeScatter(valueButton){
d3.json("JSON_data/scatter_data.json", function(data){
  valueButton = 0;
  allData = data;

  //width and height
  var w = 400;
  var h = 300;
  var margin = { top: 100, right: 150, bottom: 100, left: 100};

  //create SVG element
  var svg = d3.select("#scatter")
            .append("svg")
            .attr("class", "scattersvg")
            .attr("width", (w + margin.left + margin.right))
            .attr("height", (h + margin.top + margin.bottom))
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // creating tip box to show data
  var tool_tip = d3.tip()
              .attr('class', 'd3-tip')
              .offset([-20, 0])
              .html(function(d) {
                console.log(d);
                return  "<strong>Country:</strong> <strong>" + d["Entity"]
            + "</strong>" + "<br>" + "Daily consumption cigarets per smoker: " + d["Cigarets"] + "<br>" +
        "Deaths smoking: " + d["Deaths"] + "<br>" + "Share of cancer deaths attributed to tobacco (%):"
        + d["Cancer"]})
              .style("background-color", "white");

var consumption = [];
var deaths = [];
var minCancer = 0;
var maxCancer = 100;

  for (let i =0; i < 188; i ++) {
    consumption.push(Number(allData[valueButton][i]["Cigarets"]));
    deaths.push(Number(allData[valueButton][i]["Deaths"]));
  };
  console.log(typeof(deaths));
  console.log(Math.min(...deaths));
  console.log(Math.max(...consumption));

  //call tip box
  svg.call(tool_tip);

  //creating scale for 2015
  var x_scale = d3.scaleLinear()
                  .domain([Math.min(...consumption), Math.max(...consumption)])
                  .range([0, w]);

  var y_scale = d3.scaleLinear()
                  .domain([Math.min(...deaths), Math.max(...deaths)])
                  .range([h, 0]);

  var r_scale = d3.scaleLinear()
                  .domain([minCancer, maxCancer])
                  .range([4, 20]);

  //creating variable for x axis
  var x_axis = d3.axisBottom()
                .scale(x_scale);


  //append x axis to canvas and class
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h) + ")")
    .call(x_axis);

    //append label for x axis
    svg.append("text")
      .attr("class", "label")
      .attr("transform", "translate(0," + (h) + ")")
      .attr("x", w)
      .attr("y", 40)
      .style("text-anchor", "end")
      .text("Number of cigarets consumed per smoker");

  //creating variable for y axis
  var y_axis = d3.axisLeft()
                .scale(y_scale);


  //append y axis to canvas and class
  svg.append("g")
    .attr("class", "y axis")
    .call(y_axis);

    //append label for y axis
    svg.append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -20)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of deaths caused by tobacco");



  //make a circle for each data point
  var dot =  svg.selectAll("circle")
               .data(allData[valueButton])
               .enter();

    //make scatterplot datapoints
     dot.append("circle")
     .attr("class", "dot")


     //specifying the circle attributes of cx, cy, r
     .attr("cx", function(d) {
        return x_scale(d["Cigarets"]);
      })
      .attr("cy", function(d) {
        console.log(typeof(Number(d["Deats"])));
        return y_scale(Number(d["Deaths"]));
      })
      .attr("r", function(d) {
        return r_scale(Number(d["Cancer"]));
      })

      //defining the style of each datapoint
      .style("fill", "red")
      .style("stroke-width", 1)
      .style("stroke", "black")
      .on("mouseover", tool_tip.show)
      .on("mouseout", tool_tip.hide)

    //append title to scatterplot
    svg.append("text")
      .attr("class", "scatter_title")
      .attr("x", -400)
      .attr("y", -50)
      .text("Scatterplot of the number of cigarets consumed per smoker, number \
       of deaths from tobacco/ share of cancer deaths attributed to tobacco of \
       the world")
      .style("text-anchor", "start")
      .style("text-decoration", "underline")
      .style("font-weight", "bold");
});
