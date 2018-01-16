# Infrastructure

- [Infrastructure](#infrastructure)
  - [Application structure](#application-structure)
    - [Services](#services)
    - [Clients](#clients)
      - [Web client *(Under development)*](#web-client-under-development)
      - [Mobile app *(Planned)*](#mobile-app-planned)
      - [Other *(Uncertain)*](#other-uncertain)
  - [Folder structure](#folder-structure)
    - [Notes](#notes)
  - [Build process](#build-process)
    - [Code transpilation](#code-transpilation)
      - [Generic settings](#generic-settings)
      - [Environment differences](#environment-differences)
    - [Webpack configurations](#webpack-configurations)
      - [Web client](#web-client)
      - [Render service](#render-service)
      - [API](#api)
  - [Troubleshooting](#troubleshooting)

## Application structure

### Services

On the server side, this project is comprised of the following 3 services:

1. The publicly accessible entry point is the main webserver, which works as a
   reverse proxy redirecting the following requests:

   - All requests to `assets/`, are served as static files from the web client
     build folder. On a real live system, this should be disabled in favour of
     using a CDN.
   - All requests to `api/` are proxied to the API service.
   - All other requests are proxied to the render service.

1. The API, which is used by all clients (web, mobile, etc.)

1. The render service, which provides SSR for the web client.

### Clients

#### Web client *(Under development)*

On the very first iteration, only the web client will be included. This will be
a regular single page application, communicating with the server API. Out of the
box, this will be a very simple unstyled "hello world" which will grow to a
full-featured example over time.

#### Mobile app *(Planned)*

Later, a mobile client app should be added, implementing (and reusing code from)
the same example as the web client.

#### Other *(Uncertain)*

When everything else is up and running, and barring any show stoppers along the
way, a desktop application is also a possibility.

## Folder structure

    .
    ├── build
    │   └── ( ... generated files go here ... )
    ├── config
    │   ├── paths.js
    │   ├── services.js
    │   ├── webpack.config.api.js
    │   ├── webpack.config.render-service.js
    │   └── webpack.config.web-client.js
    ├── docs/
    ├── node_modules/
    ├── src
    │   ├── api
    │   │   ├── ...
    │   │   ...
    │   │   └── index.js
    │   └── client (*)
    │       ├── shared
    │       │   ├── actions/
    │       │   ├── assets/
    │       │   ├── reducers/
    │       │   └── store.js
    │       └── web
    │           ├── assets
    │           │   └── favicon.ico
    │           ├── components/
    │           ├── containers/
    │           ├── pages
    │           │   └── <some_page_name> (**)
    │           │       ├── components/
    │           │       └── containers/
    │           ├── index.js
    │           └── render-service.js
    ├── test/
    ├── tools
    │   └── webserver.js
    ├── .babelrc
    ├── .eslintrc.json
    ├── .gitignore
    ├── package.json
    └── README.md

### Notes

- (__*__) As you can see, this structure does not include the mobile client(s)
  yet. Those should come on a later iteration, after the basic web app
  infrastructure is finalised.

- (__**__) The `pages` folder is intended to allow grouping components
  according to their context.

  Note that this isn't yet set in stone. Grouping by page ties things to the
  navigation and layout. Alternatively, a more abstract approach similar to
  e.g. the [modular structure](https://hashnode.com/post/whats-new-in-mern-20-cipqni5e800l402538yp5dge5)
  from the [MERN](https://mern.io) project could be used.

  Regardless of the final form, putting components and containers inside
  page/module folders is entirely optional. Conversely, generic components
  which can be reused across multiple pages should be placed at the root
  `components` or `containers` folders.

Inside the folders of each client app, the structures should look the same
whenever possible. This will make it easier to share code, and will go a long
way to make the project easier to understand and maintain.

## Build process

### Code transpilation

All the code inside `src/` can be written in ES6. As part of the build process, we use [Babel](https://babeljs.io) to convert it so that in runs on the desired target (node, browser, etc.) and environment (development or production).

#### Generic settings

The following Babel plugins are always used regardless of target or environment:

- [transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/),
- [transform-react-jsx](https://babeljs.io/docs/plugins/transform-react-jsx/)

#### Environment differences

The [transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/) plugin is used
in production only, since it's a performance optimization that makes debugging
harder.

The [env preset](https://babeljs.io/docs/plugins/preset-env) is always used, but it has to be
configured for the appropriate target:

- On the server side, we want to target `node` so that async/await can work
  properly without unnecessary poly-fills.
- On the client side, we simply target the last 2 browser versions.

### Webpack configurations

#### Web client

*( ... TODO ... )*

#### Render service

*( ... TODO ... )*

#### API

*( ... TODO ... )*

## Troubleshooting

- For the main webserver to "see" the multiple services (API and SSR service),
  you to need `localhost` defined in you `hosts` file. This is usually located
  in the following paths:
  - On Windows 10: `C:\Windows\System32\drivers\etc\hosts`
  - On Linux: `\etc\hosts`
