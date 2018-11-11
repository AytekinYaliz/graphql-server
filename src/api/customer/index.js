module.exports = {
  resolvers: require("./customer.resolvers"),
  typeDefs: require("../../libs/gqlLoader")("./customer/customer.graphql")
  //   model: require("./project.model")
};
