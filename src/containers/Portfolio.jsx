import React, { Component } from 'react';
import PortfolioStocks from './PortfolioStocks'

class Portfolio extends Component {

    render() {

        let portfolioStocksComponent = this.props.portfolio.stocks.map(stock => {
            return <PortfolioStocks key={stock.id} stock={stock} />
        })

        let {description} = this.props.portfolio

        return (
            <div className="portfolio-card">
                <h2> {description} </h2>
                {portfolioStocksComponent}
            </div>
        );
    }

}

export default Portfolio;