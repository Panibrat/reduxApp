"use strict"
export function booksReducers(state = {
  books:[
    {
        id: 1,
        title: '1this is the book title',
        description: 'this is the book description ',
        price: 10
    },
    {
      id: 2,
      title: '2this is the book title2',
      description: '2this is the book description2 ',
      price: 20
    },
    {
        id: 3,
        title: '3this is the book title',
        description: '33this is the book description ',
        price: 30.30
    }

  ]
}, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return {...state, books:[...state.books]};
      break;
    case "POST_BOOK":
      return {books:[...state.books, ...action.payload]};
      break;
    case "DELETE_BOOK":
      let books = state.books.filter((book) => {
        return action.payload.id !== book.id;
      })
      return {...state, books:[...books]};
      break;
    case "UPDATE_BOOK":
      books = state.books.map((book) => {
        if(action.payload.id === book.id){
          book = {
            ...book,
            title: action.payload.title
          }
        }
        return book
      })
      return {...state, books:[...books]};
      break;
  }
  return state
}
