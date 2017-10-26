"use strict"
export function booksReducers(state = {books:[]}, action) {
  switch (action.type) {
    case "POST_BOOK":
      return {books:[...state.books, ...action.payload]};
      break;
    case "DELETE_BOOK":
      let books = state.books.filter((book) => {
        return action.payload.id !== book.id
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
