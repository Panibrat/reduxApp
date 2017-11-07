import {getBooks, postBooks, deleteBooks, updateBooks} from './booksActions';


describe('Book Actions', () => {

  test('Should return GET_BOOKS action', () => {
    expect(getBooks()).toEqual({
        type:"GET_BOOKS"
    });

  });

})
