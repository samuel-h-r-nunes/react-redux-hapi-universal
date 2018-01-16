'use strict'

const paths = require('./paths')

const defaultConfiguration = {
    api: {
        path: '/api',
        host: 'localhost',
        port: 3002
    },
    renderService: {
        host: 'localhost',
        port: 3001
    },
    staticFiles: {
        path:      '/assets',
        directory: paths.webClient.build
    },
    webpackDevServer: {
        host: 'localhost',
        port: 3003
    },
    webServer: {
        host: 'localhost',
        port: 3000
    }
}

const configuration = Object.assign({}, defaultConfiguration)

// Allow configuring the web server's port directly, useful when deploying
// to external services.
if (process.env.PORT) {
    configuration.webServer.port = process.env.PORT
}

module.exports = configuration
