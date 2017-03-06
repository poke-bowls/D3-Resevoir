# D3-Resevoir

Coding challenge focused around dynamic data visualization.  This project is the result of a four day sprint.

Setup and Run:
  - Clone repo
  - In terminal:
      install dependencies > ```npm i```
      install local environment >```npm install -g http-server```
      to run >```http-server &``` in cloned repo
  - Navigate (Chrome preferred) to (http://localhost:8080)

Info:
  - Input flow rates for X and Y (gal/s) then tab to calculate all other variables
  - The bar graph is populated with rates x, y and z (x-axis) and the corresponding pipe sizes (y-axis) necessary to accomodate their flows with a tolerance of two percent
  - Repeat with different inputs for x and y for dynamic graphing of data

Notes:
  - Data visualization accomplished with the D3 library
  - Focus was mainly on storing and displaying user input dynamically in an efficient manner
  - A bar graph for simple comparison of flow rates to pipe sizes for real world application
