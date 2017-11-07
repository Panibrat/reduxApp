import React from 'react';
import {Well, Col, Button, Row} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart} from '../../actions/cartActions'


class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCart = this.handleCart.bind(this);
  }
  handleCart() {
    const book = [{
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      quantity: 1
    }]

    this.props.addToCart(book)
  }

  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <p>id: {this.props._id}</p>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>price: {this.props.price}</h6>
            <Button onClick={this.handleCart} bsStyle="primary">Buy now!</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}


function mapStateToProps(state){
  return {
    carts: state.carts.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart: addToCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
