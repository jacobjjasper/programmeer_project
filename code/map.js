d3.json("JSON_data/share_smokers_everyday.json", function(data){
  // var year_i;
  //
  // for (let i =1980; i < 2011; i ++) {
  //   console.log(year_i);
  //   for (let i =0; j < data.length; i ++) {
  //     if (data[j]["Year"] = i)
  //
  //   };
  // };
  decimal = d3.format(",.1f");

  var dataset = {};
  var only_values = data.map(function(obj){ return obj["Share smokers"]; });
  var min_value = Math.min.apply(null, only_values);
  var max_value = Math.max.apply(null, only_values);
  var palette_scale = d3.scale.linear()
                              .domain([0,max_value])
                              .range(["#ffeda0","#f03b20"]);


  data.forEach(function(item){ //
     // item example value ["USA", 70]
     var iso = item["Code"],
             value = item["Share smokers"];
     dataset[iso] = { share: value, fillColor: palette_scale(value) };
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
                '<br>Share: <strong>', decimal(data.share), '%</strong>',
                '</div>'].join('');
        }
      }
  });
});
