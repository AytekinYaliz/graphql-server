const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat
} = require("graphql");
const axios = require("axios");
const config = require("../../config");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    unitPrice: {
      type: GraphQLFloat
    },
    priceCurrency: {
      type: GraphQLString
    }
  })
});
// Define the Query type

// module.exports = new GraphQLSchema({ query: queryType });
const productQueryFields = {
  product: {
    type: ProductType,
    // `args` describes the arguments that the `user` query accepts
    args: {
      id: { type: GraphQLInt }
    },
    resolve: function(_, args) {
      return axios
        .get(`${config.apiUrl}/products`)
        .then(data => {
          return data.data.find(c => c.id == args.id);
        })
        .catch(e => {
          console.log(e);
          return {};
        });
    }
  },
  products: {
    type: new GraphQLList(ProductType),
    resolve: function(_, args) {
      return axios
        .get(`${config.apiUrl}/products`)
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
module.exports = productQueryFields;
