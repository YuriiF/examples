# command to generate react application with routing, emotion, and pascal case files
# NOTE: remove --dry-run flag to actually crate a files
nx g @nrwl/react:application --routing=true --pascalCaseFiles=true --style=@emotion/styled --dry-run

# command to generate node application with defined frontend project
# that needs access this node app
nx g @nrwl/node:application --frontendProject=client

# npm module 'apollo' have to be installed 'yarn add apollo --dev'
# Command to push schema - Apollo Manager
y apollo service:push --endpoint=http://localhost:4000/ --config=./apps/server/apollo.config.js

# Command to check schema - Apollo Manager
y apollo service:check --endpoint=http://localhost:4000/ --config=./apps/server/apollo.config.js

# Command to generate components library with routing, for my application e.g. client, notes
# to customize the name just change the name parameter to the name of your new lib e.g.
# --name=components change to --name=types, also change the directory, and --appProject as disired
nx g @nrwl/react:library --directory=client --appProject=client --pascalCaseFiles=true --routing=true --style=@emotion/styled --publishable=true --name=name-of-the-lib

# Command to generate component inside the library, with automatic export just change the name, directory and project (lib) name
nx g @nrwl/react:component --project=client-components --directory=HomePage --export=true --pascalCaseFiles=true --routing=true --style=@emotion/styled

# Command to generate component in particular folder/directory in libs
nx g @nrwl/react:component --project=client-components --directory=pages/Cart --export=true --pascalCaseFiles=true --routing=false --style=@emotion/styled

# Command to generate components inside particular application e.g. our  client or notes application.
# Do not use export here and to generate component remove --dry-run flag from the end of command.
nx g @nrwl/react:component --project=client --directory=containers/BookTrips --pascalCaseFiles=true --routing=false --style=@emotion/styled --dry-run
