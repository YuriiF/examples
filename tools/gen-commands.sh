# command to generate react application with routing, emotion, and pascal case files
nx g @nrwl/react:application --routing=true --pascalCaseFiles=true --style=@emotion/styled

# command to generate node application with defined frontend project
# that needs access this node app
nx g @nrwl/node:application --frontendProject=client
