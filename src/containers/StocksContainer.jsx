import React, { Component } from 'react';
import Stock from './Stock'

class StocksContainer extends Component {

  render() {
    let stocksComponentArray = this.props.stocks.map(stock => {
        return <Stock key={stock.symbol} stock={stock} addStockToPortfolio={this.props.addStockToPortfolio} />
    })

    return (
      <div>
          {stocksComponentArray}
      </div>
    );
  }
}

export default StocksContainer;