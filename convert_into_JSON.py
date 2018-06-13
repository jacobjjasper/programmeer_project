#
# This script loads csv files en converts them into JSON
#
# Programming project
#
# Jacob Jasper (10650385)
# 



import csv
import json

# convert number of deaths by smoking into a JSON
json_file = open('JSON_data/deaths_smoking.json', 'w')
json_data = [json.dumps(d) for d in csv.DictReader(open('csv_data/deaths_smoking-(1990-2016).csv', 'r'))]

json_file.write("[")
for d in json_data:
    json_file.write(d)
    json_file.write(',\n')

json_file.close()

with open('JSON_data/deaths_smoking.json', 'rb+') as json_file:
    json_file.seek(-2, 2)
    json_file.truncate()

with open('JSON_data/deaths_smoking.json', 'a') as json_file:
    json_file.write("]")

# convert share of cancer deaths attributed to tobacco into JSON
json_file = open('JSON_data/share_cancer_deaths_tobacco.json', 'w')
json_data = [json.dumps(d) for d in csv.DictReader(open('csv_data/share-of-cancer-deaths-attributed-to-tobacco-(1990-2016).csv', 'r'))]

json_file.write("[")
for d in json_data:
    json_file.write(d)
    json_file.write(',\n')

json_file.close()

with open('JSON_data/share_cancer_deaths_tobacco.json', 'rb+') as json_file:
    json_file.seek(-2, 2)
    json_file.truncate()

with open('JSON_data/share_cancer_deaths_tobacco.json', 'a') as json_file:
    json_file.write("]")

# convert share of people who smoke everyday into a JSON
json_file = open('JSON_data/share_smokers_everyday.json', 'w')
json_data = [json.dumps(d) for d in csv.DictReader(open('csv_data/daily-smoking-prevalence-bounds-(1980-2012).csv', 'r'))]

json_file.write("[")
for d in json_data:
    json_file.write(d)
    json_file.write(',\n')

json_file.close()

with open('JSON_data/share_smokers_everyday.json', 'rb+') as json_file:
    json_file.seek(-2, 2)
    json_file.truncate()

with open('JSON_data/share_smokers_everyday.json', 'a') as json_file:
    json_file.write("]")

# convert consumtion cigarets per smoker into JSON
json_file = open('JSON_data/consumption_cigarets_smokers.json', 'w')
json_data = [json.dumps(d) for d in csv.DictReader(open('csv_data/consumption-per-smoker-per-day-(1980-2012).csv', 'r'))]

json_file.write("[")
for d in json_data:
    json_file.write(d)
    json_file.write(',\n')

json_file.close()

with open('JSON_data/consumption_cigarets_smokers.json', 'rb+') as json_file:
    json_file.seek(-2, 2)
    json_file.truncate()

with open('JSON_data/consumption_cigarets_smokers.json', 'a') as json_file:
    json_file.write("]")
