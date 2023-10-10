const fastify = require("fastify");
const fp = require("fastify-plugin");

fastify.register(require('@fastify/swagger'), {
    routePrefix: '/docs',
    exposeRoute: fastify.secrets.NODE_ENV !== 'production',
    swagger: {
        title: 'Fastify app',
        description: 'Fastify Book Examples',
        version: require('../package.json').version
    }
}, { dependencies: ['application-config']})

