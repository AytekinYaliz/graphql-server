const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const axios = require("axios");
const config = require("../config");

const customerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    dateOfBirth: {
      type: GraphQLString
    }
  })
});

// module.exports = new GraphQLSchema({ query: queryType });
const customerQueryFields = {
  customer: {
    type: customerType,
    // `args` describes the arguments that the `user` query accepts
    args: {
      id: { type: GraphQLInt }
    },
    resolve: function(parent, args) {
      console.log("HI", parent.customerId);
      return axios
        .get(`${config.apiUrl}/customers/${args.id || parent.customerId}`)
        .then(data => {
          return data.data;
        })
        .catch(e => {
          console.log(e);
          return {};
        });
    }
  },
  customers: {
    type: new GraphQLList(customerType),
    resolve: function(_, args) {
      return axios
        .get(`${config.apiUrl}/customers`)
        .then(data => {
          return data.data;
        })
        .catch(e => {
          console.log(e);
          return [];
        });
    }
  }
};

module.exports = { customerType, customerQueryFields };
