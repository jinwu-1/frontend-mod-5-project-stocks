import React from 'react'
import Stock from './Stock'

class StocksContainer extends React.Component {

    state = {
    }

    render() {
        let stocksComponentArrray = this.props.stocks.map(stock => {
            return <Stock key={stock.symbol} stock={stock} user={this.props.user} addStockToPortfolio={this.props.addStockToPortfolio} updateCash={this.props.updateCash}/>
        })

        return (
            <div>
                <h1>Available Cash: ${this.props.user.cash}</h1>
                {stocksComponentArrray}
            </div>
        )
    }
}

export default StocksContainer