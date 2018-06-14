/**
 * This script loads a local .json file of the share of people who smoke
 * everyday
 *
 * Programming project
 *
 * Jacob Jasper (10650385)
**/


var allData = [];


// function makeScatter(valueButton){
d3.json("JSON_data/share_smokers_everyday.json", function(data){

  allData = data;
  var dutch_data = [];

  for (let i =0; i < allData.length; i ++) {
    if (data[i]["Entity"] == "Netherlands"){
      console.log(data[i]["Entity"]);
      dutch_data.push(data[i]);
    };
  };

  var svg = d3.select("body").append("svg")
              .attr("width", 1300)
              .attr("height", 300)

    var margin = {left:30, right:30, top: 10, bottom: 20}
    var width = svg.attr("width") - margin.left - margin.right;
    var height = svg.attr("height") - margin.bottom - margin.top;

    var parseTime = d3.timeParse("%Y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line
    var valueline = d3.line()
                      .x(function(d) { return x(d["Year"]); })
                      .y(function(d) { return y(d["Estimated prevalence (%)"]);
                      });

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");




});
