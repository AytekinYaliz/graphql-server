const customer = require("./customer");
// const loaders = require("./loaders");
// const task = require("./task");
// const search = require("./search");
// const merge = require("lodash/merge");

module.exports = {
  typeDefs: [customer.typeDefs].join(" "),
  resolvers: { ...customer.resolvers }
  //   context: {
  //     models: {
  //       project: project.model,
  //       task: task.model
  //     },
  //     loaders: loaders()
  //   }
};
