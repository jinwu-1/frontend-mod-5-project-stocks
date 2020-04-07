import React, { Component } from 'react';
import PortfolioStocks from './PortfolioStocks'

class Portfolio extends Component {

    render() {

  
        let portfolioStockComponent = this.props.portfolio.stocks.map(stock => {
            return <PortfolioStocks key={stock.id} stock={stock} />
        })

        let {name} = this.props.portfolio

        return (
            <div className="portfolio-card">
                <h2> {name} </h2>
                {portfolioStockComponent}
            </div>
        );
    }

}

export default Portfolio;