cart = [
  {
    description: "this is the book description ",
    price: 10,
    quantity: 1,
    title: "Learn React in 244h",
    _id: 1
  },
  {
    description: "this is the book description ",
    price: 20,
    quantity: 5,
    title: "Learn React in 244h",
    _id: 2
  },
];

console.log(cart.length);
let _id = cart._id;

arr = [1,4,56,7,3,67,34]

var found = arr.findIndex((item)=>{
  return item > 150;
});

console.log(found);

var total = cart.reduce((sum, item) => {
  return sum += item.quantity * item.price
}, 0)
console.log('total: ', total);
