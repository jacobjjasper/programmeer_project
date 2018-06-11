/**
* This script loads a local .json files of the consumption cigarets per smoker,
* number of deaths of smoking and the share of cancer deaths attributed to
* smoking.
*
* Programming project
*
* Jacob Jasper (10650385)
*/


d3.queue()
.defer(d3.request, "JSON_data/consumption_cigarets_smokers.json")
.defer(d3.request, "JSON_data/deaths_smoking.json")
.defer(d3.request, "JSON_data/share_cancer_deaths_tobacco.json")
.awaitAll(load_scatter);

function doFunction(error, response) {
if (error) throw error;

//store parsed JSON in variable
var consumption = JSON.parse(response[0].responseText);
var deaths = JSON.parse(response[1].responseText);
var cancer = JSON.parse(response[2].responseText);


//update graph between 2015 and 2016
d3.select("#data_2015 button").on("click", function() {
  d3.select("svg").remove();
  d3.select("body").transition(make_scatter(data_2015))
});
d3.select("#data_2016 button").on("click", function() {
  d3.select("svg").remove();
  d3.select("body").transition(make_scatter(data_2016))
});

};
};

d3.queue()
.defer(d3.request, consumption)
// .defer(d3.request, "JSON_data/deaths_smoking.json")
// .defer(d3.request, "JSON_data/share_cancer_deaths_tobacco.json")
.awaitAll(load_scatter);

function load_scatter (error, response) {
  if (error) throw error;

  console.log()
}
