const inngest = require("./client");

module.exports = inngest.createFunction(
  { id: "hello-world", triggers: { event: "demo/event.sent" } },
  async ({ event, step }) => {
    return {
      message: `Hello ${event.name}!`,
    };
  },
);
