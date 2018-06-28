#  This script processes data to use later on for a scatterplot.
#
#  Programming project
#
#  Jacob Jasper (10650385)
#



import json


# combine data for scatterplot
# make lists for years
data1990 = []
data1995 = []
data2000 = []
data2005 = []
data2006 = []
data2010 = []

# iterate over consumption csv and put objects in the right lists
with open('data/JSON_data/consumption_cigarets_smokers.json', 'r') as consumption:
    my_dict = json.load(consumption)

    for line in my_dict:
        if line["Year"] == "1990":
            data1990.append(line)

    for line in my_dict:
        if line["Year"] == "1995":
            data1995.append(line)

    for line in my_dict:
        if line["Year"] == "2000":
            data2000.append(line)

    for line in my_dict:
        if line["Year"] == "2005":
            data2005.append(line)

    for line in my_dict:
        if line["Year"] == "2006":
            data2006.append(line)

    for line in my_dict:
        if line["Year"] == "2010":
            data2010.append(line)
    consumption.close()

# append al the years to one big list of lists
data_years = []
data_years.append(data1990)
data_years.append(data1995)
data_years.append(data2000)
data_years.append(data2005)
data_years.append(data2006)
data_years.append(data2010)

scatter_data = []
with open('data/JSON_data/deaths_smoking.json', 'r') as deaths:
    with open('JSON_data/share_cancer_deaths_tobacco.json', 'r') as cancer:
        my_dict1 = json.load(deaths)
        my_dict2 = json.load(cancer)

        for obj1 in my_dict1:
            for obj2 in my_dict2:
                for year in data_years:
                    for line in year:

                        if obj1["Year"] == obj2["Year"] == line["Year"] and
                        obj1["Entity"] == obj2["Entity"] == line["Entity"]:
                            line["Deaths"] = obj1["Tobacco smoking"]
                            line["Cancer"] = obj2["Cancer"]
                            print(scatter_data)
                            scatter_data.append(line)

json_file = open('data/JSON_data/scatter_data.json', 'w')
json_data = json.dumps(scatter_data)
json_file.write(json_data)
json_file.close()
