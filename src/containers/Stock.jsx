import React, { Component } from 'react';

class Stock extends Component {

  render() {
    let {symbol, name, price, exchange} = this.props.stock
    return (
      <div className="stock-card">
          <h4>{symbol} : {name}</h4>
          <h5>${price}</h5>
          <h6>{exchange}</h6>
      </div>
    );
  }
}

export default Stock;