import React from 'react';
import {connect} from 'react-redux';

class BooksList extends React.Component {
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
export default connect(mapStateToProps)(BooksList);
