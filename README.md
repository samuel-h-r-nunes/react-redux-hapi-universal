# react-redux-hapi-universal

An experimental boilerplate for universal apps with an API, SSR service, and web and mobile clients, all in one project.

## Before you proceed

Disclosure: this is (still) just a work-in-progress experiment, being developed by a single person on his free time for learning purposes. If you're looking for a solution for your business, you are probably in the wrong place.

### Why create another boilerplate

Well, sorry for that. There's a plenty of them already, right? But I couldn't find any off-the-shelf solution that would meet my goals (see below), and I'm quite fond of thinkering with the details, so I decided to create this as a learning experience. The learning part has actually become the main, ever-growing, goal of the project.

## Project goals

This project aims to provide a basic skelleton for multi-platform applications consisting of a server API and web and mobile client apps, all under the same code base. The goal is to have a unified build system that can run the tests and build everything with a single command, from the API and web client to the different app packages.

The infrastructure for code-sharing between client apps will be acompanied with example code:

* The first focus will be on [sharing the application logic](http://jkaufman.io/react-web-native-codesharing/), i.e. the [Redux](https://redux.js.org/) part.
* On a second iteration we will explore [several](https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665) [different](https://medium.com/@aakashns/sharing-components-between-react-and-react-native-f6ce3713658a) [possibilities](https://github.com/necolas/react-native-web) to reuse the components themselves.
* Further away in the horizon, it would also be nice to have the [desktop](https://electronjs.org/) as a build target. Let's see if we can get there!

The following assumptions are made about the client apps:

* They share the same routing structure, even if some routes might not be available on all clients.
* They're supposed to look as similar as possible. (In fact, with responsive layout, they could even look the same and adjust to the the target screen size.)

## Technologies

The following technologies were the original source of inspiration, so they are part of the design from the start:

* [React](https://reactjs.org/) - Probably the most popular component-based frontent engine right now.
* [React Native](https://facebook.github.io/react-native/) - Same as React, but built on a different set of primitives for mobile platforms. Promises great performance by making use of actual native components.
* [Redux](https://redux.js.org/) - Widely regarded as the best solution for state management, Redux makes things highly testable and reusable.
* [Hapi](https://hapijs.com/) - A simple to use, expressive, and powerful library for building server APIs.
* [webpack](https://webpack.js.org/) - A powerful and highly configurable module bundler for javascript applications.

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
    │   └── client
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
    │           │   └── <some_page_name> (*)
    │           │       ├── components/
    │           │       └── containers/
    │           ├── index.js
    │           └── render-service.js
    ├── test/
    ├── tools
    │   └── webserver.js
    ├── .babelrc
    ├── .eslintrc
    ├── .gitignore
    ├── package.json
    └── README.md

Notes:

* As you can see, this does not include the mobile client(s) yet. Those should come on a later iteration, after I get the basics working.

* (*) The `pages` folder is intended for easier grouping of components according to their context.

Placing components or containers inside page folders is entirely optional. Conversely, generic components which can be reused across multiple pages should be placed at the root `components` or `containers` folders.

Inside the folders of each client app, the structures should look the same whenever possible. This will make it easier to share code, and will go a long way to make the project easier to understand and maintain.
