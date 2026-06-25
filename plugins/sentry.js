'use strict'

const fp = require('fastify-plugin')
const Sentry = require('@sentry/node')

module.exports = fp(async function (fastify, opts) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
    tracesSampleRate: 1.0
  })

  fastify.addHook('onError', async (request, reply, error) => {
    Sentry.captureException(error)
  })
})
