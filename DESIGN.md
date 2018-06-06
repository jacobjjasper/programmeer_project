# Design document

## Student information
- Name: Jacob Jasper
- Student number: 10650385
- Subject: Programming project


##Data
My data comes from two websites:
- https://ourworldindata.org/smoking#smoking-and-cancer
- https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83021NED/table?dl=856C

They are all csv files, so I have to convert them into JSON files. I will put
data originating from "our world in data" each country into a JSON object.
Than I will put all the data objects into a list, so I have a list of JSON objects.
For the data originating from "cbs" I will make for each year (2014-2017) a
separate JSON object and also make a list from these objects. This is a good way
of structuring my data and accessing it.

## Descriptions of each of the components

### World heatmap
#### Description
This wil be a world heatmap. On this map the user can choose the country to
compare in the line graph with The Netherlands. I have to implement a D3 world map,
which is interactive (country brighten up if hoovering over country, implemented
with a D3-tooltip probably). Also have to Implement a color range for filling
up the countries, based on the daily sigarets consumed per smoker per year. This
property has to be linked to a HTML slider, so the user can control the year which
is displayed in the heatmap. I have to make an update function (update_heatmap)
to update the colors for the selected year. Also before you do this, I have to
make a function which makes the world map (make_worldmap).

#### Technical components
- heatmap wil be placed in a div
- D3 datamaps
- D3 tooltip
- HTML slider


### Line graph country
#### Description
This will be a line graph which compares the selected country (in the heatmap)
to The Netherlands by implementing two lines in the graph in different colors
and adjusting the country names to the lines by color. The user now can
distinguish the two countries and compare them with each other. For the line
graph I have to make the function make_linegraph for the user's first country
selection. On the x-axis the years 1980-2012 are displayed. On the y-axis the
number of people who smoke daily are displayed.
After this there has to be an update function for the user's
country selections after the first one. The user can select a year in the graph,
which links them to the scatterplot.

#### Technical components
- D3 line graph
- D3 tooltip


### Scatterplot
#### Description
This will be a scatterplot which links the daily number of sigarets smoked to a
chosen variable (HTML button switching the variable by user's choice: number of
deaths or % cancer deaths attributed to tobacco). The datapoints will consist out
of countries in a certain year. I need to make a make_scatter function with a
update_scatter function interacting with the user's choice.

#### Technical components
- D3 scatterplot
- HTML button
- D3 tooltip


### Stacked barchart
#### Description
This will be a stacked bar chart which displays the years 2014-2017 of The
Netherlands. This will contribute to the story that I want to show what the
reduction is in The Netherlands resulting of restrictions (2014: tobacco range
16-->18 and 2016: pictures on cigarette packages). The stacks will be divided by
age, so the user can see what the differences are between age groups. Will be
interactive with a tooltip.

#### Technical components
- D3 stacked barchart
- D3 tooltip


### Other functions
- Queue
- JSONify
