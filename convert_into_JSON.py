import csv
import json

json_data = [json.dumps(d) for d in csv.DictReader(open('csv_data/deaths_smoking.csv', 'r'))]
print(json_data)
