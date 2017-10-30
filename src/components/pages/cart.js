import React from 'react';
import {Well, Panel, Col, Row, Button} from 'react-bootstrap';

import {connect} from 'react-redux';

class Cart extends React.Component {
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
  renderEmpty() {
    return (
      <div></div>
    )
  }
  renderCart() {
    const cartItemsList = this.props.cart.map((cartArr) => {
      return (
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6>
            </Col>
          </Row>
        </Panel>
      )
    })
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
      </Panel>
    )
  }
}


function mapStateToProps(state) {
  return {cart: state.carts.cart}
}
export default connect(mapStateToProps)(Cart);
