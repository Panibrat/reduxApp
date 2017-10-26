"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
//STEP 3 define reducers
import reducers from './reducers/index';

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// STEP 1 create the store
const middeleware = applyMiddleware(logger);
const store = createStore(reducers, middeleware);
store.subscribe(function() {
  //console.log('current state is: ', store.getState());
  //console.log('current price: ', store.getState().price);
});
// STEP 2 create and dispatch actions

store.dispatch(postBooks(
    [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description ',
        price: 33.44
    }]
));

store.dispatch(postBooks(
    [{
        id: 2,
        title: '2this is the book title2',
        description: '2this is the book description2 ',
        price: 23.22
    }]
));

store.dispatch(postBooks(
    [{
        id: 3,
        title: '3this is the book title3',
        description: '3this is the book description3 ',
        price: 77.77
    }]
));


store.dispatch(deleteBooks({id:3}));
store.dispatch(deleteBooks({id:2}));
store.dispatch(deleteBooks({id:23}));

store.dispatch(postBooks(
    [{
        id: 4,
        title: '4444 4 title',
        description: 'empty',
        price: 44.44
    }]
));

store.dispatch(updateBooks(
    {
        id: 4,
        title: 'Learn React in 221212124h',
        //description: 'updated description'
    }
));

// ADD TO CART
store.dispatch(addToCart([{id:11}]));
store.dispatch(addToCart([{id:22}]));
