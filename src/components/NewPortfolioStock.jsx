import React, { Component } from 'react';

class NewPortfolioStock extends Component {

    state = {
        stock: {...this.props.stock, portfolio_id: this.props.user.id}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStockToPortfolio(this.state.stock)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default NewPortfolioStock;