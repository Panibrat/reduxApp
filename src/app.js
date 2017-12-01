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
  //console.log('current state is: ', store.getState());
});

render(
  <Provider store = {store} >
    <BooksList />
  </Provider>, document.getElementById('app')
);
