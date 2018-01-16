'use strict'

const path = require('path')

// Resolve paths relative to the project root
const projectRoot = path.resolve(process.cwd())
const resolvePath = relativePath => path.resolve(projectRoot, relativePath)

const paths = {
    root:      projectRoot,
    config:    resolvePath('config'),
    webClient: {
        entry:  resolvePath('src/client/web/index.js'),
        build:  resolvePath('build/web-client'),
        root:   resolvePath('src/client/web'),
        shared: resolvePath('src/client/shared')
    },
    renderService: {
        entry: resolvePath('src/client/web/render-service.js'),
        build: resolvePath('build/render-service')
    },
    api: {
        entry: resolvePath('src/api/index.js'),
        build: resolvePath('build/api'),
        root:  resolvePath('src/api')
    }
}

module.exports = paths
