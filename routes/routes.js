'use strict'
const { inngest } = require('../inngest')
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.get('/debug-sentry', function (fastify, res) {
    throw new Error('My first Sentry error!')
  })
  fastify.get('/hello', async function (fastify, res) {
    await inngest.send({
      name: 'demo/event.sent',
      data: { name: 'World' }
    })
    return { ok: true }
  })
}
