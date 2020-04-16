import React from 'react'
import Stock from './Stock'
import Search from '../components/Search'

class StocksContainer extends React.Component {

    render() {
        let stocksComponentArrray = this.props.stocks.map(stock => {
            return (
                <Stock 
                    key={stock.symbol} 
                    stock={stock} 
                    user={this.props.user} 
                    addStockToPortfolio={this.props.addStockToPortfolio} 
                    buyStocks={this.props.buyStocks}
                />
            )
        })

        return (
            <>
            <div>
            <h1>Available Cash: ${this.props.user.cash}</h1>
                <Search
                    handleSearchTerm={this.props.handleSearchTerm}
                />
            </div>
            <div className='cards'>
                {stocksComponentArrray}
            </div>
            </>
        )
    }
}

export default StocksContainer