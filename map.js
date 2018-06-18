d3.json("JSON_data/share_smokers_everyday.json", function(data){

  decimal = d3.format(",.1f");

  var dataset = {};
  var onlyValues = data.map(function(obj){ return obj["Share smokers"]; });
  var minValue = Math.min.apply(null, onlyValues);
  var maxValue = Math.max.apply(null, onlyValues);

  var paletteScale = d3.scale.linear()
                              .domain([minValue,maxValue])
                              .range(["#EFEFFF","#02386F"]);


  data.forEach(function(item){ //
     // item example value ["USA", 70]
     var iso = item["Code"],
             value = item["Share smokers"];
     dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
 });


  var map = new Datamap({
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
                '<br>Share (%): <strong>', decimal(data.numberOfThings), '</strong>',
                '</div>'].join('');
        }
      }
  });
});
