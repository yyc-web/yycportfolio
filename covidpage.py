import requests
import urllib.request
import json

import pandas as pd 
from pandas.io.json import json_normalize
import plotly.express as px
import plotly.graph_objects as go


import dash 
import dash_core_components as dcc
import dash_html_components as html 
from dash.dependencies import Input, Output

app = dash.Dash(__name__)

#---------------------------------------------------------------------------------------------

url = 'https://api.covidtracking.com/v1/states/current.json'

df = pd.read_json(url)
df = pd.DataFrame(df, columns= ['state', 'positive'])
# df = df.groupby({"state":"state"})[["positive"]]


# print(df.head(10))    
# print(df[:5])

#---------------------------------------------------------------------------------------------

fig = go.Figure(data=go.Choropleth(
    locations=df['state'], # Spatial coordinates
    z = df['positive'].astype(float), # Data to be color-coded
    locationmode = 'USA-states', # set of locations match entries in `locations`
    colorscale = 'plasma',
    colorbar_title = "Millions USD",
))

fig.update_layout(
    title_text='US COVID Positive Cases', title_x=0.5,
    geo_scope='usa', # limite map scope to USA
)
    


fig.show() 


#---------------------------------------------------------------------------------------------

if __name__ == '__main__':
    app.run_server(debug=True)





