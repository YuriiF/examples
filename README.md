# Exampels projects monorepo

Repository is build as monorepo generated with [Nx](https://nx.dev)

**Nx is a set of Extensible Dev Tools for Monorepos.**

**!Examples in this repository are not production ready**

There is more than one project. Right now you can found two projects.
  * Apollo Fullstack Tutorial, but with few changes. `ramda` is used to handle data, and
every file is in TypeScript.
  * Notes example application where backend is based on [FeathersJS](https://feathersjs.com) framework,
  REST and services from `feathersjs` backend is consumed with Apollo `RESTDatasources`,
  local state/store is handle also by **Apollo GraphQL**. Frontend is in `ReactJS`,
  with `emotion` styled components.

## Notes example app instalation

1. Clone the repository

```sh
  git clone https://github.com/YuriiF/examples.git
```

2. Navigate to created project folder (root folder)

```sh
  cd examples # or any name you choose
```

3. Install node modules dependencies. Primary we advice to install and use [Yarn](https://yarnpkg.com) as node modules package manager instead of `npm`, but for clarity we provide here commands for both of node modules managers.

```sh
  yarn install

  # or in case npm

  npm install
```

#### Run notes-api **feathersjs** application
4. Open terminal and run bellow command for notes-api server

```sh
  yarn start:notes-api

  # or in case npm

  npm run start:notes-api
```

#### Run notes Apollo GraphQL server
5. Open another terminal and run bellow command for the GraphQL server

GraphQL was implemented to demonstrade how we can, use Apollo `RESTDatasources`
to handle REST enpoints and wrap every call to REST API into GraphGL.

It's very handy becuase Apollo will cache results from REST API, handle Optimistic
updates, refetch, pagination and many more. And we still have full control over
cache or our calls to REST. Another goodness is that we can iteratively change our
old REST to GraphQL API, or just consume some old REST that we cant't migrate to GraphQL.

```sh
  yarn start notes-graphql

  # or in case npm

  npm run start notes-graphql
```

#### Run notes React clien application
6. Open another terminal and run bellow command for the client

```sh
  yarn start notes

  # or in case npm

  npm run start notes
```

## Apollo Fullstack Tutorial example app instalation

1. Clone the repository

```sh
  git clone https://github.com/YuriiF/examples.git
```

2. Navigate to created project folder (root folder)

```sh
  cd examples # or any name you choose
```

3. Install node modules dependencies. Primary we advice to install and use [Yarn](https://yarnpkg.com) as node modules package manager instead of `npm`, but for clarity we provide here commands for both of node modules managers.

```sh
  yarn install

  # or in case npm

  npm install
```

#### Run Apollo server application
4. Open terminal and run bellow command for Apollo server

```sh
  yarn start server

  # or in case npm

  npm run start server
```

#### Run Apollo React client application
5. Open another terminal and run bellow command for the client

```sh
  yarn start client

  # or in case npm

  npm run start client
```
