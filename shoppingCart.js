console.log('exporting module');
const shippingCost = 10;
const cart = [];
export const addTOCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};
