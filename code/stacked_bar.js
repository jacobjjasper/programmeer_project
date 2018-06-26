// function makeScatter(valueButton){
d3v4.json("JSON_data/netherlands_smoking.json", function(data){

  //width and height
  var w = 1100;
  var h = 600;
  var margin = { top: 20, right: 100, bottom: 40, left: 150};
  var bars = data.length;
  var bar_padding = 2;
  var bar_w = ((w - bar_padding * bars) / bars);


  svg = d3v4.select("#stacked_bar")
            .append("svg")
            .attr("class", "svg")
            .attr("id", "bar_svg")
            .attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


                // set the ranges
    var x_scale = d3v4.scaleBand()
              .range([0, w])
              .padding(0.1);

    var y_scale = d3v4.scaleLinear()
              .range([h, 0]);

        // append the rectangles for the bar chart
    svg.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x_scale(d["Entity"]); })
        .attr("width", bar_w)
        .attr("y", function(d) { return y_scale(d["Share"]); })
        .attr("height", function(d) { return h - y_scale(d["Share"]); })
        .style("fill", "steelblue");


  // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + h + ")")
        .call(d3v4.axisBottom(x_scale));

      // add the y Axis
    svg.append("g")
        .call(d3v4.axisLeft(y_scale));

  //creating variable for x axis
  var x_axis = d3v4.axisBottom()
                .scale(x_scale)
                .tickFormat(d3v4.format(1));

  });
