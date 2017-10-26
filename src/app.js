"use strict"
import {createStore} from 'redux';
//STEP 3 define reducers
import reducers from './reducers/index';

// STEP 1 create the store
const store = createStore(reducers);
store.subscribe(function() {
  console.log('current state is: ', store.getState());
  //console.log('current price: ', store.getState().price);
})
// STEP 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: [{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description ',
 price: 33.44
  }]
});
store.dispatch({
  type: "POST_BOOK",
  payload: [{
    id: 2,
    title: '2this is the book title2',
    description: '2this is the book description2 ',
 price: 23.22
  }]
});
store.dispatch({
  type: "POST_BOOK",
  payload: [{
    id: 3,
    title: '3this is the book title3',
    description: '3this is the book description3 ',
 price: 77.77
  }]
});
store.dispatch({
  type: "DELETE_BOOK",
  payload: {id: 3}
});
store.dispatch({
  type: "DELETE_BOOK",
  payload: {id: 1}
});

store.dispatch({
  type: "POST_BOOK",
  payload: [{
    id: 4,
    title: '4444 4 title',
    description: 'empty',
 price: 44.44
  }]
});

store.dispatch({
  type: "UPDATE_BOOK",
  payload: {
    id: 4,
    title: 'Learn React in 224h',
    //description: 'updated description'
  }
});
