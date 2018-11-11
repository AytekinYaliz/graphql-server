const { GraphQLServer } = require("graphql-yoga");
const gqlServerConfig = require("./api");

module.exports = new GraphQLServer(gqlServerConfig);

// const express = require("express");
// const graphqlHTTP = require("express-graphql");
// const {
//   customerQueryFields,
//   productQueryFields,
//   orderQueryFields,
//   customerMutationFields
// } = require("./schemas");
// const { GraphQLSchema, GraphQLObjectType } = require("graphql");
// const cors = require("cors");

// const app = express();

// app.use(
//   cors({
//     optionsSuccessStatus: 200,
//     origin: "*"
//     // credentials: true,
//   })
// );

// app.get("/", (req, res, next) => {
//   res.send(`
//    <a href="/graphiql">Graphiql</a>
//    `);
// });

// var queryType = new GraphQLObjectType({
//   name: "Query",
//   fields: {
//     ...customerQueryFields,
//     ...productQueryFields,
//     ...orderQueryFields
//   }
// });

// var mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     ...customerMutationFields
//   }
// });

// app.use(
//   "/graphiql",
//   graphqlHTTP({
//     schema: new GraphQLSchema({ query: queryType, mutation }),
//     graphiql: true
//   })
// );

// module.exports = app;
