const { Inngest } = require("inngest");
const inngest = new Inngest({
  id: "Fastify-app",
  eventKey: process.env.INNGEST_EVENT_KEY,
});

module.exports = inngest;
