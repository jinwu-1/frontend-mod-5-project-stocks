import React, { Component } from 'react';
import NewPortfolioStock from '../components/NewPortfolioStock';
import Card from 'react-bootstrap/Card'

class Stock extends Component {

  render() {
    let {symbol, name, price, exchange} = this.props.stock

    return (

      <div className='Card'>
        <Card.Header>{symbol} : {name} </Card.Header>
        <Card.Body>
        <Card.Title>${price}</Card.Title>
        <Card.Text>
          <h6>{exchange}</h6>
          <NewPortfolioStock 
                    stock={this.props.stock} 
                    user={this.props.user} 
                    addStockToPortfolio={this.props.addStockToPortfolio} 
                    buyStocks={this.props.buyStocks} />               
        </Card.Text>
      </Card.Body>
      </div>
    );
  }
}

export default Stock;