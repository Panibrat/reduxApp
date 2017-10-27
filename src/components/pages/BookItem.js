import React from 'react';
import {Well, Col, Button, Row} from 'react-bootstrap';

class BookItem extends React.Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>{this.props.description}</p>
            <h6>price: {this.props.title}</h6>
            <Button bsStyle="primary">Buy now!</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default BookItem;
