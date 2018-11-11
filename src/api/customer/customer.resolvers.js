const axios = require("axios");
const { apiUrl } = require("../../../config");

const customers = async (parent, args, ctx, info) => {
  //   console.log("id", id);
  const res = await axios.get(`${apiUrl}/customers`);
  console.log(res.data);
  return res.data;
};

const customer = async (parent, args, ctx, info) => {
  //   console.log("id", id);
  const res = await axios.get(
    `${apiUrl}/customers/${args.id || parent.customerId}`
  );
  console.log(res.data);
  return res.data;
};

module.exports = {
  Query: {
    customer,
    customers
  }
};
