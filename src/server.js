const express = require("express");
const graphqlHTTP = require("express-graphql");
const {
  customerSchema: customerQueryFields,
  productSchema: productQueryFields,
  orderSchema: orderQueryFields
} = require("./schemas");
const app = express();
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

var queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...customerQueryFields,
    ...productQueryFields,
    ...orderQueryFields
  }
});

app.use(
  "/graphiql",
  graphqlHTTP({
    schema: new GraphQLSchema({ query: queryType }),
    graphiql: true
  })
);

module.exports = app;
