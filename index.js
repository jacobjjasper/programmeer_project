window.onload = function() {

  d3.queue()
  .awaitAll(doFunction);

function doFunction(error, response) {
  if (error) throw error;

  d3.select("1990").on("click", function() {
    d3.selectAll(".scattersvg").remove();
    d3.select("#scatter").transition(make_scatter(0))
});
  };
};
