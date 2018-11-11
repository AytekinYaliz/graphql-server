const { port } = require("./config");
const app = require("./src/app");

const serverOptions = {
  port,
  endpoint: "/graphql",
  playground: "/docs",
  tracing: true,
  debug: true
};

app.start(serverOptions, ({ port }) => console.log(`Server on port ${port}`));
