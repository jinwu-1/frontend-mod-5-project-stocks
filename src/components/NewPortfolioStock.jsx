import React, { Component } from 'react';

class NewPortfolioStock extends Component {
    
    state = {
        stock: {...this.props.stock, user_id: this.props.user.id}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStockToPortfolio(this.state.stock)
        this.props.updateStock(this.props.user.id, this.props.stock.price)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Buy"/>
            </form>
        );
    }

}
export default NewPortfolioStock;