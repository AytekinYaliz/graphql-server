const { customerQueryFields: customerSchema } = require("./customerSchema");
const productSchema = require("./productSchema");
const orderSchema = require("./orderSchema");

module.exports = {
  customerSchema,
  productSchema,
  orderSchema
};
