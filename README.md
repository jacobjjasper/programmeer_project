# Project proposal


## Student information
- Name: Jacob Jasper
- Student number: 10650385
- Subject: Programming project

## Problem statement

 With the internet the information about the negative effects of smoking are
 easy to find. Even with all this information people still smoke. But how
 much people are actually still smoking compared to the past? Is the total amount
 of smokers (and deaths by smoking) reducing? (target audience: 12-30 years)

## Solution

Let people visualize the horrible effects of smoking in the world so they won't
start smoking or quit smoking and show the effects of smoking policies on number
of smokers in the Netherlands.

![](doc/proposal1.jpeg)

- There is a world map which have a heatmap of the variable of de number of
  cigarets consumed per smoker per day. There is also a slider
  to slide between years, so that the heatmap will change over time (1990-2012).
- The scatter will be next to the heatmap of the daily # of sigarets smoked per
  smoker on the x axis and with a button you can change between the # of deaths
  by smoking and the % cancer deaths attributed to tobacco on the y axis. The years
  you can choose in a drop down menu (1990, 1995, 2000, 2005, 2006, 2010, 2016).
- If you click a country of the world heatmap or on the scatterplot
  you will get a line graph of that particular country and also a line of the
  Netherlands for comparison from 1980-2012.
- You have a stacked bar chart from the Netherlands of the years 2014-2017 of the
  number of smokers. The stacks are age groups.

## Prerequisites


### Datasources:
  - https://ourworldindata.org/smoking#smoking-and-cancer
  - https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83021NED/table?dl=856C

### External components
- D3-tip
- D3
- Bootstrap

### Similar
At the website of my datasource there are a lot of visualisations. I think
that I will implement the world graph and scatter the same way. The grouped bar
graph will be very basic, so the content is clear for every user.

### Hardest parts:
I have so much data, how do I process this in an ordered and
structured way and link them to each other. Are the datasets exactly the same order
of countries or do I have to order them by myself? I think that is the hardest part.
