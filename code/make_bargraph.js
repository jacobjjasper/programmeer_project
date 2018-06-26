// function makeScatter(valueButton){
d3v4.json("JSON_data/netherlands_smoking.json", function(data){

  //width and height
  var w = 1050;
  var h = 600;
  var margin = { top: 20, right: 50, bottom: 40, left: 100};
  var bars = data.length;
  var bar_padding = 2;
  var bar_w = ((w - bar_padding * bars) / bars);

  svg_bar = d3v4.select("#bar")
            .append("svg")
            .attr("class", "svg_bar")
            .attr("id", "line_svg")
            .attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // creating tip box to show data
  tool_tip_bar = d3v4.tip()
                .attr('class', 'bar-tip')
                .offset([-20, 0])

                .html(function(d) {
                  console.log(d);
                  return  "<strong>" + "Share of people who smoke in The \
                  Netherlands: " + d["Share"] + "%" + "</strong>"});


    //call tip box
    svg_bar.call(tool_tip_bar);

    var min_bar = 0;
    var max_bar = 20;

      //creating scale for 2015
      x_scale = d3v4.scaleBand()
                    .rangeRound([0, w])
                    .padding(0.1);

      y_scale = d3v4.scaleLinear()
                    .domain([min_bar, max_bar])
                    .range([h, 0]);

      //creating variable for x axis
      var x_axis = d3v4.axisBottom()
                    .scale(x_scale);

      //append x axis to canvas and class
      svg_bar.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (h) + ")")
        .call(x_axis);

        //append label for x axis
        svg_bar.append("text")
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
      svg_bar.append("g")
        .attr("class", "y axis")
        .call(y_axis);

      //append label for y axis
      svg_bar.append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", -50)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Share of people who smoke everyday (%)");


      svg_bar.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", function(d) {
          return y_scale(d["Share"]);
        })
      .attr("x", function(d, i) {
        return (3 + i * (bar_w + bar_padding))
      })
      .attr("width", bar_w)
    	.attr("height", function(d, i) {
        return h - y_scale(d["Share"])
      })
      .on("mouseover", tool_tip_bar.show)
      .on("mouseout", tool_tip_bar.hide)
      .style("fill", "lightsteelblue")
      .style("border", "black");

    // svg.selectAll("text").data(data).enter()
    //   .append("text")
    //   .text(function(d, i) { return d.id; })
    //   .attr("y", function(d, i) { return 420; })
    //   .attr("x", function(d, i) { return x(i) + x.bandwidth()/2; })
    //   .attr("font-size", 16)
    // 	.style("text-anchor", "center")
    //   .attr("font-family", "monospace")

  });
