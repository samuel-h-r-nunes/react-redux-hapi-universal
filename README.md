# react-redux-hapi-universal

An experimental boilerplate for universal apps with an API, SSR service, and web and mobile clients, all in one project.

## Project goals

This project aims to provide a base app skelleton consisting of a server API and web and mobile clients, all under the same project to maximize code reuse. The goal is to have a unified build system, that can run the tests and build everything, from the API and web client to the different mobile app packages, all from a single command.

Regarding code-sharing between client apps, the plan is to provide the infrastructure where possible, but this will be mostly example code, since it's app-specific:

* The first focus will be to [share the application logic](http://jkaufman.io/react-web-native-codesharing/), i.e. the [Redux](https://redux.js.org/) part.
* On a second iteration I will explore [different](https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665) [approaches](https://medium.com/@aakashns/sharing-components-between-react-and-react-native-f6ce3713658a) to reuse the components themselves.

The following assumptions are made about the client apps:

* They share the same routing structure, even if some routes might not be available on all clients.
* It's a good thing (for your project) if they look as similar as possible. (In fact, with responsive layout, they could even look the same.)

I couldn't find any off-the-shelf boiler plate that would meet these goals, so I decided to create my own as a learning experience. (This has actually been the main, ever-growing, goal of the project.)

## Technologies

There were specific technologies that served as an original inspiration, so they are part of the design from the start:

* [React](https://reactjs.org/) - Probably the most popular component-based frontent engine right now.
* [React Native](https://facebook.github.io/react-native/) - Often described as React for mobile, React Native promises great performance on mobile platforms. It achieves this by using actual native components.
* [Redux](https://redux.js.org/) - Widely regarded as the best solution to the problem of state management, Redux makes things highly testable and reusable. And it's super cool.
* [Hapi](https://hapijs.com/) - A very simple to use, expressive, and powerful library for building server APIs.
