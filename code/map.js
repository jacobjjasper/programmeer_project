var year_data_map;
var years_map = {};
var dataset = {};
var palette_scale;
var map;
d3.json("JSON_data/share_smokers_everyday.json", function(data){



  for (let j = 1990; j < 2011; j++) {
    var year = [];
    for (let i = 0; i < data.length; i++) {
      if (j == data[i]["Year"]) {
        year.push(data[i]);
      };
    };
    years_map["" + j + ""] = year;
  };


  decimal = d3.format(",.1f");

  var only_values = data.map(function(obj){ return obj["Share smokers"]; });
  var min_value = Math.min.apply(null, only_values);
  var max_value = Math.max.apply(null, only_values);
  palette_scale = d3.scale.linear()
                              .domain([0,max_value])
                              .range(["#ffeda0","#f03b20"]);

  year_data_map = years_map[1990];
  year_data_map.forEach(function(item){ //
     // item example value ["USA", 70]
     var iso = item["Code"],
             value = item["Share smokers"];
     dataset[iso] = { share: value, fillColor: palette_scale(value) };
 });


  map = new Datamap({
    element: document.getElementById('containermap'),
    // countries don't listed in dataset will be painted with this color
    fills: { defaultFill: '#F5F5F5' },
    data: dataset,
    geographyConfig: {
        borderColor: '#DEDEDE',
        highlightBorderWidth: 2,
        // don't change color on mouse hover
        highlightFillColor: function(geo) {
            return geo['fillColor'] || '#F5F5F5';
        },
        // only change border
        highlightBorderColor: '#B7B7B7',
        // show desired information in tooltip
        popupTemplate: function(geo, data) {
            // don't show tooltip if country don't present in dataset
            if (!data) { return ; }
            // tooltip content
            return ['<div class="hoverinfo">',
                '<strong>', geo.properties.name, '</strong>',
                '<br>Share: <strong>', decimal(data.share), '%</strong>',
                '</div>'].join('');
        }
      },
      done: function(map) {
       map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
           update_line(geography.id);
       });
   }
  });
});

function map_data(year){

    document.getElementById("slider_status").innerHTML = year;
    year_data_map = years_map[year];

    year_data_map.forEach(function(item){ //
       // item example value ["USA", 70]
       var iso = item["Code"],
               value = item["Share smokers"];
       dataset[iso] = { share: value, fillColor: palette_scale(value) };
   });

   map.updateChoropleth(dataset);




}
