import React from 'react'
import Stock from './Stock'

class StocksContainer extends React.Component {

    render() {
        let stocksComponentArrray = this.props.stocks.map(stock => {
            return <Stock key={stock.symbol} stock={stock} />
        })
        return (
            <div>
                {stocksComponentArrray}
            </div>
        )
    }
}

export default StocksContainer