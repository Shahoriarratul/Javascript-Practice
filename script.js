// import { addTOCart } from './shoppingCart.js';
// console.log('Importing module');
// addTOCart('bread', 5);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// getLastPost().then(last => console.log(last));
// const shoppingCArt2 = (function () {
//   const cart = [];
//   const shippingCost = 20;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const addTOCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const OrderdStock = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} Orderd from supplier`);
//   };

//   return {
//     addTOCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCArt2.addTOCart('apple', 4);

import cloneDeep from 'lodash-es';

// const state = {
//   carts: [{ producr }],
// };
console.log('its running');
if (module.hot) {
  module.hot.accept();
}
import 'core-js/stable';
