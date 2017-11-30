"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';

import {addToCart, deleteCartItem} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import BooksList from './components/pages/booksList';


const middeleware = applyMiddleware(logger);
const store = createStore(reducers, middeleware);
store.subscribe(function() {
  console.log('current state is: ', store.getState());
});

render(
  <Provider store = {store} >
    <BooksList />
  </Provider>, document.getElementById('app')
);


store.dispatch(deleteBooks({_id:3}));
//store.dispatch(deleteBooks({id:2}));
store.dispatch(updateBooks(
    {
        _id: 1,
        title: 'Learn React in 244h'
    }
));
//ADD TO CART
store.dispatch(addToCart([
  {
    _id: 55,
    title: '777this is the book title',
    description: '777this is the book description ',
    price: 77777,
    quantity: 7

  },
  {
    _id: 77,
    title: '777this is the book title',
    description: '777this is the book description ',
    price: 77777,
    quantity: 1
  },
  {
    _id: 99,
    title: '888this is the book title',
    description: '887this is the book description ',
    price: 888,
    quantity: 12
  }
]));
store.dispatch(addToCart([{_id: 88}]));

store.dispatch(deleteCartItem({_id: 77}));
store.dispatch(deleteCartItem({_id: 88}));

//store.dispatch(addToCart([  {_id: 1} ]));

// store.dispatch(postBooks([
//   {
//       id: 77,
//       title: '777this is the book title',
//       description: '777this is the book description ',
//       price: 77777
//   }
// ]))
