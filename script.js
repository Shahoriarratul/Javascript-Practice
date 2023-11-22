// import { addTOCart } from './shoppingCart.js';
// console.log('Importing module');
// addTOCart('bread', 5);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
getLastPost().then(last => console.log(last));
