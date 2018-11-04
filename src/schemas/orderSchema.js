const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require("graphql");
const axios = require("axios");
const { customerType, customerQueryFields } = require("./customerSchema");
const config = require("../../config");

const productType = new GraphQLObjectType({
  name: "Order_Product",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    quantity: {
      type: GraphQLInt
    }
  })
});
const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    customerId: {
      type: GraphQLInt
    },
    customer: customerQueryFields.customer,
    date: {
      type: GraphQLString
    },
    products: {
      type: new GraphQLList(productType)
    },
    amount: {
      type: GraphQLInt
    }
  })
});

// module.exports = new GraphQLSchema({ query: queryType });
const orderQueryFields = {
  order: {
    type: OrderType,
    // `args` describes the arguments that the `user` query accepts
    args: {
      id: { type: GraphQLInt }
    },
    resolve: function(_, args) {
      return axios
        .get(`${config.apiUrl}/orders`)
        .then(data => {
          return data.data.find(c => c.id == args.id);
        })
        .catch(e => {
          console.log(e);
          return {};
        });
    }
  },
  orders: {
    type: new GraphQLList(OrderType),
    resolve: function(_, args) {
      return axios
        .get(`${config.apiUrl}/orders`)
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

module.exports = orderQueryFields;
