# Exampels projects monorepo

Repository is build as monorepo generated with [Nx](https://nx.dev)

**Nx is a set of Extensible Dev Tools for Monorepos.**
**!Not production ready**

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

### Run notes-api **feathersjs** application
4. Open terminal and run bellow command for notes-api server

```sh
  yarn start notes-api

  # or in case npm

  npm run start notes-api
```

### Run notes React clien application
5. Open another terminal and run bellow command for the client

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

### Run Apollo server application
4. Open terminal and run bellow command for Apollo server

```sh
  yarn start server

  # or in case npm

  npm run start server
```

### Run Apollo React client application
5. Open another terminal and run bellow command for the client

```sh
  yarn start client

  # or in case npm

  npm run start client
```
