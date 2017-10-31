import React from 'react';
import {Well, Panel, Col, Row, Button, ButtonGroup, Label} from 'react-bootstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {deleteCartItem} from '../../actions/cartActions';

class Cart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteCartItem = this.handleDeleteCartItem.bind(this);
  // }


//store.dispatch(deleteCartItem({_id: 88}));


  handleDeleteCartItem(itemToDelete) {
    console.log("item------->", itemToDelete);
    //console.log("this------->", this);
    //console.log("refs------->", this.refs);
    this.props.deleteCartItem(itemToDelete);
  }



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
              <h6>{cartArr.title}</h6><span>    </span>
            </Col>
            <Col xs={12} sm={2}>
                <h6>usd. {cartArr.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle="success">8</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button bsStyle="default" bsSize="small">
                  -
                </Button>
                <Button bsStyle="default" bsSize="small">
                  +
                </Button>
                <span> </span>
                <Button bsStyle="danger" bsSize="small" onClick={this.handleDeleteCartItem.bind(this, cartArr)}>
                  DELETE
                </Button>
              </ButtonGroup>
          </Col>
          </Row>
        </Panel>
      )
    }, this)
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem: deleteCartItem
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
