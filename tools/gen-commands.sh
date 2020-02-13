# command to generate react application with routing, emotion, and pascal case files
nx g @nrwl/react:application --routing=true --pascalCaseFiles=true --style=@emotion/styled

# command to generate node application with defined frontend project
# that needs access this node app
nx g @nrwl/node:application --frontendProject=client

# npm module 'apollo' have to be installed 'yarn add apollo --dev'
# Command to push schema - Apollo Manager
y apollo service:push --endpoint=http://localhost:4000/ --config=./apps/server/apollo.config.js

# Command to check schema - Apollo Manager
y apollo service:check --endpoint=http://localhost:4000/ --config=./apps/server/apollo.config.js
