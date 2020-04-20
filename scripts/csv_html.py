import pandas as pd
csv_path="../instructions/Resources/cities.csv"
cities_df = pd.read_csv(csv_path)
# print(cities_df.head(5))
cities_df.to_html("table.html", index=False, classes=['table', "table-striped", "table-hover"])