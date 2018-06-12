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

  console.log(consumption);


};
