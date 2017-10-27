import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    const booksList = this.props.books.map((arrayBook) => {
      return (
        <div key={arrayBook.id}>
          <h3>Title: {arrayBook.title}</h3>
          <h4>Description: {arrayBook.description}</h4>
          <h4>price: {arrayBook.price}</h4>
        </div>
      )
    })
    return (
      <div>
        <h1> Books List </h1>
        {booksList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
