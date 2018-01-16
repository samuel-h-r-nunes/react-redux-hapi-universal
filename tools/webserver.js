'use strict'

const Hapi     = require('hapi')
const services = require('../config/services')

// Create server
const server = Hapi.Server({
    port: services.webServer.port,
    host: services.webServer.host
})

// Start the server
async function startServer () {
    try {
        // Register plugins
        await server.register({ plugin: require('inert') })
        await server.register({ plugin: require('h2o2') })

        // Serve all GET requests on /assets as static files
        server.route({
            method:  'GET',
            path:    services.staticFiles.path + '/{param*}',
            handler: {
                directory: {
                    path: services.staticFiles.directory
                }
            }
        })

        // Serve /favicon.ico as a static file too
        server.route({
            method:  'GET',
            path:    '/favicon.ico',
            handler: {
                file: {
                    path: services.staticFiles.directory + '/favicon.ico'
                }
            }
        })

        // Proxy all requests on /api to the API service
        server.route({
            method:  '*',
            path:    services.api.path + '/{param*}',
            handler: {
                proxy: {
                    uri:         `{protocol}://${services.api.host}:${services.api.port}/{param}`,
                    passThrough: true
                }
            }
        })

        // Proxy all other requests to the render service
        server.route({
            method:  '*',
            path:    '/{param*}',
            handler: {
                proxy: {
                    uri:         `{protocol}://${services.renderService.host}:${services.renderService.port}/{param}`,
                    passThrough: true
                }
            }
        })

        await server.start()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server running at: ${server.info.uri}`)
}

startServer()
