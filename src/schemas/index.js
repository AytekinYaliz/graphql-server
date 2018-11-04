const {
  customerQueryFields,
  customerMutationFields
} = require("./customerSchema");
const productQueryFields = require("./productSchema");
const orderQueryFields = require("./orderSchema");

module.exports = {
  customerQueryFields,
  productQueryFields,
  orderQueryFields,
  customerMutationFields
};
