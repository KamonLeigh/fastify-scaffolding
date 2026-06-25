const fp = require("fastify-plugin");
const { fastifyPlugin } = require("inngest/fastify");
const { inngest, functions } = require("../inngest");

module.exports = fp(
  async function (fastify, opts) {
    fastify.register(fastifyPlugin, {
      client: inngest,
      functions,
    });
  },
  {
    dependencies: ["application-config"],
  },
);
