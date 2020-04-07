import React from 'react'
import NewPortfolioStock from '../components/NewPortfolioStock'

class Stock extends React.Component {

    render() {
        let {symbol, name, price, exchange} = this.props.stock
        return (
            <div>
                <h3>{symbol}: {name}</h3>
                <h4>${price}</h4>
                <h5>{exchange}</h5>
                <NewPortfolioStock stock={this.props.stock} user={this.props.user} addStockToPortfolio={this.props.addStockToPortfolio}/>
            </div>
        )
    }
}

export default Stock