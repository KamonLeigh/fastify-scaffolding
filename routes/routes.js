"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });
  fastify.get("/debug-sentry", function (fastify, res) {
    throw new Error("My first Sentry error!");
  });
};
