import React, { Component } from 'react';

class NewPortfolioStock extends Component {
    
    state = {
        stock: {...this.props.stock, user_id: this.props.user.id}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStockToPortfolio(this.state.stock)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="add"/>
            </form>
        );
    }

}
export default NewPortfolioStock;