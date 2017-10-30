import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks} from '../../actions/booksActions';


class BooksForm extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(){
    const book = [
      {
        //id: 12121,
        title: findDOMNode(this.refs.title).value,
        //title: this.refs.title.value + '!?!?', - doesn't work with react-bootstrap component
        description:  findDOMNode(this.refs.description).value,
        price: findDOMNode(this.refs.price).value
      }
    ];
    this.props.postBooks(book);
  }

  render() {
    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              ref="title"
              placeholder="Enter title"
          />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              ref="description"
              placeholder="Enter description"
          />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              ref="price"
              placeholder="Enter price"
          />
          </FormGroup>
          <Button onClick={this.handleSubmit} bsStyle="primary">SAVE</Button>
        </Panel>
      </Well>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postBooks: postBooks
  }, dispatch)
};

export default connect(null, mapDispatchToProps)(BooksForm);
