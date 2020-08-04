# TODO:
# 1. Look into opening JSON files... wtf Jovani
# Docs: https://docs.python.org/3/library/json.html?highlight=json

import json

with open('output.json', 'r') as cocktail_data:
    cocktail_data_loaded = json.loads(cocktail_data.read())
    print(cocktail_data_loaded)
